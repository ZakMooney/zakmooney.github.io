import React from 'react';

const Button = (props) => {
  const {onClick, icon, text, style, large} = props;

  let useClasses;

  switch (style) {
    case 'ghost':
      useClasses = 'flex items-center justify-center button btn-ghost'
      break;
    case 'purple':
      useClasses = 'flex items-center justify-center button btn-purple-gradient'
      break;
    case 'pink':
      useClasses = 'flex items-center justify-center button btn-pink-gradient'
      break;
    case 'pink':
      useClasses = 'flex items-center justify-center button btn-pink-gradient'
      break;  
    default:
      useClasses = 'flex items-center justify-center button'
      break;
  }

  if (large) {
    useClasses = useClasses + ' btn-large';
  }

  return (
    <button
      onClick={onClick ? (onClick) : (null)}
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
