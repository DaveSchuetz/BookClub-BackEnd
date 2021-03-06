const Book = require("../models/Book");
const Comment = require("../models/Comment");

module.exports = {
  index: (req, res) => {
    Comment.find({})
      .then(comments => {
        res.json(comments);
      })
      .catch(err => {
        console.log(err);
      });
  },

  create: (req, res) => {
    Comment.create({
      comment: req.body.content,
      book: req.body.book
    }).then(comment => {
      Book.findById(req.body.book).then(book =>{
        book.comments.push(comment)
        book.save(err =>{
          res.json(comment)
        })
      })
    })
      
  },

  update: (req, res) => {
    Comment.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  },

  delete: (req, res) => {
    Comment.findByIdAndRemove(req.params.id, req.body, function (err, post) {
      if (err) return next(err);
      res.json(post);
    })
  }
};
