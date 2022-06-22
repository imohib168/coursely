const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
const { Users } = require('../models');

const authProtect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];

      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await Users.findOne({
        attributes: { exclude: ['password'] },
        where: { id: verifiedToken.id },
      });

      next();
    } catch (error) {
      res.status(401);
      throw new Error('You are Not authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('You must have token to be an authenticated User');
  }
});

module.exports = { authProtect };
