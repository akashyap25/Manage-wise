import React from 'react';
import { hamburger } from '../assets/icons';
import { navLinks } from '../Constants';

const Navbar = () => {
  return (
    <header className='px-6 py-4 absolute z-10 w-full  bg-orange-50 border-b-2'>
      <nav className='flex justify-between items-center '>
        <div className='flex items-center'>
          <a href="/">
            <img
              src='https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png'
              alt="logo."
              className='w-12 h-12 block'
            />
          </a>
        </div>
        <ul className='flex-1 flex justify-end items-center gap-8 p-3 relative max-lg:hidden'>
          {navLinks.map((item, index) => (
            <React.Fragment key={item.label}>
              <li>
                <a
                  href={item.href}
                  className='font-montserrat font-medium text-2xl text-zinc-900'
                >
                  {item.label}
                </a>
              </li>
              {index < navLinks.length - 1 && <span className="text-zinc-900">•</span>}
            </React.Fragment>
          ))}
          <li>
            <button className='font-montserrat font-bold text-xl rounded-2xl text-zinc-900 bg-white px-8 py-4'>
              Buy Template
            </button>
          </li>
        </ul>
        <div className='max-lg:block hidden'>
          <img
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
