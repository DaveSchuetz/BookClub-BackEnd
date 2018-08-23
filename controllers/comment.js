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
      comment: req.body.comment.content //TODO:  is this correct?
    }).then(comment => {
      Book.findOne({ _id: req.body.book }).then(book => {
        book.comments.push(comment);
        comment.save(err => {
          res.json(comments);
        });
      });
    });
  },

  update: (req, res) => {
    //let { comment } = req.body;
    Comment.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $push: {
          comment: req.body.comment
        }
      }
    ).then(comment => {
      res.redirect("/book/:id");
    });
  },

  delete: (req, res) => {
    Comment.findOneAndRemove({ _id: req.params.id }).then(comment => {
      res.redirect("/book/:id");
    });
  }
};
