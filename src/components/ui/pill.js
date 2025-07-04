import React from 'react';

import { TechColours } from '../../data/techcolours';

const Pill = (props) => {
  const { text } = props;

  let useTechColour = '';
  const techColour = TechColours?.find((item) => item.tech === text);
  if (techColour) {
    useTechColour = techColour.classes;
  }

  return (
    <div className={`backdrop-blur-md border px-3 py-1 rounded-full text-xs font-medium max-h-[26px] ${useTechColour}`}>
      {text}
    </div>
  );
}

export default Pill;
