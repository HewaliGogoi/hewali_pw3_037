const express = require('express');
const app = express();
const port = 4005;
const connect = require('./mongoDb');

app.listen(port, async() => {
    try {
        await connect();
        console.log(`Listening to port ${port}...`);
    } catch (err) {
        console.log(err);
    }
})