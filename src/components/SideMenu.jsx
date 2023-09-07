// SideMenu.jsx
import React from 'react';
import Logout from '../components/Logout'; // Logoutコンポーネントをインポート
import '../css/Home.css';

const SideMenu = () => {
  return (
    <div className="SideMenu">
      <ul>
        <li>
          <Logout />
        </li>
        <li>メニュー2</li>
        <li>メニュー3</li>
      </ul>
    </div>
  );
};

export default SideMenu;

