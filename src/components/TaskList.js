import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const handleDelete = (task) =>{
    onDeleteTask(task);

  }
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} text={task.text} category={task.category}
        onDelete={() => handleDelete(task)} />
      ))}
    </div>
  );
}

export default TaskList;
