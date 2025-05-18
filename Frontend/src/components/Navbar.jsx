import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navList = [
    { name: 'Home', path: '/' },
    { name: 'Deals', path: '/menu' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Events', path: '/events' },
    { name: 'About', path: '/about' },
    { name: 'SignUp', path: '/signup' },
    { name: 'Login', path: '/login' },
    // { name: 'Logout', path: '/logout' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full">
      <div className="container bg-[#92b423] rounded-xl border-2 border-black">
        <ul className="hidden lg:flex justify-evenly text-justify px-4 py-6 w-full">
          {navList.map((list,index) => (
            <li
             
              className="list-none cursor-pointer font-mono text-xl font-bold text-white mx-2 my-2 hover:text-black transition-all duration-1000 ease-in-out active:text-[#bb6815] rounded-lg"
              onClick={() => console.log(`${list} is clicked`)}
            >
              <Link to={list.path}>{list.name}</Link>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex justify-between items-center px-4 py-3">
          <button
            className="text-white text-2xl"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'X' : '☰'}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } lg:hidden flex flex-col items-center text-white px-2 py-4 w-full bg-[#92b423]`}
        >
          {navList.map((list,index) => (
            <li
              key={index}
              className="list-none cursor-pointer font-mono text-xl font-bold my-2 hover:text-black transition-all duration-1000 ease-in-out active:text-[#bb6815] rounded-lg"
              onClick={() => console.log(`${list} is clicked`)}
            >
              <Link to={list.path}>{list.name}</Link>
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;


