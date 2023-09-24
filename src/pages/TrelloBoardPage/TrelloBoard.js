import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import SideBar from "../../components/Bar";
import { boardData } from "./BoardData";
import Column from "./Column";
import "./TrelloBoardStyles.css";

const TrelloBoard = () => {
  const [state, setState] = useState(boardData);

  /* drag and drop */
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

    /* drag and drop column */
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

    /* drag and drop cards */
    const startColumn = state.columns[source.droppableId];
    const finishColumn = state.columns[destination.droppableId];

    /*  Moving tasks in one column */
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

    /*  Moving tasks from one column to another */
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
