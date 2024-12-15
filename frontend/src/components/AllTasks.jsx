import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const AllTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('http://localhost:5000/api/tasks');
      setTasks(response.data);
      setFilteredTasks(response.data);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    filterTasks();
  }, [statusFilter, priorityFilter, tasks]);

  const filterTasks = () => {
    let updatedTasks = tasks;

    if (statusFilter !== 'All') {
      updatedTasks = updatedTasks.filter((task) => task.status === statusFilter);
    }

    if (priorityFilter !== 'All') {
      updatedTasks = updatedTasks.filter((task) => task.priority === priorityFilter);
    }

    setFilteredTasks(updatedTasks);
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'P1':
        return 'bg-red-100 text-red-700';
      case 'P2':
        return 'bg-yellow-100 text-yellow-700';
      case 'P0':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'text-green-500';
      case 'Pending':
        return 'text-yellow-500';
      case 'In Progress':
        return 'text-blue-500';
      case 'Deferred':
        return 'text-gray-500';
      case 'Deployed':
        return 'text-purple-500';
      default:
        return 'text-gray-500';
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/tasks/${id}`, { status: 'Completed' });
      alert('Task completed successfully!');
      const updatedTasks = tasks.map((task) =>
        task._id === id ? { ...task, status: 'Completed' } : task
      );
      setTasks(updatedTasks);
      filterTasks();
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };

  const navigateToAddTask = () => {
    navigate('/add-task'); // Navigate to AddTask page
  };

  return (
    <div className="p-6 w-full rounded-lg shadow-xl max-w-7xl mx-auto bg-[#F9FAFB]">
      <h2 className="text-3xl font-semibold mb-6 text-center text-[#1F2937]">All Tasks</h2>

      {/* Filter Section */}
      <div className="mb-6 flex justify-between sm:flex-row flex-col">
        <div className="flex gap-4 items-center">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 rounded-xl bg-gray-200"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Deferred">Deferred</option>
            <option value="Deployed">Deployed</option>
          </select>

          <select
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
            className="p-2 rounded-xl bg-gray-200"
          >
            <option value="All">All Priority</option>
            <option value="P1">High</option>
            <option value="P2">Medium</option>
            <option value="P0">Low</option>
          </select>
        </div>
        <button
          onClick={navigateToAddTask}
          className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
        >
          Add Task
        </button>
      </div>

      {/* Task Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTasks.map((task) => (
          <motion.div
            key={task._id}
            className="bg-white rounded-lg border border-[#E5E7EB] py-4 shadow-sm hover:shadow-lg transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="px-6">
              <div className="font-medium text-xl text-[#1F2937]">{task.title}</div>
              <div className="mt-2 text-sm text-[#6B7280]">{task.description}</div>
              <div className={`mt-2 text-sm ${getStatusColor(task.status)}`}>{task.status}</div>
              <div className={`mt-4 text-sm font-semibold ${getPriorityColor(task.priority)}`}>
                {task.priority} Priority
              </div>
              <button
                onClick={() => handleCompleteTask(task._id)}
                className="mt-4 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                Mark as Completed
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllTasks;
