const express = require("express");
const parser = require("body-parser");
const methodOverride = require("method-override");
var cors = require("cors");

const app = express();

app.use(cors());
app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(methodOverride("_method"));

app.use(require("./routes/books.js"));
<<<<<<< HEAD
=======
app.use(require("./routes/comment.js"));

>>>>>>> 7312cf5aad314faa3eb2a1a17ff7302ce0eb07a7

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
