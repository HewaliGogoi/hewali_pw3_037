const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fixedController = require('../controllers/fixedController');
const masterController = require('../controllers/masterController');
const savingsController = require('../controllers/savingsController');

app.use(bodyParser.json([]));

app.post('/user/fixedAccount', fixedController.createFixed);
app.get('/user/masterAccount/:id', masterController.getMaster);
app.post('/user/savingsAccount', savingsController.createSavings);
app.get('/user/savingsAccount', savingsController.getSavings);


module.exports = app;