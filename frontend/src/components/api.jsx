import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Fetch all tasks
export const fetchTasks = () => API.get("/tasks");

// Create a new task
export const createTask = (taskData) => API.post("/tasks", taskData);

// Update a task
export const updateTask = (id, updatedData) => API.put(`/tasks/${id}`, updatedData);

// Delete a task
export const deleteTask = (id) => API.delete(`/tasks/${id}`);
