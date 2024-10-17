import React from 'react';

const Pill = (props) => {
  const {text} = props;

  return (
    <div className="pill py-1 px-2 sm:py-1 sm:px-3 drop-drop-shadow-md text-xs sm:text-sm">
      {text}
    </div>
  );
}

export default Pill;
