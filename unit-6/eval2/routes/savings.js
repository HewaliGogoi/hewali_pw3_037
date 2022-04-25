const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const savingsController = require('../controllers/savingsController');

app.use(bodyParser.json([]));

app.post('/user/savingsAccount', savingsController.createSavings);

module.exports = app;
