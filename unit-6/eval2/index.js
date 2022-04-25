const http = require('http');
const app = require('./app');
const PORT = 9001;
const connectToDb = require('./mongoDb');

http.createServer(app).listen(PORT, () => {
    new connectToDb();
    console.log(`Listening to port ${PORT}...`);
})