const express = require('express');
const Project = require('@/models/Project');
const authorized = require('@/middlewares/auth');
const User = require('@/models/User');
const generateJWT = require('@/utils/generateJWT');

const router = express.Router();

router.post('/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log(req.body);

    if (!(username && password)) {
      res.status(400).send('All input is required');
    }

    const oldUser = await User.findOne({ username });

    if (oldUser) {
      return res.status(409).send('User Already Exist. Please Login');
    }

    const user = await User.create({
      username,
      password
    });

    const token = generateJWT(user);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(400).send('Error');
  }
});

router.post('/auth/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username && password)) {
      res.status(400).send('All input is required');
    }
    const user = await User.findOne({ username });

    const isValidPassword = await user.isValidPassword(password);

    if (isValidPassword) {
      const token = generateJWT(user);
      return res.status(200).json(token);
    }
    return res.status(400).send('Invalid Credentials');
  } catch (err) {
    return res.status(400).send();
  }
});

router.get('/auth/testtoken', authorized, (req, res) => {
  res.status(200).send('Welcome 🙌 ');
});

module.exports = router;
