import React, { useState } from "react";
import SideBar from '../../components/Bar.js'
import TrelloSummary from '../../components/Dashboard/TrelloSummary.js';
import Greetings from '../../components/Contacts/Greeting';
import DashboardData from "./DashboardData.json"
import ContactTable from '../../components/Contacts/ContactTable.js';

function LoadDashboardPage() {
    /* trello board */
    const { trello_summary } = DashboardData;

    return (
        <div className="parent">
            <div className='div1'>
                <SideBar />
            </div>
            <div className='div2 right--side-bg'>
                <div className="container-contact">
                    <div className=''>
                        <Greetings username="Evano" />
                    </div>
                    <div className='contacts-cards'>
                        {/* todo: back-end link here */}
                        <TrelloSummary 
                            todo={trello_summary.total_todo} 
                            in_progress={trello_summary.total_in_progress} 
                            completed={trello_summary.total_completed} 
                        />
                    </div>
                    <div className='contacts-cards'>
                        <h1>hello other components</h1>
                    </div>
                   
                </div>
            </div>
        </div>
    );
}


export default LoadDashboardPage;
