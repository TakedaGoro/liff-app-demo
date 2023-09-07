// SideMenu.jsx
import React from 'react';
import Logout from './Logout'; // Logoutコンポーネントをインポート
import '../css/Home.css';

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul>
        <li>マイページ</li>
        <li>予約確認</li>
      </ul>
        <Logout />
    </div>
  );
};

export default SideMenu;

