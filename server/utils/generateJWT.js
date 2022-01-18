const jwt = require('jsonwebtoken');
const jwtSettings = require('@/config/jwtSettings');

module.exports = (user) => {
  return jwt.sign({ user_id: user._id, username: user.username }, jwtSettings.secretKey, {
    expiresIn: jwtSettings
  });
};
