// Tasks Route
const express = require("express");
const router = express.Router();
const Task = require("../models/task");

// GET /api/tasks--
router.get("/", async (req, res) => {
    const tasks = await Task.find();
    res.json({ message: "OK", data: tasks });
});

module.exports = router;

// GET task using the id---
router.get("/:id", async (req, res) => {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ message: "Task was not found" });
    res.json(task);
});

// CREATE the task ----
router.post("/", async (req, res) => {
    const { name, description, deadline } = req.body;
    const task = new Task({ name, description, deadline });
    await task.save();
    res.status(201).json(task);
});