const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userModel = require('./models');

app.use(bodyParser.json([]));

app.post('/user/masterAccount/:id', async(req, res) => {
    try {
        let userId = req.params.id;
        let response = await userModel.find({_id : userId});
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

app.get('/user/masterAccount/:id', async(req, res) => {
    try {
        let userId = req.params.id;
        let response = await userModel.find({_id : userId});
        res.json(response);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = app;