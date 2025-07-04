import React from 'react';
import Pill from '../ui/pill';
import Button from '../ui/button';

import { TechColours } from '../../data/techcolours';

const PortfolioItem = (props) => {
  const {
    jobDetails,
    handleOpenModal
  } = props;

  const {title, description, mainTech, tag, thumbnail} = jobDetails;

  const techLoop = mainTech.map((tech, index) => {
    let useColours = '';
    const techColour = TechColours?.find((item) => item.tech === tech);
    if (techColour) {
      useColours = techColour.classes;
    }
    return (
      <Pill key={index} text={tech} colours={useColours} />
    )
  });

  return (
    <>
      <div className="min-h-[200px] max-h-[200px] bg-slate-700/50 overflow-hidden mb-4 rounded">
        <img src={thumbnail || ''} alt={title || ''} className="h-full w-full object-cover"></img>
      </div>
      <div className="w-full flex space-between">
        <h3 className="text-xl font-medium drop-shadow-sm pb-2">
          {title || ''}
        </h3>
        <div className="flex flex-1 flex-wrap justify-end gap-2 pl-4">
          {techLoop}
        </div>
      </div>
      <h4 className="w-full text-md font-light italic drop-shadow-sm pb-2 opacity-80">
        {description || ''}
      </h4>
      <div className="w-full flex items-end mt-2">
        <Button
          onClick={() => handleOpenModal(tag)}
          text="See More"
          type="purple"
          slim
        />
      </div>
    </>
  );
}

export default PortfolioItem;
