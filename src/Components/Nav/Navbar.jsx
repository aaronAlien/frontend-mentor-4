import React, { useState } from "react";
import menuOpen from '../../assets/images/icon-menu.svg';
import menuClose from '../../assets/images/icon-menu-close.svg';

import logo from '../../assets/images/logo.svg';
const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const menuToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className='nav flex justify-between'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <button className='toggle md:hidden relative z-50' onClick={menuToggle}>
          <img src={isMenuOpen ? menuClose : menuOpen} alt='open menu button' />
        </button>
        
        <ul className={`copy hidden md:flex justify-center items-center gap-4 z-50 ${isMenuOpen ? 'hidden' : 'flex'}`}>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>New</a>
          </li>
          <li>
            <a href=''>Popular</a>
          </li>
          <li>
            <a href=''>Trending</a>
          </li>
          <li>
            <a href=''>Categories</a>
          </li>
        </ul>

      </nav>

      <div className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      
      <button className='hidden md:flex' onClick={menuToggle}>
          <img src={menuClose} alt='close menu button' />
        </button>

      <ul className="flex flex-col justify-center gap-5 my-20 pl-6 text-lg">
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>New</a>
          </li>
          <li>
            <a href=''>Popular</a>
          </li>
          <li>
            <a href=''>Trending</a>
          </li>
          <li>
            <a href=''>Categories</a>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Navbar;

/*
        
*/