import React from 'react';
import { NavLink } from "react-router-dom";

const ButtonNav = (props) => {
  const {linkTo, linkIcon, linkText} = props;

  return (
    <NavLink
      to={linkTo || '/'}
      className={({ isActive }) =>
        `py-3 px-4 sm:px-6 mb-0 sm:mb-2 nav-link flex flex-col sm:flex-row items-center align-center leading-8 transition-all hover:bg-white/10 hover:opacity-100 ${isActive ? ('opacity-100 bg-white/5 active') : ('opacity-50')}`
      }
    >
      {linkIcon ? (
        <span
          className="mr-0 mb-1 sm:mb-0 sm:mr-3 nl-i max-h-6 max-w-[16px] sm:max-w-[20px] flex"
        >
          {linkIcon}
        </span>
      ) : (
        null
      )}
      <span
        className="w-full text-sm sm:text-md"
      >
        {linkText || ''}
      </span>
    </NavLink>
  );
}

export default ButtonNav;
