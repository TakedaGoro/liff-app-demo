import React from 'react';
import liff from '@line/liff';
import { useNavigate } from 'react-router-dom';

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
      <h2>Logout from LINE</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

