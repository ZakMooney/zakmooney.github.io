import React from 'react';

const Pill = (props) => {
  const {text} = props;

  return (
    <div className="pill text-sm py-1 px-3 drop-drop-shadow-md">
      {text}
    </div>
  );
}

export default Pill;
