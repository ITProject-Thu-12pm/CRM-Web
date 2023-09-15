import React from 'react';

const Greetings = ({ username }) => {
    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return <h2>{`${greeting}, ${username}`}</h2>;
}

export default Greetings;
