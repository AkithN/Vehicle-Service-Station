import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calender.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddEvent = () => {
    const { title, start, end } = newEvent;
    if (title && start && end) {
      setEvents([
        ...events,
        {
          id: events.length, // Assign a unique id to each event
          title,
          start: new Date(start),
          end: new Date(end),
          allDay: false,
        },
      ]);
      setNewEvent({ title: '', start: '', end: '' }); // Clear the form after adding
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  const EventComponent = ({ event }) => (
    <span>
      {event.title}
      <button
        className="delete-event-button"
        onClick={() => handleDeleteEvent(event.id)}
      >
        ❌
      </button>
    </span>
  );

  return (
    <div className="calendar-container">
      <div className="event-form">
        <input
          type="text"
          name="title"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="start"
          placeholder="Start Date"
          value={newEvent.start}
          onChange={handleInputChange}
        />
        <input
          type="datetime-local"
          name="end"
          placeholder="End Date"
          value={newEvent.end}
          onChange={handleInputChange}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '500px' }}
        components={{
          event: EventComponent,
        }}
      />
    </div>
  );
};

export default MyCalendar;
