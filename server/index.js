require('module-alias/register');
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('@/routes/auth');
const projectRoutes = require('@/routes/projects');
const initDB = require('./db');

const app = express();
initDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', authRoutes);
app.use('/api', projectRoutes);

app.get('*', function (req, res) {
  res.status(404).send();
});

app.listen(3001, () => {
  console.log('Server has started!');
});
