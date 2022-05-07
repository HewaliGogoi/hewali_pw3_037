const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    likes : {type:Number, default:0},
    coverImage : {type:String, required:true, min:1, max:1},
    content : {type:String, required:true},
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "comment",
        },
    ],
}, 
{
    timestamps:true
});

const book = mongoose.model("book", bookSchema);
 
module.exports = book;