// Tasks Route
const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// GET /api/tasks
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json({ message: "OK", data: tasks });
});

module.exports = router;