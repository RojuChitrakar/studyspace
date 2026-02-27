// const express = require("express");
// const router = express.Router();
// const Task = require("../models/Task");
// const authMiddleware = require("../middleware/authMiddleware");

// //create task
// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const task = new Task({
//       ...req.body,
//       userId: req.userId,
//     });

//     await task.save();
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// //get all task
// router.get("/", authMiddleware, async (req, res) => {
//   try {
//     const priorityOrder = { High: 1, Medium: 2, Low: 3 };

//   const tasks = await Task.find({ userId: req.user.id });

//   tasks.sort(
//     (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
//   );

//   res.json(tasks);
//   } catch (error) {
//     console.log("GET TASK ERROR:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });


// //update task
// router.put("/:id", authMiddleware, async (req, res) => {
//   try {
//     const task = await Task.findOneAndUpdate(
//       { _id: req.params.id, userId: req.userId },
//       req.body,
//       { new: true },
//     );
//     if (!task) {
//       return res.status(404).json({ message: "Taks not found" });
//     }
//     res.json(task);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// //delete task
// router.delete("/:id", authMiddleware, async (req, res) => {
//   try {
//     const task = await Task.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.userId,
//     });

//     if (!task) {
//       return res.status(404).json({ message: "Task not found" });
//     }

//     res.json({ message: "Task deleted" });
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports=router;

//updated
const express = require("express");
const router = express.Router();
const Task = require("../models/Task");
const authMiddleware = require("../middleware/authMiddleware");


// CREATE TASK
router.post("/", authMiddleware, async (req, res) => {
  try {
    const task = new Task({
      ...req.body,
      userId: req.userId, // ✅ consistent
    });

    await task.save();
    res.status(201).json(task);
  } catch (error) {
    console.log("CREATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});


// GET ALL TASKS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };

    const tasks = await Task.find({ userId: req.userId }); // ✅ fixed

    tasks.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );

    res.json(tasks);
  } catch (error) {
    console.log("GET TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});


// UPDATE TASK
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // ✅ consistent
      req.body,
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.log("UPDATE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});


// DELETE TASK
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId, // ✅ consistent
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted" });
  } catch (error) {
    console.log("DELETE TASK ERROR:", error);
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;