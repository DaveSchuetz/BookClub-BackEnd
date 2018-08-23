const Book = require("../models/Book");


module.exports = {
    show: (req, res) => {
        Book.findById(req.params.id)
            .then((books) => {
                res.json(books)
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

