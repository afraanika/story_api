const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
    storyId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Story", storySchema);