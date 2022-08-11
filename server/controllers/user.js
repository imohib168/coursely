const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { Users } = require('../models');

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await Users.findOne({ where: { email: email } });

  if (!email && !password) {
    res.status(400).json({ message: 'Please provide all fields' });
    throw new Error('Please provide all fields');
  }

  if (!userExist) {
    res.status(400).json({ message: 'Account does not exist' });
    throw new Error('Account does not exist');
  }

  if (userExist && (await bcrypt.compare(password, userExist.password))) {
    res.json({
      ...userExist.dataValues,
      token: generateJWTToken(userExist.id),
    });
  } else {
    res.status(400).json({ message: 'Invalid credentials' });
    throw new Error('Invalid credentials');
  }
});

const register = asyncHandler(async (req, res) => {
  const { firstName, lastName, username, email, phone, password, role } =
    req.body;

  if (
    !firstName ||
    !lastName ||
    !username ||
    !email ||
    !phone ||
    !password ||
    !role
  ) {
    res.status(400).json({ message: 'Please provide all fields' });
    throw new Error('Please provide all fields');
  }

  const userExist = await Users.findOne({ where: { email: email } });
  const uniqueUsername = await Users.findOne({ where: { username: username } });

  if (userExist) {
    res.status(400).json({ message: 'User Already Exists' });
    throw new Error('User Already Exists');
  }

  if (uniqueUsername) {
    res.status(400).json({ message: 'Username should be unique' });
    throw new Error('Username should be unique');
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await Users.create({
    firstName,
    lastName,
    phone,
    email,
    username,
    password: hashedPassword,
    role,
    roleId: role === 'INSTRUCTOR' ? '1' : '2',
  });

  const createdUser = {
    ...newUser.dataValues,
    token: generateJWTToken(newUser.id),
  };

  if (newUser) {
    res.status(200).json(createdUser);
  } else {
    res.status(400).json({ message: 'Invalid user data' });
    throw new Error('Invalid user data');
  }
});

const profile = asyncHandler(async (req, res) =>
  res.status(200).json(req.user)
);

const updateProfile = asyncHandler(async (req, res) => {
  const {
    id,
    firstName,
    lastName,
    phone,
    githubURL,
    linkedinURL,
    facebookURL,
    bio,
    city,
    country,
  } = req.body;

  const updatedProfile = await Users.update(
    {
      bio,
      city,
      country,
      firstName,
      lastName,
      phone,
      githubURL,
      linkedinURL,
      facebookURL,
    },
    { where: { id: id } }
  );

  if (updatedProfile) {
    res.status(200).json({
      id,
      firstName,
      lastName,
      phone,
      githubURL,
      linkedinURL,
      facebookURL,
      city,
      country,
      bio,
      email: req.user.email,
      username: req.user.username,
      role: req.user.role,
      roleId: req.user.roleId,
      createdAt: req.user.createdAt,
      updatedAt: req.user.updatedAt,
      token: generateJWTToken(req.user.id),
    });
  } else {
    res.status(400).json({ message: 'Something went wrong' });
    throw new Error('Something went wrong');
  }
});

const publicProfile = asyncHandler(async (req, res) => {
  const { id: userId } = req.params;

  const userExist = await Users.findOne({ where: { id: userId } });

  if (userExist) {
    const { password, ...userData } = userExist.dataValues;
    res.status(200).json({ status: 'success', data: userData });
  } else {
    res.status(400).json({ status: 'error', message: 'User does not exist' });
    throw new Error('Something went wrong');
  }
});

const generateJWTToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

module.exports = {
  login,
  register,
  profile,
  updateProfile,
  publicProfile,
};
