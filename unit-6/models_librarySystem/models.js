const mongoose = require('mongoose');

const section = new mongoose.Schema({
    "section_name" : {type : String}
})

const books = new mongoose.Schema({
    "book_name" : {type : String, reuired : true},
    "authors" : {}
})