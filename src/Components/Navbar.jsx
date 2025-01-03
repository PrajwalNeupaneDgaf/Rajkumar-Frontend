import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [activeElement, setActiveElement] = useState('');
  const [activeNumber , setActiveNumber] = useState('')

  const navbarItems = [
    { id: 1, name: 'Home', link: '#Home' },
    { id: 2, name: 'About', link: '#about' },
    { id: 3, name: 'Musics', link: '#musics' },
    { id: 4, name: 'Testimonals', link: '#testimonal' },
    { id: 5, name: 'Contact', link: '#contact' }
  ];

  return (
    <div className="z-50 text-white bg-transparent lg:px-6 font-semibold lg:font-bold fixed top-0 left-0 right-0 py-1 text-xs flex lg:text-lg font-sans justify-end items-center lg:gap-5">
      {navbarItems.map((item) => (
        <div
          key={item.id}
          className={`cursor-pointer p-2 navbars ${activeElement === item.name ? navbarActive : ''}`}
        >
          <a href={item.link}>{item.name}</a>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
