const jwt = require('jsonwebtoken');
const jwtSettings = require('@/config/jwtSettings');

const authorized = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    const decoded = jwt.verify(token, jwtSettings.secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Unauthorized');
  }
  return next();
};

module.exports = authorized;
