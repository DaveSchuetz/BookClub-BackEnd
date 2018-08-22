const Book = require("../models/Book");
const Comment = require("../models/Comment");


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
    search: (req, res) => {
        res.json("/book/search/")
    },
    result: (req, res) => {
        res.json("/book/search", function (req, res) {
            db.collection("books").find({
                "$text": {
                    "$search": req.body.query
                }
            }, {
                    title: 1,
                    author: 1,
                    textScore: {
                        $meta: "textScore"
                    }
                }, {
                    sort: {
                        textScore: {
                            $meta: "textScore"
                        }
                    }
                }).toArray(function (err, books) {
                    res.send(books)
                })
        })
    }
}
