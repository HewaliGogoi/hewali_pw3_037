const http = require("http");
const app = require("./controllers/routers");
const port = 4005;
const connect = require('./mongoDb');

http.createServer(app).listen(port, async ()=>{
    await connect();
    console.log(`Server is connected ${PORT}`)
})