import React from "react";
import { Draggable } from "@hello-pangea/dnd";

function Task({ task, index }) {
  const handletaskClick = () => {
    console.log(`task clicked: ${task.id}, Content: ${task.content}`);
  };

  const getPriorityClass = () => {
    switch (task.priority) {
      case "high":
        return "priority-high";
      case "medium":
        return "priority-medium";
      case "low":
        return "priority-low";
      default:
        return "";
    }
  };

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className="task-item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={handletaskClick}
        >
          <div className="task-content">{task.content}</div>
          <div className={`task-priority ${getPriorityClass()}`}>
            {task.priority}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Task;
