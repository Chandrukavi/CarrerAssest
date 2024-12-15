
import PropTypes from "prop-types";
import { updateTask, deleteTask } from "../api";

const Task = ({ id, title, completed, description, startDate, endDate }) => {
  const handleToggleCompleted = async () => {
    await updateTask(id, { completed: !completed });
    window.location.reload(); // Refresh tasks
  };

  const handleRemoveTask = async () => {
    await deleteTask(id);
    window.location.reload(); // Refresh tasks
  };

  return (
    <li className={`task ${completed ? "completed" : ""}`}>
      <input type="checkbox" checked={completed} onChange={handleToggleCompleted} />
      <span>{title}</span>
      <p>{description}</p>
      <span className="text-rose-400">Start Date: {startDate.slice(0, 10)}</span>
      <span>End Date: {endDate ? endDate.slice(0, 10) : "---"}</span>
      <button onClick={handleRemoveTask}>Remove</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string,
  status: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
};

export default Task;
