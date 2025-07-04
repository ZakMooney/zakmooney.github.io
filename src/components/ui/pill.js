import React from 'react';

const Pill = (props) => {
  const { text, colours } = props;

  return (
    // <div className={`pill py-1 px-2 sm:py-1 sm:px-3 drop-drop-shadow-md text-xs sm:text-sm ${colours}`}>
    <div className={`backdrop-blur-md border px-3 py-1 rounded-full text-xs font-medium ${colours}`}>
      {text}
    </div>
  );
}

export default Pill;
