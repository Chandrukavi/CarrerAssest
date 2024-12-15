import TaskCard from "./TaskCard";
import  { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Deployed = () => {
    const [deployedTasks, setDeployedTasks] = useState([]);

    useEffect(() => {
      const fetchDeployedTasks = async () => {
        const response = await axios.get('http://localhost:5000/api/tasks');
        const completed = response.data.filter((task) => task.status === 'Deployed');
        setDeployedTasks(completed);
      };
      fetchDeployedTasks();
    }, []);


  return (
      <div className="w-[70%] mx-auto">
          <div className="mt-10">
              <h1 className="text-3xl font-bold my-8 text-center">Deployed Tasks</h1>
          </div>
          {
              deployedTasks.length > 0 ? (
                  <div className="flex flex-wrap gap-y-4 gap-x-14 overflow-y-scroll mt-5 h-[50vh] sm:h-[80vh] justify-center">
                      {deployedTasks.map(task => (
                          <TaskCard
                              key={task.id}
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
              ) : (<div className="text-center mt-[17vh] sm:mt-[30vh]">
                  <p>No tasks found. <Link to="/addTask" className="text-indigo-500">Add a new task</Link></p>
              </div >)
          }
      </div>
  )
}

export default Deployed
