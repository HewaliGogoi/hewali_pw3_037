const express = require('express');
const app = express();

app.use(express.json());

let body;
app.post('/user', (req, res, next) => {
    body = req.body;
    console.log(body);
    next();
},
(req, res, next) => {
    if(body.first_name){
        next();
    }
},
(req, res, next) => {
    if(body.last_name){
        next();
    }
},
(req, res, next) => {
    if(body.email.includes("@")){
        next();
    }
},
(req, res, next) => {
    if(body.pincode.length == 6){
        next();
    }
},
(req, res, next) => {
    if(body.age >= 1 && body.age <= 100){
        next();
    }
},
(req, res, next) => {
    if(body.gender == "Female" || body.gender == "Male" || body.gender == "Others"){
        next();
    }
},
(req, res) => {
    res.send("Signed up successfully!")
}
)

module.exports = app;