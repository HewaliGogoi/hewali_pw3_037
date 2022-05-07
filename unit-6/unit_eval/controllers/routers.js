const express = require("express");
const app = express();
const User = require("../models/user.model")
const Book = require("../models/book.model")
const Publication = require("../models/publication.model")
const Comment = require("../models/comment.model")


app.use(express.json())
app.post("/user", async (req, res, next) => {
    console.log("inside register")
  try {
      let email = req.body.email
      let response1 = await User.findOne({ email })
        if (response1) {
         
           
            res.send(response1 )
        } else {
         
          
    
          let userData = {
              firstName: req.body.firstName,
              lastName: req.body.lastName,
              age: req.body.age,
              email:req.body.email,
              profileImages :[ ...[req.body.profileImages]],
            
            
          }
          let response1 = await User.insertMany([userData]);
    
            res.send(response1)
        }
      
  } catch (error) {
    res.send(error)
  }



});
app.post("/book", async (req, res, next) => {
  let book =await Book.insertMany([req.body])
  res.send(book)
});

module.exports = app;