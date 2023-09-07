import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import ReservationComplete from './components/ReservationComplete'; // 予約完了画面のコンポーネントをインポート

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation-complete" element={<ReservationComplete />} /> {/* 予約完了画面のルーティングを追加 */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;

