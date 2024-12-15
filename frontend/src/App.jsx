import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import AddTask from './components/AddTask';
import Sidebar from './components/Sidebar';
import AllTasks from './components/AllTasks';
import CompleteTask from './components/CompleteTask';
import InProgressTask from './components/InProgressTask';
import Dashboard from './components/Dashboard';
import PendingTask from './components/PendingTask';
import Deployed from './components/Deployed';
import Deferred from './components/Deferred';
import './App.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      '/': 'All Tasks',
      '/addTask': 'Add Task',
      '/allTask': 'All Tasks',
      '/completeTask': 'Completed Tasks',
      '/pendingTask': 'Pending Tasks',
      '/deployedTask': 'Deployed Tasks',
      '/deferredTask': 'Deferred Tasks',
      '/inProgressTask': 'In Progress Tasks',
      '/statsTask': 'Dashboard',
    };

    const currentTitle = titles[location.pathname] || 'Task Management';
    document.title = currentTitle; 
  }, [location.pathname]);

  return (
    <div className="flex h-full">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AllTasks />} />
        <Route path="/addTask" element={<AddTask />} />
        <Route path="/allTask" element={<AllTasks />} />
        <Route path="/completeTask" element={<CompleteTask />} />
        <Route path="/pendingTask" element={<PendingTask />} />
        <Route path="/deployedTask" element={<Deployed />} />
        <Route path="/deferredTask" element={<Deferred />} />
        <Route path="/inProgressTask" element={<InProgressTask />} />
        <Route path="/statsTask" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
