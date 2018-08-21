const mongoose = require("../../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  comment: Array
});

module.exports = mongoose.model("Comment", Comment);
