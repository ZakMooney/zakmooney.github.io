import React from 'react';
import Pill from '../ui/pill';
import Button from '../ui/button';

const LatestProject = (props) => {
  const {
    jobDetails,
    handleOpenModal
  } = props;

  const {title, description, mainTech, tag, tech, tasks, thumbnail} = jobDetails;

  const taskLoop = tasks && tasks.length && tasks.map((task, index) => {
    return (
      <li key={index}>
        {task}
      </li>
    )
  });

  const techLoop = tech && tech.length && tech.map((tech, index) => {
    return (
      <Pill key={index} text={tech} />
    )
  });

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 min-h-[200px] max-h-[200px] md:max-w-[300px] md:h-full md:max-h-none bg-slate-700/50 overflow-hidden mb-4 md:mb-0 md:mr-4 rounded">
          <img src={thumbnail || ''} alt={title || ''} className="h-full w-full object-cover"></img>
        </div>
        <div className="flex-1">
          <div>
            <div className="w-full flex space-between">
              <h3 className="text-xl font-medium drop-shadow-sm pb-2">
                {title || ''}
              </h3>
            </div>
            <h4 className="w-full text-md font-light italic drop-shadow-sm pb-2 opacity-80">
              {description || ''}
            </h4>
            <ul className="list-disc pl-4 text-sm sm:text-md font-light opacity-80 pb-2 sm:pb-4 w-full">
              {taskLoop}
            </ul>
            <div className="w-full flex flex-wrap gap-2">
              {techLoop}
            </div>
          </div>
        </div>
      </div>
                <div className="w-full flex justify-end mt-4">
            <Button
              text="See More"
              linkTo="/portfolio"
              type="purple"
            />
          </div>

    </>
  );
}

export default LatestProject;
