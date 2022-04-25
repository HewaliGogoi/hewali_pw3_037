const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const masterController = require('../controllers/masterController');

app.use(bodyParser.json([]));

app.post('/user/masterAccount/:id', masterController.getMaster);

module.exports = app;
