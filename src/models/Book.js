const mongoose = require("../../db/connection")
const Schema = mongoose.Schema

const Book = new Schema({

    title: String,
    author: String,
    description: String,
    image: String,

})


module.exports = mongoose.model("Book", Book)

// {
//     Book: mongoose.model("Book", Book),
//     // Comment: mongoose.model("Comment", Comment)
// }