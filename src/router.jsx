import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login'; // あなたのLoginコンポーネントのパスに合わせて変更してください

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
