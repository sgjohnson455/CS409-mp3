// Users routes

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET /api/users--
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({ message: "OK", data: users });
});

// GET user by ID --
router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User was not found" });
    res.json(user);
});

// CREATE the user ----
router.post("/", async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
});

module.exports = router;