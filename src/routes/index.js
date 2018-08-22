const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index")

router.use("/", indexController.index);
router.use("/book", require("./books"));
// router.use("/comment", require("./comment"));

//router.all('*', (req, res) => {
// res.status(400).send();
//});

module.exports = router;
