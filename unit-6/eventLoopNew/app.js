const express = require('express');
const app = express();

app.get('/', (request, response, next) => {
    response.send('hello');
})

app.get('/books', (request, response, next) => {
    response.json({
        'book1' : 'Do Androids Dream of Electric Sheep?',
        'book2' : 'Is Everyone Hanging Out Without Me?',
        'book3' : 'The Book of Names',
        'book4' : 'Brave New World'
    })
});

module.exports = app;