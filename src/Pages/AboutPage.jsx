import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const headingRef = useRef();
  const textRef = useRef();
  const photoRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;

    // GSAP Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 20%', // Start when container top reaches 80% of viewport
        end: 'bottom 20%', // End when container bottom reaches 20% of viewport
        toggleActions: 'play none none reverse', // Play on scroll in, reverse on scroll out

      },
    });

    tl.fromTo(
      photoRef.current,
      { x: '-100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
    ).fromTo(
      textRef.current,
      { x: '100%', opacity: 0 },
      { x: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' },
      '<' // Start this animation at the same time as the previous one
    );

    // Cleanup ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      id="about"
      ref={containerRef}
      className="w-full h-[100vh] flex flex-col items-center pt-10 lg:pt-16 pb-8  text-white"
    >
      <div
        ref={headingRef}
        className="text-6xl font-mono font-extrabold text-gray-900 cursor-pointer AboutHeading transition-all duration-1000 hover:tracking-widest mb-8"
      >
        ABOUT ME
      </div>
      <div className="flex flex-col lg:flex-row w-[90%] items-center pt-6 bg-white rounded-lg bg-opacity-10 h-full justify-between gap-6 lg:gap-12 p-6 lg:p-12 shadow-2xl">
        <div
          ref={photoRef}
          className="w-full lg:w-[50%] justify-center items-center hidden lg:flex"
        >
          <img
            src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_1280.png"
            alt="Rajkumar Shahi Thakuri"
            className="w-[80%] lg:w-[60%] rounded-full shadow-2xl"
          />
        </div>
        <div
          ref={textRef}
          className="w-full lg:w-[50%] flex flex-col items-start text-left  text-gray-800"
        >
          <h2 className="text-2xl lg:text-5xl font-bold lg:mb-6 mb-4 text-yellow-300">
            Rajkumar Shahi Thakuri
          </h2>
          <p className="text-sm lg:text-xl mb-4">
            Hi, I'm <strong>Rajkumar Shahi Thakuri</strong>, known by my stage name <strong>R. Naikey</strong>. I'm a passionate <strong>IT student</strong> with a deep love for technology and music.
          </p>
          <p className="text-sm lg:text-xl mb-4">
            My idol is <strong>VTEN</strong>, whose journey inspires me every day to be creative and true to myself. I specialize in <strong>freestyle rap</strong> and have a unique style of expression through my art.
          </p>
          <p className="text-sm lg:text-xl">
            Whether it's through code or music, I strive to bring innovation, inspiration, and impact to everything I create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
