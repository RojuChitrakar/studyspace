const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;

    const totalTasks = await Task.countDocuments({ userId });
    const completedTasks = await Task.countDocuments({
      userId,
      status: "completed",
    });
    const pendingTasks = await Task.countDocuments({
      userId,
      status: "pending",
    });

    const overdueTasks = await Task.countDocuments({
      userId,
      status: "pending",
      dueDate: { $lt: new Date() },
    });

    const totalNotes = await Note.countDocuments({ userId });

    res.json({
      totalTasks,
      completedTasks,
      pendingTasks,
      overdueTasks,
      totalNotes,
    });
  } catch (error) {
    console.log("Dashboard Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
