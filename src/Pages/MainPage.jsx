import React from 'react';
import TopPage from './TopPage';
import AboutPage from './AboutPage';
import Navbar from '../Components/Navbar';
import MusicsPage from './MusicsPage';
import TestiMonalPage from './TestiMonalPage';
import ContactPage from './ContactPage';

const MainPage = () => {
  return (
    <div className=" overflow-hidden flex flex-col">
      {/* Container with gradient background */}
      <Navbar />
      <TopPage />
      <AboutPage />
      <MusicsPage />
      <TestiMonalPage/>
      <ContactPage/>
    </div>
  );
};

export default MainPage;
