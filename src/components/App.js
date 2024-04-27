import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";


import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS); // Manage tasks in state

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask]); // Add new task to state
  };

  const handleDeleteTask = (task) => {
    const filteredTasks = tasks.filter((t) => t !== task); // Filter out deleted task
    setTasks(filteredTasks);

    const handleFilterChange = (category) => {
      console.log("Selected category:", category); 
    };
  };
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  categories={CATEGORIES} onFilterChange={handleFilterChange} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );

}



export default App;
