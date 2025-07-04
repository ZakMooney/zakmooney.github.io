import React from 'react';

const Pill = (props) => {
  const { text, colours } = props;

  return (
    <div className={`backdrop-blur-md border px-3 py-1 rounded-full text-xs font-medium max-h-[26px] ${colours}`}>
      {text}
    </div>
  );
}

export default Pill;
