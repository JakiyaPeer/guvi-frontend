import React, { useState } from 'react';
import axios from 'axios';

const ScheduleLesson = ({ tutorId }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const scheduleLesson = async () => {
    try {
      await axios.post('/api/lessons/book', { tutorId, date, time });
      alert('Lesson scheduled successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to schedule lesson');
    }
  };

  return (
    <div>
      <h1>Schedule a Lesson</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={scheduleLesson}>Schedule</button>
    </div>
  );
};

export default ScheduleLesson;
