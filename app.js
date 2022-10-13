const express = require("express");
require("./config/db");

const userController = require("./controllers/userController");
const storyController = require("./controllers/storyController");

const app = express();

app.use(express.urlencoded( { extended: true }));
app.use(express.json());

app.use("/users", userController);
app.use("/stories", storyController);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/./views/index.html");
});

app.use((req, res, next) => {
    res.status(404).json( {
        message: "Page Not Found",
    });
});

app.use((req, res, next) => {
    res.status(500).json( {
        message: "Internal Server Error",
    });
})

module.exports = app;