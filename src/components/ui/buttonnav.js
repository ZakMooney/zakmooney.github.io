import React from 'react';
import { NavLink } from "react-router-dom";

const ButtonNav = (props) => {
  const {linkTo, linkIcon, linkText} = props;

  return (
    <NavLink
      to={linkTo || '/'}
      className={({ isActive }) =>
        `py-3 px-6 mb-0 sm:mb-2 nav-link flex flex-col sm:flex-row items-center align-center leading-8 transition-all hover:bg-slate-500/10 hover:opacity-100 ${isActive ? ('opacity-100 bg-slate-500/5 active') : ('opacity-50')}`
      }
    >
      {linkIcon ? (
        <span
          className="mr-0 sm:mr-3 nl-i text-2xl sm:text-xl"
        >
          {linkIcon}
        </span>
      ) : (
        null
      )}
      <span className="">
        {linkText || ''}
      </span>
    </NavLink>
  );
}

export default ButtonNav;
