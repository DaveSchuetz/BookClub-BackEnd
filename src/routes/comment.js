const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

router.get("/", commentController.index);
router.post("/", commentController.create);
router.put("/:id", commentController.update);
router.put("/:id", commentController.delete);

module.exports = router;
