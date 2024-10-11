import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import {
  useStoredTheme,
} from "../../app/store";

const ThemeToggle = () => {
  const { setStoredTheme, storedTheme } = useStoredTheme();

  const toggleTheme = () => {
    switch (storedTheme) {
      case 'light':
        saveTheme("dark");
        break;
      case 'dark':
        saveTheme("light");
        break;
      default:
        saveTheme("light");
        break;
    }  
  }

  const saveTheme = (theme) => {
    setStoredTheme(theme);
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className="w-16 h-8 flex items-center rounded-full mx-3 px-1 frosted-bg before:rounded-full cursor-pointer"
          onClick={() => toggleTheme()}
        >
          <div
            className={storedTheme === 'light' ? 'bg-slate-50/70 w-6 h-6 rounded-full shadow-md transform flex justify-center items-center transition-all text-slate-900 translate-x-8' : 'bg-slate-800/50 w-6 h-6 rounded-full shadow-md transform flex justify-center items-center transition-all text-slate-50'}
          >
            {storedTheme === 'light' ? (
              <FontAwesomeIcon
                icon={faSun}
                size="sm"
              />            
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                size="sm"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
  }

export default ThemeToggle;