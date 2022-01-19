const express = require('express');
const Project = require('@/models/Project');

const router = express.Router();

router.get('/projects', async (req, res) => {
  const { take = 10, skip = 0 } = req.query;
  console.log(take, skip);
  const query = Project.find();
  const count = await query.clone().count();
  const projects = await query.skip(skip).limit(take);
  res.send({ data: projects, meta: { total: count, skip, take } });
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

module.exports = router;
