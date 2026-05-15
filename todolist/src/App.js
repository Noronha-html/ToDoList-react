import './App.css';
import { useState } from 'react';
import TaskInput from './task_input';
import TaskList from './task_list';

function App() {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const handleAddTask = (text) => {
    const newTask = { id: Date.now(), text };
    setTasks([...tasks, newTask]);
  };

  const handleConcludeTask = (id) => {
    if (!completedTasks.includes(id)) {
      setCompletedTasks([...completedTasks, id]);
    } else {
      setCompletedTasks(completedTasks.filter(tid => tid !== id));
    }
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
    setCompletedTasks(completedTasks.filter(tid => tid !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };
  const visibleTasks = tasks.filter(t => {
    if (filter === 'pending') return !completedTasks.includes(t.id);
    if (filter === 'completed') return completedTasks.includes(t.id);
    return true;
  });

  return (
    <div className="App">
      <div className="main-container">
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={visibleTasks}
          completedTasks={completedTasks}
          onConcludeTask={handleConcludeTask}
          onDeleteTask={handleDeleteTask}
          onFilterChange={handleFilterChange}
        />
      </div>
    </div>
  );
}

export default App;
