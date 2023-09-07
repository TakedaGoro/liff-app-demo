import React from 'react';
import '../css/ReservationForm.css';
import { useNavigate } from 'react-router-dom';

const ReservationForm = ({ onBackToTimeSelection, selectedDate, selectedTime }) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // 予約処理をここに書く
    navigate('/reservation-complete');
  };

  return (
    <div className="reservationFormContainer">
      <h4>予約日時: {selectedDate.toLocaleDateString()} {selectedTime}</h4>
      <form onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="name">名前:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="postalCode">郵便番号:</label>
          <input type="text" id="postalCode" name="postalCode" required />
        </div>
        <div className="formGroup">
          <label htmlFor="address">住所:</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className="formGroup">
          <label htmlFor="dob">生年月日:</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="formGroup">
          <label htmlFor="phone">電話番号:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="formGroup">
          <label htmlFor="insuranceCard">保険証の画像:</label>
          <input type="file" id="insuranceCard" name="insuranceCard" required />
        </div>
        <div className="formGroup">
          <label htmlFor="prescription">処方箋の画像:</label>
          <input type="file" id="prescription" name="prescription" required />
        </div>
        <button type="submit">予約する</button>
        <button className="backButton" onClick={onBackToTimeSelection}>時間選択に戻る</button>
      </form>
    </div>
  );
};

export default ReservationForm;

