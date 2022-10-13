const Story = require("../models/story");

const getAllStories = async (req, res) => {
    try {
        const stories = await Story.find();
        res.status(200).json(stories);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getStoryById = async (req, res) => {
    try {
        const story = await Story.findOne( { storyId: req.params.id } );
        res.status(200).json(story);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createStory = async (req, res) => {
    const newStory = new Story({
        storyId: req.body.storyId,
        title: req.body.title,
        description: req.body.description,
        authorEmail: req.body.authorEmail,
    });
    try {
        const createdStory = await newStory.save();
        res.status(201).json(createdStory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateStory = async (req, res) => {
    try {
        const story = await Story.findOne( { storyId: req.params.id });
        story.title = req.body.title;
        story.description = req.body.description;
        story.authorEmail = req.body.authorEmail;

        const updatedStory = await story.save();
        res.status(200).json(updatedStory);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteStory = async (req, res) => {
    try {
        await Story.deleteOne( { storyId: req.params.id } );
        res.status(200).json("Story Deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllStories, getStoryById, createStory, updateStory, deleteStory }