const express = require("express");
const router = express.Router();
const StudySession = require("../models/StudySession");
const authMiddleware = require("../middleware/authMiddleware");

// CREATE SESSION (after Pomodoro completes)
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { duration } = req.body;

    const session = new StudySession({
      userId: req.userId,
      duration
    });

    await session.save();

    res.status(201).json(session);

  } catch (error) {
    console.log("Create Session Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET ALL SESSIONS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const sessions = await StudySession.find({ userId: req.userId })
      .sort({ createdAt: -1 });

    res.json(sessions);

  } catch (error) {
    console.log("Get Sessions Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET TOTAL STUDY TIME
router.get("/total", authMiddleware, async (req, res) => {
  try {
    const sessions = await StudySession.find({ userId: req.userId });

    const totalMinutes = sessions.reduce(
      (acc, session) => acc + session.duration,
      0
    );

    res.json({ totalMinutes });

  } catch (error) {
    console.log("Total Study Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
