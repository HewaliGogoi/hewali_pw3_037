const mongoose = require('mongoose');

const MasterAccount = new mongoose.Schema({
    "balance" : {type : Number, required : true}
},
{
    timestamps : true
});

module.exports = mongoose.model("MasterAccount", MasterAccount);