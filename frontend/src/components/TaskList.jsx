import  { useEffect, useState } from "react";
import Task from "./Task";
import { fetchTasks } from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const response = await fetchTasks();
      setTasks(response.data);
    };
    getTasks();
  }, []);

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task key={task._id} {...task} />
      ))}
    </ul>
  );
};

export default TaskList;
