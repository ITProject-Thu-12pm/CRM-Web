import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import data from './BoardInfo.json';  // If your JSON is static, import it like this

const TrelloBoard = () => {
  const [boardData, setBoardData] = useState({ lanes: [] });
  const [eventBus, setEventBus] = useState(null);

  useEffect(() => {
    // Simulate fetch data
    setBoardData(data);
    console.log("Board Data: ", boardData);
  }, []);

  const handleDragStart = (cardId, laneId) => {
    console.log('drag started');
    console.log(`cardId: ${cardId}`);
    console.log(`laneId: ${laneId}`);
  };

  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended');
    console.log(`cardId: ${cardId}`);
    console.log(`sourceLaneId: ${sourceLaneId}`);
    console.log(`targetLaneId: ${targetLaneId}`);
  };


  return (
    <div>
      <Board
        data={boardData}
        editable
        editLaneTitle
        draggable
        canAddLanes
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
        eventBusHandle={setEventBus}
      />
    </div>
  );
};

export default TrelloBoard;
