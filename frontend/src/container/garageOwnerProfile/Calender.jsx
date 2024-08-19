import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events] = useState([
    {
      title: 'Meeting with John',
      start: new Date(2024, 6, 30, 10, 0),
      end: new Date(2024, 6, 30, 11, 0),
      allDay: false,
    },
    {
      title: 'Conference',
      start: new Date(2024, 6, 31, 9, 0), 
      end: new Date(2024, 6, 31, 17, 0),
      allDay: false,
    },
    {
      title: 'Lunch with Sarah',
      start: new Date(2024, 7, 1, 12, 0), 
      end: new Date(2024, 7, 1, 13, 0),
      allDay: false,
    },
    {
      title: 'Team Meeting',
      start: new Date(2024, 7, 2, 14, 0), 
      end: new Date(2024, 7, 2, 15, 0),
      allDay: false,
    },
    {
      title: 'Project Deadline',
      start: new Date(2024, 7, 3, 23, 0), 
      end: new Date(2024, 7, 3, 23, 59),
      allDay: false,
    },
    {
      title: 'Birthday Party',
      start: new Date(2024, 7, 4, 18, 0), 
      end: new Date(2024, 7, 4, 21, 0),
      allDay: false,
    },
    {
      title: 'Dentist Appointment',
      start: new Date(2024, 7, 5, 9, 0), 
      end: new Date(2024, 7, 5, 10, 0),
      allDay: false,
    },
    {
      title: 'Interview',
      start: new Date(2024, 7, 6, 11, 0), 
      end: new Date(2024, 7, 6, 12, 0),
      allDay: false,
    },
    {
      title: 'Workshop',
      start: new Date(2024, 7, 7, 13, 0),
      end: new Date(2024, 7, 7, 16, 0),
      allDay: false,
    },
    {
      title: 'Client Call',
      start: new Date(2024, 7, 8, 15, 0),
      end: new Date(2024, 7, 8, 16, 0),
      allDay: false,
    },
  ]);

  return (
    <div style={{ height: '900px',marginBottom: '20px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default MyCalendar;
