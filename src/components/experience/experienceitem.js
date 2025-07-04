import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCoins,
  faVault,
  faUtensils,
  faStore,
  faWifi
} from '@fortawesome/free-solid-svg-icons';

import { TechColours } from '../../data/techcolours';
import Pill from '../ui/pill';

const ExperienceItem = (props) => {
  const {jobDetails} = props;

  const {icon, title, company, description, tasks, start, end, tech} = jobDetails;

  const taskLoop = tasks.map((task, index) => {
    return (
      <li key={index}>
        {task}
      </li>
    )
  });

  const techLoop = tech.map((tech, index) => {
    let useColours = '';
    const techColour = TechColours?.find((item) => item.tech === tech);
    if (techColour) {
      useColours = techColour.classes;
    }
    return (
      <Pill key={index} text={tech} colours={useColours} />
    )
  });

  const showIcon = (icon) => {
    const iconClass = 'mx-2 opacity-60 t-accent';
    switch (icon) {
      case 'faCoins':
        return (
          <FontAwesomeIcon
            icon={faCoins}
            className={iconClass}
          />
        )
      case 'faVault':
        return (
          <FontAwesomeIcon
            icon={faVault}
            className={iconClass}
          />
        )
      case 'faUtensils':
        return (
          <FontAwesomeIcon
            icon={faUtensils}
            className={iconClass}
          />
        )
      case 'faStore':
        return (
          <FontAwesomeIcon
            icon={faStore}
            className={iconClass}
          />
        )
      case 'faWifi':
        return (
          <FontAwesomeIcon
            icon={faWifi}
            className={iconClass}
          />
        )
      default:
        return (
          <FontAwesomeIcon
            icon={faBuilding}
            className="mx-2 opacity-80 t-accent"
          />
        )
      }  
  }


  return (
    <>
      <h3 className="w-full sm:w-1/3 text-md text-start sm:text-end font-light drop-shadow-sm pb-0 opacity-80 block sm:hidden">
        {start || ''} - {end || ''}
      </h3>
      <h3 className="w-full sm:w-2/3 text-xl font-medium drop-shadow-sm pb-0">
        {title || ''}&nbsp;
        {company ? <span className="opacity-60 font-light">@&nbsp;</span> : null}
        {company ? (`${company}`) : null}
        {icon ? ( 
          showIcon(icon)
        ) : (null)}
      </h3>
      <h3 className="w-full sm:w-1/3 text-md text-start sm:text-end font-light drop-shadow-sm pb-0 opacity-80 hidden sm:block">
        {start || ''} - {end || ''}
      </h3>
      <h4 className="w-full text-md font-light italic drop-shadow-sm pb-2 opacity-80">
        {description ? (`"${description}"`) : null}
      </h4>
      <ul className="list-disc pl-4 font-light opacity-80 pb-4 w-full">
        {taskLoop}
      </ul>
      <div className="w-full flex flex-wrap gap-2">
        {techLoop}
      </div>
    </>
  );
}

export default ExperienceItem;
