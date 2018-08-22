const Book = require("../models/Book");
const Comment = require("../models/Comment");


module.exports = {
    show: (req, res) => {
        Book.findOne({ _id: req.params.id })
            .then((books) => {
                res.JSON(books)
            })
    },
    search: (req, res) => {
        res.render("/book/search")
    },
    result: (req, res) => {
        res.render("/book/search", function (req, res) {
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
                })
        })
    }
}
