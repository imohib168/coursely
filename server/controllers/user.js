const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await Users.findOne({ where: { email: email } });

  if (!email && !password) {
    res.status(400);
    throw new Error('Please provide all fields');
  }

  if (!userExist) {
    res.status(400);
    throw new Error('Account does not exist');
  }

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    res.json({
      id: userExist.id,
      username: userExist.username,
      email: userExist.email,
      token: generateJWTToken(userExist.id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid credentials');
  }
});

const register = asyncHandler(async (req, res) => {
  const { email, username, password, usertype } = req.body;

  if (!email || !username || !password || !usertype) {
    res.status(400);
    throw new Error('Please provide all fields');
  }

  const userExist = await Users.findOne({ where: { email: email } });
  const uniqueUsername = await Users.findOne({ where: { username: username } });

  if (uniqueUsername) {
    res.status(400);
    throw new Error('Username should be unique');
  }

  if (userExist) {
    res.status(400);
    throw new Error('User Already Exists');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await Users.create({
    email,
    username,
    password: hashedPassword,
    usertype,
  });

  if (newUser) {
    res.status(200).json({ ...newUser, token: generateJWTToken(newUser.id) });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});

const profile = asyncHandler(async (req, res) =>
  res.status(200).json(req.user)
);

const generateJWTToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

module.exports = {
  login,
  register,
  profile,
};
