import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../css/Home.css';
import TimeSelection from './TimeSelection';
import ReservationForm from './ReservationForm';


const MainContent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
  };

  const handleGoBack = () => {
    setSelectedTime(null);
    setSelectedDate(null);
  };

  const resetSelectedTime = () => {
    setSelectedTime(null);
  };

  return (
    <div className="MainContent">
      <h3>服薬指導の予約</h3>
      {!selectedDate && <Calendar onChange={handleDateChange} />}
      {selectedDate && !selectedTime && (
        <TimeSelection
          selectedDate={selectedDate}
          handleTimeClick={handleTimeClick}
          handleGoBack={handleGoBack}
        />
      )}
      {selectedTime && (
          <ReservationForm onBackToTimeSelection={resetSelectedTime}
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          />
      )}
    </div>
  );
};

export default MainContent;
