const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: String, required: true },
  endDate: { type: String },
  status: { type: String, required: true, enum: ["Pending", "In Progress", "Completed", "Deferred", "Deployed"] },
  priority: { type: String, enum: ["P0", "P1", "P2"], default: "P1" },
  assignee: { type: String },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("Task", taskSchema);
