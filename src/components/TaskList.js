import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          key={task.text} // Assuming task text is unique
          text={task.text}
          category={task.category}
          onDelete={() => onDelete(task.text)}
        />
      ))}
    </div>
  );
}

export default TaskList;
