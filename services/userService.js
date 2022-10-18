const User = require("../models/user");
const logger = require("../logger/logger");

const { v4: uuidv4 } = require("uuid");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne( { userId: req.params.id } );
        if(user != null) res.status(200).json(user);
        logger.error("User Not Found with id : " + req.params.id);
        res.status(404).json({ message: "User Not Found"});
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const createUser = async (req, res) => {
    const newUser = new User({
        userId: uuidv4(),
        name: req.body.name,
        number: req.body.number,
        email: req.body.email,
    });
    try {
        const createdUser = await newUser.save();
        logger.debug(createdUser);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne( { userId: req.params.id });
        if(user == null) {
            logger.error("User Not Found with id : " + req.params.id);
            res.status(404).json({ message: "User Not Found"});
        }
        user.name = req.body.name;
        user.number = req.body.number;
        user.email = req.body.email;

        const updatedUser = await user.save();
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const deleteUser = async (req, res) => {
    try {
        await User.deleteOne( { userId: req.params.id } );
        res.status(200).json("User Deleted");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { getAllUsers, getUserById, createUser, updateUser, deleteUser };