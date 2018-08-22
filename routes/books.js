const express = require("express")
const router = express.Router()

const bookController = require("../controllers/book")


router.get("/book/search", bookController.search)
router.get("/book", bookController.all)
router.get("/book/:id", bookController.show)

router.post("/book/search", bookController.result)


module.exports = router;