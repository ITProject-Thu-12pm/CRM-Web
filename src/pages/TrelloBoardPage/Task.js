import React from "react";
import { Draggable } from "@hello-pangea/dnd";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function Task({ task, index, onDelete, columnId }) {
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
          {/* delete btn */}
          <IconButton 
            aria-label="delete" 
            size="small" 
            className="task-delete-icon-container"
            onClick={(e) => {
              e.stopPropagation(); // To prevent triggering task click
              onDelete(task.id, columnId);
            }}
          >
            <DeleteIcon fontSize="inherit" className="task-delete-icon"/>
          </IconButton>
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
