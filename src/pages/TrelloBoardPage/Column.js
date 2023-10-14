import React, { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import Button from "react-bootstrap/Button";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";
import "../../components/ButtonStyle.css";
import { addTask } from '../Interface.js'

function Column({ column, tasks, onDeleteTask, onEditTaskClick }) {
  /* add task modal */
  const [openModal, setOpenModal] = useState(false);

  const handleAddCardClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // const handleSaveNewCard = (title, priority) => {
  //   // todo: Logic to save the new card to the state/board
  //   console.log(title, priority);
  //   setOpenModal(false);
  // };

  const handleSaveNewCard = async (title, priority) => {
    // create the task data object
    // const newTaskId = `task-${Object.keys(tasks).length + 1}`;
    const taskData = {
        content: title,
        priority: priority,
        column: parseInt(column.id.split('-')[1], 10)  // this is the column's unique identifier
    };

    // setTasks(prevTasks => ({ ...prevTasks, [column]: taskData }));
  
    const response = await addTask(taskData);
    
    if (response === true) {
      console.log("Task added successfully!");
      // this.props.onAddNewTask(taskData, this.props.column.id);
      // onAddNewTask(taskData, column.id);
      // onClose();  
      setOpenModal(false);  // close the modal
    } else if (typeof response === "string") {
      // Handle error messages
      console.error(response);
    } else {
      console.error("Failed to add task!");
    }
};


  /* edit column title */
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(column.title);

  const handleTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleTitleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleTitleSave = () => {
    // TODO: Save the edited title
    // For now, just updating the local state
    column.title = editedTitle;
    setIsEditingTitle(false);
  };


  return (
    <div className="column-container">
      {isEditingTitle ? (
        <div>
          <input
            className="column-edit-title"
            value={editedTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleSave}
            autoFocus
          />
        </div>
      ) : (
        <h2 className="column-title" onClick={handleTitleClick}>
          {column.title}
        </h2>
      )}
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <div
            className="task-column"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            
            {tasks.map((task, index) => {
              if (!task) {
                console.error(`Task at index ${index} is undefined`);
                return null;  // don't render anything for this task
              }
                return (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    columnId={column.id}
                    onDelete={onDeleteTask}
                    onEditClick={onEditTaskClick}
                  />
                );
            })}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Button
        className="btn change-color-btn column-add-card"
        onClick={handleAddCardClick}
      >
        Add a card
      </Button>
      <AddTaskModal
        open={openModal}
        onClose={handleCloseModal}
        onSave={handleSaveNewCard}
      />
    </div>
  );
}

export default Column;
