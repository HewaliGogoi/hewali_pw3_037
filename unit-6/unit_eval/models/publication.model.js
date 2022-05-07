const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    name : {type:String, required:true},
    book: { type: mongoose.Schema.Types.ObjectId,
        ref:"book"
    },
}, 
{
    timestamps:true
});

const publication = mongoose.model("publication", publicationSchema);
 
module.exports = publication;