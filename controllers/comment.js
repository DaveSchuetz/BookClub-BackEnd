const Book = require("../models/Book");
const Comment = require("../models/Comment");

module.exports = {
  index: (req, res) => {
    Comment.find({}).then(comments => {
      res.render("NOT SURE WHERE", { comments }); //TODO:  location
    });
  },
  create: (req, res) => {
    Comment.create({
      comment: req.body.comment.content //TODO:  is this correct?
    }).then(comment => {
      Book.findOne({ _id: req.body.book }).then(book => {
        book.comments.push(comment);
        comment.save(err => {
          res.redirect("NOT SURE WHERE"); //TODO: location
        });
      });
    });
  },
  update: (req, res) => {
    let { comment } = req.body;
    Comment.findOne({ _id: req.params.id }).then(comment => {
      comment.comments.push({
        comment
      });
      comment.save(err => {
        res.redirect("NOT SURE WHERE"); //TODO: location
      });
    });
  },
  delete: (req, res) => {
    Comment.findOneAndRemove({ _id: req.params.id }).then(comment => {
      res.redirect("/");
    });
  }
};
