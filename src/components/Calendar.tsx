import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css'; // Default styles
import './Calendar.css'; // Your custom styles for dark theme

const localizer = momentLocalizer(moment);

const events = [
    // Example events
    {
        start: moment().toDate(),
        end: moment().add(1, 'hours').toDate(),
        title: 'Sample Event',
    },
    // Add more events here
];

function EmailCalendar() {
    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 700 }}
        />
    );
};

export default EmailCalendar;