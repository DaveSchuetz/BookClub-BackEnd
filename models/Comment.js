const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  comment: String,
  book:[{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

module.exports = mongoose.model("Comment", Comment);

