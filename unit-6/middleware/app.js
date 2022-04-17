const express = require("express");
const app = express();

const bookArr = [{name : 'Do Androids Dream of Electric Sheep'},
    {name : 'Is Everyone Hanging Out Without Me?'},
    {name : 'The_Book_of_Names'},
    {name : 'Brave_New_World'}];

app.get('/books', (req, res) => {
    res.send('Fetching the books...');
})

app.get('/books/:id', (req, res, next) => {
    let id = req.params.id;
    res.json(bookArr.filter((e) => e.name == id));
}
// ,
// (req, res) => {
//     res.send('Book is not available');
// }
);

module.exports = app;