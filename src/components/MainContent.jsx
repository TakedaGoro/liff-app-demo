import React, { useState } from 'react';
import '../css/Home.css';

const MainContent = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ここで通常はAPIを呼び出してデータベースに保存しますが、今回はデモなのでメッセージのみ表示します。
    setMessage('予約が完了しました。ありがとうございます。');
  };

  return (
    <div className="MainContent">
      <h3>服薬指導の予約</h3>
      <form onSubmit={handleSubmit}>
        <label>
          名前:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <br />
        <label>
          希望日:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </label>
        <br />
        <label>
          希望時間:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        </label>
        <br />
        <label>
          連絡先:
          <input type="text" value={contact} onChange={(e) => setContact(e.target.value)} required />
        </label>
        <br />
        <button type="submit">予約する</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default MainContent;
