import React from 'react';

const TimeSelection = ({ selectedDate, handleTimeClick, handleGoBack }) => {
  const availableTimes = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

  return (
    <div>
      <h4>選択した日付: {selectedDate.toLocaleDateString()}</h4>
      <p>利用可能な時間を選択してください</p>
      <ul>
        {availableTimes.map((time) => (
          <li key={time} onClick={() => handleTimeClick(time)}>
            {time}
          </li>
        ))}
      </ul>
      <button className="backToCalendarButton" onClick={handleGoBack}>カレンダーに戻る</button>
    </div>
  );
};

export default TimeSelection;
