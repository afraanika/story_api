const express = require("express");
const { getAllStories, createStory, getStoryById, updateStory, deleteStory } = require("../services/storyService");

const router = express.Router();

router.get("/", getAllStories);
router.get("/:id", getStoryById);
router.post("/", createStory);
router.put("/:id", updateStory);
router.delete("/:id", deleteStory);

module.exports = router;