const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  title: String,
  frontTestUrls: [String],
  adminTestUrls: [String],
  repositoryUrls: [String],
  productionFrontUrls: [String],
  productionAdminUrls: [String],
  projectManager: String,
  backends: String,
  frontends: String,
  designUrls: [String],
  designers: String,
  clientName: String,
  clientMail: String,
  clientPhone: String,
  hasSupport: Boolean,
  supportStartDate: Date,
  supportEndDate: Date,
  year: String,
  isOnOurServer: Boolean,
  createdAt: { type: Date, default: new Date() }
});

module.exports = mongoose.model('Project', ProjectSchema);
