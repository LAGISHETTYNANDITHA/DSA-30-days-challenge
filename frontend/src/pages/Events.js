import React, { useEffect, useState } from 'react';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';

const Events = () => {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    return (
        <div>
            <h1>Events</h1>
            <EventForm fetchEvents={fetchEvents} />
            <EventList events={events} fetchEvents={fetchEvents} />
        </div>
    );
};

export default Events;