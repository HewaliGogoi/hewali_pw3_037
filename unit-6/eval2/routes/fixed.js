const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fixedController = require('../controllers/fixedController');

app.use(bodyParser.json([]));

app.post('/user/fixedAccount', fixedController.createFixed);

module.exports = app;