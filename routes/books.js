const express = require("express")
const router = express.Router()

const bookController = require("../controllers/book")


router.get("/book/search/:query", bookController.search)
router.get("/book", bookController.all)
router.get("/book/:id", bookController.show)

router.post("/book/search/:query", bookController.result)


module.exports = router;