const mongoose = require('mongoose');

const SavingsAccount = new mongoose.Schema({
    "account_number" : {type : Number, required : true, unique : true},
    "balance" : {type : Number, required : true},
    "interestRate" : {type : Number, required : true},
    "createdAt" : {type : Date},
    "updatedAt" : {type : Date},
});

module.exports = mongoose.model("SavingsAccount", SavingsAccount);