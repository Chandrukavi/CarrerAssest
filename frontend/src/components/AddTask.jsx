import { useState } from "react";
import { createTask } from "./api";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "Pending",
    priority: "P1",
    assignee: "",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    window.location.href = "/"; // Redirect to the home page
  };

  return (
    <div className="flex justify-center w-full items-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-lg p-8 bg-white shadow-xl rounded-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600">Add New Task</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Task Title */}
          <div className="flex flex-col">
            <label htmlFor="title" className="text-sm font-semibold text-gray-700 mb-2">Task Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter task title"
              value={task.title}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          {/* Task Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="text-sm font-semibold text-gray-700 mb-2">Task Description</label>
            <textarea
              name="description"
              placeholder="Describe the task"
              value={task.description}
              onChange={handleChange}
              required
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 h-32"
            />
          </div>

          {/* Start and End Dates */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="startDate" className="text-sm font-semibold text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={task.startDate}
                onChange={handleChange}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="endDate" className="text-sm font-semibold text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={task.endDate}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              />
            </div>
          </div>

          {/* Status and Priority Dropdowns */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="status" className="text-sm font-semibold text-gray-700 mb-2">Status</label>
              <select
                name="status"
                value={task.status}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 hover:bg-indigo-50"
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Deferred">Deferred</option>
                <option value="Deployed">Deployed</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="priority" className="text-sm font-semibold text-gray-700 mb-2">Priority</label>
              <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 hover:bg-indigo-50"
              >
                <option value="P1">High</option>
                <option value="P2">Medium</option>
                <option value="P0">Low</option>
              </select>
            </div>
          </div>

          {/* Assignee */}
          <div className="flex flex-col">
            <label htmlFor="assignee" className="text-sm font-semibold text-gray-700 mb-2">Assignee</label>
            <input
              type="text"
              name="assignee"
              placeholder="Assignee name"
              value={task.assignee}
              onChange={handleChange}
              className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
