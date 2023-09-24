import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import SideBar from '../../components/Bar';
import { boardData } from './BoardData';
import './TrelloBoardStyles.css';

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
                    onClick={handletaskClick} // added onClick event here
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
            <Droppable droppableId={column.id}>
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

    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }

        if (destination.droppableId === source.droppableId && destination.index === source.index) {
            return;
        }

        const startcolumn = state.columns[source.droppableId];
        const updatedtaskIds = Array.from(startcolumn.tasks);

        updatedtaskIds.splice(source.index, 1);
        updatedtaskIds.splice(destination.index, 0, draggableId);

        const updatedcolumn = {
            ...startcolumn,
            tasks: updatedtaskIds,
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [updatedcolumn.id]: updatedcolumn,
            },
        };

        setState(newState);
    };

    return (
        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2 right--side-bg'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="board-container">
                        {state.columnsOrder.map((columnId) => {
                            const column = state.columns[columnId];
                            const tasks = column.tasks.map(taskId => state.tasks[taskId]);
                            return <Column key={column.id} column={column} tasks={tasks} />;
                        })}
                    </div>
                </DragDropContext>
            </div>
        </div>



    );
};

export default TrelloBoard;


