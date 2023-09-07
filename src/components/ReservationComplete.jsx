import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReservationComplete = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home'); // ホームページのルートに遷移する
  };

  return (
    <div>
      <h3>予約完了</h3>
      <p>服薬指導の予約が完了しました。ありがとうございます。</p>
      <button onClick={handleGoHome}>ホームに戻る</button>
    </div>
  );
};

export default ReservationComplete;

