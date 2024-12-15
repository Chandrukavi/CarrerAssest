const Task = require('../model/task');

// Create Task
const createTask = async (req, res) => {
  const { title, description, startDate, endDate, status, assignee, priority } = req.body;
  const newTask = new Task({
    title,
    description,
    startDate,
    endDate,
    status,
    assignee,
    priority,
  });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: 'Error creating task', error: err });
  }
};

// Get All Tasks
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: 'Error fetching tasks', error: err });
  }
};

// Update Task
const updateTask = async (req, res) => {
  const { id } = req.params;
  const updatedTask = req.body;

  try {
    const task = await Task.findByIdAndUpdate(id, updatedTask, { new: true });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ message: 'Error updating task', error: err });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted' });
  } catch (err) {
    res.status(400).json({ message: 'Error deleting task', error: err });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
