import React from 'react';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import "../../pages/DashnoardPage/DashboardStyles.css"

const TrelloSummary = ({ todo, in_progress, completed }) => {
    return (
        <div className="summary-container">
            {/* total contact */}
            <div className="col d-flex icon-and-content">
               <DirectionsWalkIcon className='trello-img todo-img'/>
                <div>
                    <div className='summary-first-text'>To Do</div>
                    <div className='summary-second-text'>{todo}</div>
                </div>
            </div>
            {/* active contact */}
            <div className="col d-flex icon-and-content">
            <DirectionsRunIcon className='trello-img in-progress-img'/>
                <div>
                    <div className='summary-first-text'>In Progresss</div>
                    <div className='summary-second-text'>{in_progress}</div>
                </div>
            </div>
            {/* inactive contact */}
            <div className="col d-flex icon-and-content">
            <DoneAllIcon className='trello-img completed-img'/>
                <div>
                    <div className='summary-first-text'>Completed</div>
                    <div className='summary-second-text'>{completed}</div>
                </div>
            </div>
        </div>
    );
}

export default TrelloSummary;
