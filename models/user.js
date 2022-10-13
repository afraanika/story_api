const mongoose = require("mongoose");

const userSchema = new mongoose.Schema( {
    userId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },

    number: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    createdOn: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("User", userSchema);