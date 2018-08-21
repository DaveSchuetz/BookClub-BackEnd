const express = require("express");
const router = express.Router();

router.use("/", indexController.index);
router.use("/book", require("./book"));
router.use("/comment", require("./comment"));

//router.all('*', (req, res) => {
// res.status(400).send();
//});

module.exports = router;
