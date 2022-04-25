const http = require('http');
const app = require('./routes/master');
const PORT = 9006;
const connectToDb = require('./mongoDb');

// const fixedController = require('./controllers/fixedController');
// const masterController = require('./controllers/masterController');
// const savingsController = require('./controllers/savingsController');

// app.use('fixedAccount', fixedController);
// app.use('masterAccount', masterController);
// app.use('savingsAccount', savingsController);

http.createServer(app).listen(PORT, () => {
    new connectToDb();
    console.log(`Listening to port ${PORT}...`);
})