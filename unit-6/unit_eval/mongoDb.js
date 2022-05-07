const mongoose = require('mongoose');

const connect = () => {
    return mongoose.connect("mongodb+srv://Hewali:booksystem123@cluster0.ntox0.mongodb.net/booksystem")
    .then(() => console.log("MongoDb is connected."))
    .catch((err) => console.log(err))
}

module.exports = connect;