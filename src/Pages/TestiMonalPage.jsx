import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const TestiMonalPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialRef = useRef();
  const imageRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const testimonials = [
    {
      name: 'Rajkumar Shahi Thakuri',
      message:
        'Being a rapper and a tech enthusiast, my journey has been full of ups and downs, but with a focus on self-expression and creativity, I’ve managed to merge my love for music and technology into something meaningful. Always stay true to your craft!',
      image: 'https://tse1.mm.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&P=0&h=220', // Replace with your image path
    },
    {
      name: 'VTEN (Sameer Ghising)',
      message:
        'As an artist, I believe in the power of staying authentic and never compromising on your unique voice. The journey hasn’t been easy, but with determination and creativity, success follows. Keep pushing, and always believe in yourself!',
      image: 'https://tse1.mm.bing.net/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&pid=Api&P=0&h=220', // Replace with your image path
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 9000); // Change testimonial every 9 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  useEffect(() => {
    // GSAP ScrollTrigger animation for testimonial content
    gsap.fromTo(
      testimonialRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: testimonialRef.current,
          start: 'top 80%', // Trigger when top of the element is 80% from the top of the viewport
          end: 'top 30%', // End when top of the element is 30% from the top of the viewport
          scrub: 1, // Optional: smooth scroll-based animation
        },
      }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%', // Trigger when top of the image is 80% from the top of the viewport
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      nameRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: nameRef.current,
          start: 'top 80%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      messageRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: messageRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 1,
        },
      }
    );
  }, [currentTestimonial]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div
      id="testimonal"
      className="h-screen flex justify-center items-center bg-gradient-to-br from-teal-700 via-cyan-800 to-blue-900 text-white"
    >
      <div
        ref={testimonialRef}
        className="w-full max-w-3xl bg-white text-black p-8 rounded-lg shadow-2xl flex flex-col items-center transition-transform transform hover:scale-105 space-y-6"
      >
        <h1 className="text-4xl font-semibold mb-6 text-center text-cyan-600">What People Say</h1>

        {/* Testimonial Content */}
        <div className="flex flex-col items-center">
          <img
            ref={imageRef}
            src={testimonials[currentTestimonial].image}
            alt={testimonials[currentTestimonial].name}
            className="w-32 h-32 object-cover rounded-full border-4 border-cyan-500 mb-4"
          />
          <p ref={messageRef} className="text-lg italic text-center mb-4">
            {testimonials[currentTestimonial].message}
          </p>
          <span ref={nameRef} className="text-xl font-bold">
            {testimonials[currentTestimonial].name}
          </span>
        </div>

        {/* Navigation buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => handleTestimonialChange(0)}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
          >
            <span className="mr-2">Rajkumar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-bolt"
              viewBox="0 0 16 16"
            >
              <path d="M8 0L6 6H4l4 8h2l-2-8h2L8 0z" />
            </svg>
          </button>
          <button
            onClick={() => handleTestimonialChange(1)}
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
          >
            <span className="mr-2">VTEN</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-bolt"
              viewBox="0 0 16 16"
            >
              <path d="M8 0L6 6H4l4 8h2l-2-8h2L8 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestiMonalPage;
