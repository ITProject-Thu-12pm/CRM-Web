import React, { useEffect, useState } from 'react';
import Board from 'react-trello';
import data from './BoardInfo.json';  // Assuming JSON is static, import it like this

const TrelloBoard = () => {
  const [boardData, setBoardData] = useState({ lanes: [] });

  useEffect(() => {
    // Simulate fetch data
    console.log('Loaded JSON data: ', data);
    setBoardData(data);
  }, []);

  const handleDragStart = (cardId, laneId) => {
    console.log('drag started', cardId, laneId);
  };

  const handleDragEnd = (cardId, sourceLaneId, targetLaneId) => {
    console.log('drag ended', cardId, sourceLaneId, targetLaneId);
  };

  return (
    <div>
      <Board
        data={data}
        editable
        editLaneTitle
        draggable
        canAddLanes
        handleDragStart={handleDragStart}
        handleDragEnd={handleDragEnd}
      />
    </div>
  );
};

export default TrelloBoard;
