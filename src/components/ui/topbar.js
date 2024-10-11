import React from 'react';
import me from '../../assets/images/me.jpg';
import ThemeToggle from './themetoggle';

const TopBar = (props) => {

  return (
    <div className="absolute top-0 frosted-bg drop-shadow-md z-10 flex sm:hidden sm:w-1/3 w-full flex-shrink flex-grow-0 sm:pr-0 h-[80px] sm:h-auto">
      <div className="pb-4 pt-4 px-4 flex justify-between w-full">
        <div className="flex">
          <div className="profile-icon pi-xs flex flex-col justify-center">
            <img src={me} className="rounded-full drop-drop-shadow-md" alt="Zak Mooney" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h2 className="text-lg font-medium drop-shadow-sm">
              Zak M.
            </h2>
            <p className="text-xs opacity-50 font-medium drop-shadow-sm">
              Frontend Dev 🚀
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default TopBar;