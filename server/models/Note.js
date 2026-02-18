const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    subject: {
      type: String
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    position: {
      x: { type: Number, default: 100 },
      y: { type: Number, default: 100 },
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Note", noteSchema);
