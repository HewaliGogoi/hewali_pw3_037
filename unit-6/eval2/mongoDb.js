const mongoose = require('mongoose');

class Mongo{
    constructor(){
        this.createMongoConnection();
    };
    createMongoConnection(){
        mongoose.connect('mongodb://Hewali:123@localhost:27017/banking_system');
        mongoose.connection.once('open', () => {
            console.log('MongoDb is connected.');
        });
        mongoose.connection.on('error', () => {
            console.log('Error occured.');
        });
    }
}

module.exports = Mongo;