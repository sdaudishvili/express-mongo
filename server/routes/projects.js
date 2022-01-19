const express = require('express');
const Project = require('@/models/Project');

const router = express.Router();

const transformProject = (x) => ({
  ...x._doc,
  id: x._id
});

router.get('/projects', async (req, res) => {
  const { take = 10, skip = 0 } = req.query;
  console.log(take, skip);
  const query = Project.find();
  const count = await query.clone().count();
  const projects = await query.skip(skip).limit(take);
  res.send({ data: projects.map(transformProject), meta: { total: count, skip, take } });
});

router.get('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findOne({ _id: req.params.id });
    res.send(transformProject(project));
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
      adminTestUrls: req.body.adminTestUrls,
      repositoryUrls: req.body.repositoryUrls,
      productionFrontUrls: req.body.productionFrontUrls,
      productionAdminUrls: req.body.productionAdminUrls,
      projectManager: req.body.projectManager,
      backends: req.body.backends,
      frontends: req.body.frontends,
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
    res.send(transformProject(project));
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
    project.adminTestUrls = req.body.adminTestUrls;
    project.repositoryUrls = req.body.repositoryUrls;
    project.productionFrontUrls = req.body.productionFrontUrls;
    project.productionAdminUrls = req.body.productionAdminUrls;
    project.projectManager = req.body.projectManager;
    project.backends = req.body.backends;
    project.frontends = req.body.frontends;
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
    res.send(transformProject(project));
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
