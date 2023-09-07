import React from 'react';
import Logout from '../components/Logout'; // Logoutコンポーネントをインポート

const Home = () => {
  return (
    <div>
      <h1>服薬指導アプリ</h1>
      <p>こちらは服薬指導アプリのホームページです。</p>
      <Logout />
    </div>
  );
};

export default Home;

