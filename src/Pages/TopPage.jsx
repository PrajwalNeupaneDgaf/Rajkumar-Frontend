import React, { useRef, useState } from 'react';
import Navbar from '../Components/Navbar';
import RightSideIntro from '../Components/RightSideIntro';
import LeftSideIntro from '../Components/LeftSideIntro';

const TopPage = () => {

    const musicref = useRef()
  // State to track if music animation is active
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  // Handle click to toggle music animation
  const handleClick = () => {
    setIsMusicPlaying((prevState) => !prevState);
    if (musicref.current.paused) {
        musicref.current.play();  // Play music if paused
      } else {
        musicref.current.pause(); // Pause music if playing
      }
  };

  return (
    <div id='Home' className="h-[100vh] w-[100vw]  relative">
      <div className="flex flex-row w-full h-full">
        <RightSideIntro />
        
        {/* Music Bars Container */}
        <div
          className={`absolute flex justify-center items-center gap-2 rounded-full w-56 h-56 sm:w-72 sm:h-72 left-[38%] sm:left-[50%] md:left-[60%] top-[44%] lg:left-[52%] lg:top-[30%] cursor-pointer ${isMusicPlaying ? 'music-playing' : ''}`}
          onClick={handleClick} // Toggle music animation on click
        >
          {/* Individual bars */}
          <audio ref={musicref} src="/Music.mp3"></audio>
          <div className="music-bar w-2 bg-black h-2"></div>
          <div className="music-bar w-2 bg-black h-3"></div>
          <div className="music-bar w-2 bg-black h-5"></div>
          <div className="music-bar w-2 bg-black h-6"></div>
          <div className="music-bar w-2 bg-black h-9"></div>
          <div className="music-bar w-2 bg-black h-6"></div>
          <div className="music-bar w-2 bg-black h-5"></div>
          <div className="music-bar w-2 bg-black h-3"></div>
          <div className="music-bar w-2 bg-black h-2"></div>
        </div>

        <LeftSideIntro />
      </div>
    </div>
  );
};

export default TopPage;
