const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");

//create task
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      userId: req.userId,
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//get all task
router.get("/", authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId }).sort({ createdAt: -1 });

    res.json(tasks);

  } catch (error) {
    console.log("GET TASK ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


//update task
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true },
    );
    if (!task) {
      return res.status(404).json({ message: "Taks not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

//delete task
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports=router;

