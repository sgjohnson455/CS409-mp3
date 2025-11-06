// Users routes

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// GET /api/users
router.get("/", async (req, res) => {
    const users = await User.find();
    res.json({ message: "OK", data: users });
});

module.exports = router;