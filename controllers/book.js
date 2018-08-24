const Book = require("../models/Book");
const Comment = require("../models/Comment")


module.exports = {
    show: (req, res) => {
        Book.findById(req.params.id)
        .populate('comments')
        .then((comments) =>{
            res.json(comments)
        })
    },
    all: (req, res) => {
        Book.find()
            .then((books) => {
                res.json(books)
            })
            .catch((err) => {
                console.log(err)
            })
    },
    result: (req, res) => {
            Book.find({
                "$text": {
                    "$search": req.body.query
                }
                }).then((books) => {
                    res.json(books)
                })
        }
    }

