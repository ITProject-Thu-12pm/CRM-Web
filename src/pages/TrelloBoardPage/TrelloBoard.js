import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Button from "react-bootstrap/Button";
import SideBar from "../../components/Bar";
import { boardData } from "./BoardData";
import Column from "./Column";
import "./TrelloBoardStyles.css";
import EditTaskModal from "./EditTaskModal";

const TrelloBoard = () => {
  console.log("trello start");
  const [state, setState] = useState(boardData);

  /* drag and drop logic*/
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
    if (type === "column") {
      const newColumnsOrder = Array.from(state.columnsOrder);
      newColumnsOrder.splice(source.index, 1);
      newColumnsOrder.splice(destination.index, 0, result.draggableId);

      const newState = {
        ...state,
        columnsOrder: newColumnsOrder,
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

  /* delete task logic */
  const deleteTask = (taskId, columnId) => {
    // Create a new tasks object without the task to be deleted
    const updatedTasks = { ...state.tasks };
    delete updatedTasks[taskId];

    // Remove the taskId from the tasks list
    const updatedColumnTasks = state.columns[columnId].tasks.filter(
      (id) => id !== taskId
    );
    const updatedColumns = {
      ...state.columns,
      [columnId]: {
        ...state.columns[columnId],
        tasks: updatedColumnTasks,
      },
    };

    // Update the state
    setState({
      ...state,
      tasks: updatedTasks,
      columns: updatedColumns,
    });
  };

  /* edit task logic */
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const handleEditTaskClick = (task) => {
    setCurrentTask(task);
    setIsEditModalOpen(true);
  };
  const handleSaveEditedTask = (taskId, newContent, newPriority) => {
    const updatedTasks = {
      ...state.tasks,
      [taskId]: {
        ...state.tasks[taskId],
        content: newContent,
        priority: newPriority,
      },
    };

    setState({ ...state, tasks: updatedTasks });
    setIsEditModalOpen(false);
  };

  return (
    <div className="parent">
      <div className="div1">
        <SideBar />
      </div>
      <div className="div2 right--side-bg">
        <div className="trello-container">
          <div className="header-container-blur trello-header-row">
            <h1 className="trello-header-title">To Do List</h1>
            <Button className="btn change-color-btn board-add-list">
              Add a List
            </Button>
          </div>
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
                            className="test-1"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            {/* run column */}
                            <Column
                              key={column.id}
                              column={column}
                              tasks={tasks}
                              onDeleteTask={deleteTask}
                              onEditTaskClick={handleEditTaskClick}
                            />
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
      <EditTaskModal
        open={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSave={handleSaveEditedTask}
        task={currentTask}
      />
    </div>
  );
};

export default TrelloBoard;
