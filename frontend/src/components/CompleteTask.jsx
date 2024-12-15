import  { useEffect, useState } from 'react';
import axios from 'axios';
import TaskCard from './TaskCard';
import { Link } from 'react-router-dom';

const CompleteTask = () => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchCompletedTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/tasks');
      const completed = response.data.filter((task) => task.status === 'Completed');
      setCompletedTasks(completed);
    };
    fetchCompletedTasks();
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="mt-10">
        <h1 className="text-3xl font-bold my-8 text-center text-gray-800">Completed Tasks</h1>
      </div>
      {completedTasks.length > 0 ? (
        <div className="flex flex-wrap gap-y-4 gap-x-14 justify-center overflow-y-scroll mt-5 h-[50vh] sm:h-[80vh]">
          {completedTasks.map((task) => (
            <TaskCard
              key={task._id}
              title={task.title}
              description={task.description}
              startDate={task.startDate}
              endDate={task.endDate}
              status={task.status}
              assignee={task.assignee}
              priority={task.priority}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-[17vh] sm:mt-[30vh]">
          <p>
            No tasks found.{' '}
            <Link to="/addTask" className="text-indigo-500">
              Add a new task
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default CompleteTask;
