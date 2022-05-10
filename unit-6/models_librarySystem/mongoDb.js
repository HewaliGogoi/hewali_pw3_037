const mongoose = require('mongoose');

class Mongo{
    constructore(){
        this.createMongoConnection();
    }
    createMongoConnection(){
        mongoose.connect('mongodb://Hewali:123@localhost:27017/library_system');
        mongoose.connection.once('open', () => {
            console.log('MongoDb is connected');
        });
        mongoose.connection.on('error', () => {
            console.log('Error occured');
        });
    }
}

module.exports = Mongo;