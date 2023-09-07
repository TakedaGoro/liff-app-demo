import React from 'react';
import liff from '@line/liff';
import { useNavigate } from 'react-router-dom';
import '../css/Logout.css';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await liff.init({ liffId: import.meta.env.VITE_LIFF_ID });
      if (liff.isLoggedIn()) {
        liff.logout();
        navigate('/');
      } else {
        alert("You are not logged in!");
      }
    } catch (err) {
      console.error("LIFF Initialization failed", err);
    }
  };

  return (
    <div>
      <button className="logoutButton" onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default Logout;

