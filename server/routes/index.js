const express = require('express');
const jwt = require('jsonwebtoken');
const Project = require('../models/Project');
const User = require('../models/User');
const authorized = require('../middlewares/auth');

const router = express.Router();

const secretKey = 'testkey';

router.get('/projects', async (req, res) => {
  const projects = await Project.find();
  res.send(projects);
});

router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.send(project);
  } catch {
    res.status(404);
    res.send({ error: "Project doesn't exist!" });
  }
});

router.post('/projects', async (req, res) => {
  console.log(req.body);
  try {
    const project = new Project({
      title: req.body.title,
      frontTestUrls: req.body.frontTestUrls,
      backTestUrls: req.body.backTestUrls,
      repositoryUrls: req.body.repositoryUrls,
      productionUrls: req.body.productionUrls,
      projectManager: req.body.projectManager,
      backend: req.body.backend,
      frontend: req.body.frontend,
      designUrls: req.body.designUrls,
      designers: req.body.designers,
      clientName: req.body.clientName,
      clientMail: req.body.clientMail,
      clientPhone: req.body.clientPhone,
      hasSupport: req.body.hasSupport,
      supportStartDate: req.body.supportStartDate,
      supportEndDate: req.body.supportEndDate,
      year: req.body.year,
      isOnOurServer: req.body.isOnOurServer
    });
    await project.save();
    res.send(project);
  } catch (error) {
    console.log(error);
    res.status(400).send();
  }
});

router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    project.title = req.body.title;
    project.frontTestUrls = req.body.frontTestUrls;
    project.backTestUrls = req.body.backTestUrls;
    project.repositoryUrls = req.body.repositoryUrls;
    project.productionUrls = req.body.productionUrls;
    project.projectManager = req.body.projectManager;
    project.backend = req.body.backend;
    project.frontend = req.body.frontend;
    project.designUrls = req.body.designUrls;
    project.designers = req.body.designers;
    project.clientName = req.body.clientName;
    project.clientMail = req.body.clientMail;
    project.clientPhone = req.body.clientPhone;
    project.hasSupport = req.body.hasSupport;
    project.supportStartDate = req.body.supportStartDate;
    project.supportEndDate = req.body.supportEndDate;
    project.year = req.body.year;
    project.isOnOurServer = req.body.isOnOurServer;
    await project.save();
    res.send(project);
  } catch {
    res.status(404);
    res.send({ error: "Project doesn't exist!" });
  }
});

router.delete('/projects/:id', async (req, res) => {
  try {
    await Project.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(404);
    res.send({ error: "Project doesn't exist!" });
  }
});

router.post('/register', async (req, res) => {
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

    const token = jwt.sign({ user_id: user._id, username }, secretKey, {
      expiresIn: '2h'
    });
    return res.status(201).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(400).send('Error');
  }
});

router.post('/login', async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    const { username, password } = req.body;

    // Validate user input
    if (!(username && password)) {
      res.status(400).send('All input is required');
    }
    // Validate if user exist in our database
    const user = await User.findOne({ username });

    const isValidPassword = await user.isValidPassword(password);

    if (isValidPassword) {
      const token = jwt.sign({ user_id: user._id, username }, secretKey, {
        expiresIn: '2h'
      });

      return res.status(200).json(token);
    }
    return res.status(400).send('Invalid Credentials');
  } catch (err) {
    return res.status(400).send();
  }
  // Our register logic ends here
});

router.get('/welcome', authorized, (req, res) => {
  res.status(200).send('Welcome 🙌 ');
});

module.exports = router;
