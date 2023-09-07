import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideMenu from '../components/SideMenu';
import MainContent from '../components/MainContent';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="homeContainer">
      <Header />
      <SideMenu />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Home;

