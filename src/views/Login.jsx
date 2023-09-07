import React, { useEffect, useState } from "react";
import liff from '@line/liff';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    liff.init({ liffId: import.meta.env.VITE_LIFF_ID })
      .then(() => {
        setIsLoggedIn(liff.isLoggedIn());
        if (liff.isLoggedIn()) {
          navigate('/home');
        }
      })
      .catch((err) => {
        console.error("LIFF Initialization failed", err);
      });
  }, [navigate]);

  const handleLogin = () => {
    if (!liff.isLoggedIn()) {
      liff.login();
    } else {
      alert("You are already logged in!");
    }
  };

  return (
    <div>
      <h2>Login with LINE</h2>
      {!isLoggedIn && <button onClick={handleLogin}>Login with LINE Account</button>}
    </div>
  );
};

export default Login;


