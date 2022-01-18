require('module-alias/register');
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('@/routes');

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true }).then(() => {
  const app = express();
  app.use(morgan('combined'));
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  app.use('/api', routes);

  app.listen(3001, () => {
    console.log('Server has started!');
  });
});
