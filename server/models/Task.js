// const mongoose = require("mongoose");

// const taskSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//     },

//     title: {
//       type: String,
//       required: true,
//     },

//     subject: {
//       type: String,
//     },

//     description: {
//       type: String,
//     },

//     priority: {
//       type: String,
//       enum: ["Low", "Medium", "High"],
//       default: "Medium",
//     },

//     dueDate: {
//       type: Date,
//     },

//     status: {
//       type: String,
//       enum: ["pending", "completed"],
//       default: "pending",
//     },
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Task", taskSchema);


//updated schema
const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    dueDate: {
      type: Date,
      required: true,
      validate: {
        validator: function (value) {
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          return value >= today;
        },
        message: "Due date cannot be in the past",
      },
    },

    status: {
      type: String,
      enum: ["pending", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);