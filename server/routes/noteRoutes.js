const express = require("express");
const router = express.Router();
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

//create note
router.post("/", authMiddleware, async (req, res) => {
  try {
    const note = new Note({
      ...req.body,
      userId: req.userId,
    });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    console.log("Create note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//get all notes
router.get("/", authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.json(notes);
  } catch (error) {
    console.log("Get Notes Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//update notes
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      req.body,
      { new: true },
    );
    if (!note) {
      res.status(404).json({ message: "Note not found" });
    }
    res.json(note);
  } catch (error) {
    console.log("Update Note error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

//delete note

router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });
    if (!note) {
      return res.status(404).json({ message: "Note nt found" });
    }
    res.json({ message: "Note deleted" });
  } catch (error) {
    console.log("Note delete error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
