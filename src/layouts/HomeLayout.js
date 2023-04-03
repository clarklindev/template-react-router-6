import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const HomeLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='about'>About</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};
