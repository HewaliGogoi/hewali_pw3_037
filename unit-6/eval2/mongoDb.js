const mongoose = require('mongoose');

class Mongo{
    constructor(){
        this.createMongoConnection();
    };
    createMongoConnection(){
        mongoose.connect('mongodb+srv://Hewali:Hewali_123@cluster0.n8vku.mongodb.net/banking_system');
        mongoose.connection.once('open', () => {
            console.log('MongoDb is connected.');
        });
        mongoose.connection.on('error', () => {
            console.log('Error occured.');
        });
    }
}

module.exports = Mongo;