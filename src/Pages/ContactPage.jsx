import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Importing social media icons
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message Submitted!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  useEffect(() => {
    // GSAP Animations
    gsap.fromTo(
      ".contact-form",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      ".social-icons a",
      { opacity: 0, scale: 0.7 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".social-icons",
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      }
    );

  }, []);

  return (
    <div id='contact' className="h-screen overflow-hidden flex justify-center items-center pt-5 bg-gray-900 text-white">
      <div className="w-full max-w-4xl bg-gray-800 p-8 rounded-lg shadow-lg contact-form">
        <h1 className="text-3xl font-semibold text-center text-cyan-400 mb-8">Contact Us</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-md transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <p className="text-lg font-medium text-gray-400 mb-4">OR connect with us:</p>
          <div className="flex justify-center gap-6">
            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-blue-600 rounded-full text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaFacebookF size={24} />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-gradient-to-br from-pink-500 to-orange-500 rounded-full text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>

            {/* YouTube Icon */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex justify-center items-center bg-red-600 rounded-full text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
            >
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
