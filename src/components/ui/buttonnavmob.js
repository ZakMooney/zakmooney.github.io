import React from 'react';
import { NavLink } from "react-router-dom";

const ButtonNavMob = (props) => {
  const {linkTo, linkIcon, linkText} = props;

  return (
    <NavLink
      to={linkTo || '/'}
      className={({ isActive }) =>
        `py-3 px-4 sm:px-6 mb-0 sm:mb-2 nav-link-mob flex flex-row items-center align-center leading-8 transition-all hover:bg-white/10 hover:opacity-100 rounded-[12px] justify-center ${isActive ? ('opacity-100 bg-white/5 active') : ('opacity-50')}`
      }
    >
      {linkIcon ? (
        <span
          className="mr-4 mb-1 nl-i max-h-6 max-w-[16px] flex"
        >
          {linkIcon}
        </span>
      ) : (
        null
      )}
      <span
        className="text-sm"
      >
        {linkText || ''}
      </span>
    </NavLink>
  );
}

export default ButtonNavMob;
