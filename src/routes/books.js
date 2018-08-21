const express = require("express")
const router = express.Router()
const bookController = require("../controllers/book")

router.get("/book/:id", bookController.show)
router.get("/book", bookController.show)

module.exports = router;