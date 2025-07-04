import React from 'react';
import { useNavigate } from "react-router-dom";

const Button = (props) => {
  const navigate = useNavigate();
  const {
    onClick,
    icon,
    text,
    type,
    large,
    linkTo,
    className
  } = props;

  let useClasses;

  switch (type) {
    case 'outline-icon':
      useClasses = 'backdrop-blur-md bg-transparent hover:bg-white/10 border border-white/30 hover:border-white/50 text-gray-200 hover:text-white p-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10 h-[42px] w-[42px]'
      break;
    case 'purple':
      useClasses = 'backdrop-blur-md bg-gradient-to-r from-blue-500/40 to-purple-500/40 dark:from-blue-500/20 dark:to-purple-500/20 hover:from-blue-500/50 hover:to-purple-500/50 dark:hover:from-blue-500/30 dark:hover:to-purple-500/30 border border-purple-500/50 hover:border-purple-500/70 dark:hover:border-purple-400/70 text-purple-200/90 py-3 px-6 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/25 hover:-translate-y-[2px]'
      break;
    default:
        useClasses = 'backdrop-blur-md bg-transparent hover:bg-white/10 border border-white/30 hover:border-white/50 text-gray-300 hover:text-white py-2 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-white/10'
      break;
  }

  if (large) {
    useClasses = useClasses + ' btn-large';
  }

  useClasses = useClasses + ' ' + className;

  return (
    <button
      onClick={onClick ? (onClick) : (
        linkTo ? (
          () => navigate(linkTo)
        ) : ((null))
      )}
      className={useClasses}
    >
      {icon ? (
        <span
          className="mr-2 sm:mr-2 nl-i text-2xl sm:text-xl"
        >
          {icon}
        </span>
      ) : (
        null
      )}
      <span className="">
        {text || ''}
      </span>
    </button>
  );
}

export default Button;
