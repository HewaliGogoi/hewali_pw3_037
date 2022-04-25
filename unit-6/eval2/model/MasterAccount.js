const mongoose = require('mongoose');

const MasterAccount = new mongoose.Schema({
    "balance" : {type : Number, required : true},
    "createdAt" : {type : Date, required : true},
    "updatedAt" : {type : Date, required : true},
});

module.exports = mongoose.model("MasterAccount", MasterAccount);