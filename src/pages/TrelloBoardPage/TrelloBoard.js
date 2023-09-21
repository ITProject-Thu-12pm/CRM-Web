import React from 'react';
import Board from 'react-trello';
import './BoardInfo.json'

const data = require('./BoardInfo.json')

const TrelloBoard = () => {
    return <Board data={data} />;
}

export default TrelloBoard;
