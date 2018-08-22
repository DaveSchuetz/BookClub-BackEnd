const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

router.get("/", commentController.index);
router.post("/", commentController.create);
router.put("/comment/:id", commentController.update);
router.delete("/comment/:id", commentController.delete);

module.exports = router;

