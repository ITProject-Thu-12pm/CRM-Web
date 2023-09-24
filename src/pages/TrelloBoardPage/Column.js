import React, { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import Button from 'react-bootstrap/Button';
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";
import '../../components/ButtonStyle.css'

function Column({ column, tasks }) {
  /* add task modal */
  const [openModal, setOpenModal] = useState(false);

  const handleAddCardClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveNewCard = (title, priority) => {
    // todo: Logic to save the new card to the state/board
    console.log(title, priority);
    setOpenModal(false);
  };

  return (
    <div className="column-container">
      <h2 className="column-title">{column.title}</h2>
      <Droppable droppableId={column.id} type="task">
        {(provided, snapshot) => (
          <div
            className="task-column"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Button className="btn change-color-btn" onClick={handleAddCardClick}>
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
