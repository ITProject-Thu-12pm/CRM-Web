import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SideBar from "../../components/Bar";
import { boardData } from "./BoardData";
import "./TrelloBoardStyles.css";

/* only finished the drag-and-drop for cards */
function Task({ task, index }) {
  const handletaskClick = () => {
    console.log(`task clicked: ${task.id}, Content: ${task.content}`);
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
          {task.content} - {task.priority}
        </div>
      )}
    </Draggable>
  );
}

function Column({ column, tasks }) {
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
        </div>
    );
}


const TrelloBoard = () => {
  const [state, setState] = useState(boardData);

  const onDragEnd = (result) => {
    const { destination, source, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (type === 'column') {
        const newColumnsOrder = Array.from(state.columnsOrder);
        newColumnsOrder.splice(source.index, 1);
        newColumnsOrder.splice(destination.index, 0, result.draggableId);

        const newState = {
            ...state,
            columnsOrder: newColumnsOrder
        };
        
        setState(newState);
        return;
    }

    /* move cards */
    const startColumn = state.columns[source.droppableId];
    const finishColumn = state.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const updatedTaskIds = Array.from(startColumn.tasks);
      updatedTaskIds.splice(source.index, 1);
      updatedTaskIds.splice(destination.index, 0, result.draggableId);

      const updatedColumn = {
        ...startColumn,
        tasks: updatedTaskIds,
      };

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [updatedColumn.id]: updatedColumn,
        },
      };

      setState(newState);
      return;
    }

    // Moving tasks from one column to another
    const startTaskIds = Array.from(startColumn.tasks);
    startTaskIds.splice(source.index, 1);
    const updatedStartColumn = {
      ...startColumn,
      tasks: startTaskIds,
    };

    const finishTaskIds = Array.from(finishColumn.tasks);
    finishTaskIds.splice(destination.index, 0, result.draggableId);
    const updatedFinishColumn = {
      ...finishColumn,
      tasks: finishTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [updatedStartColumn.id]: updatedStartColumn,
        [updatedFinishColumn.id]: updatedFinishColumn,
      },
    };

    setState(newState);
  };


  return (
    <div className="parent">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2 right--side-bg">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(provided) => (
              <div
                className="board-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {state.columnsOrder.map((columnId, index) => {
                  const column = state.columns[columnId];
                  const tasks = column.tasks.map(
                    (taskId) => state.tasks[taskId]
                  );
                  return (
                    <Draggable
                      key={column.id}
                      draggableId={column.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <Column column={column} tasks={tasks} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default TrelloBoard;
