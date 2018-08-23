const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const Book = new Schema({

    title: String,
    author: String,
    description: String,
    image: String,

})
Book.index({ title: 'text', author: 'text' })

module.exports = mongoose.model("Book", Book)
