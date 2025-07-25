import React from 'react';
import Pill from '../ui/pill';
import Modal from '../ui/modal';
import Button from '../ui/button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faImages,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

const PortfolioModal = (props) => {
  const {
    isOpen,
    handleCloseModal,
    jobDetails,
    setLightboxOpen,
    lightboxOpen
  } = props;

  if (!jobDetails) {
    return (
      <>
        <Modal
          open={isOpen}
          wide
          closeModal={() => {
            handleCloseModal();
          }}
        >
          <div className="pt-[120px] pb-[120px]">
            <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
        </Modal>
      </>
    );  
  }

  const {
    title,
    description,
    tasks,
    date,
    tech,
    thumbnail,
    link,
    gitLink,
    images,
  } = jobDetails;

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
      <Modal
        open={isOpen}
        closeModal={() => {
          handleCloseModal();
        }}
      >
        <div className="min-h-[180px] max-h-[180px] sm:max-h-[250px] sm:min-h-[250px] bg-slate-700/50 overflow-hidden mb-2 sm:mb-4 rounded">
          <img src={thumbnail || ''} alt={title || ''} className="h-full w-full object-cover"></img>
        </div>

        <h3 className="w-full font-medium drop-shadow-sm pb-2 flex justify-between text-lg sm:text-xl">
          {title || ''}
          <span className="text-md font-light opacity-80 text-right">
            {date || ''}
          </span>
        </h3>
        <h4 className="w-full text-xs sm:text-sm font-light italic drop-shadow-sm pb-2 opacity-80">
          {description || ''}
        </h4>
        <ul className="list-disc pl-4 text-sm sm:text-md font-light opacity-80 pb-2 sm:pb-4 w-full">
          {taskLoop}
        </ul>
        <div className="w-full flex flex-wrap gap-2">
          {techLoop}
        </div>
        <div className="w-full flex flex-wrap mt-2 sm:mt-4 gap-4 justify-end">
          <Button
            onClick={() => handleCloseModal()}
            text="Close"
            type="ghost"
          />
          {images && images.length ? (
            <Button
              onClick={() => setLightboxOpen(!lightboxOpen)}
              icon={
                <FontAwesomeIcon
                  icon={faImages}
                />  
              }
              text="Media"
              type="purple"
            />
          ) : null}
          {gitLink ? (
            <Button
              onClick={() => window.open(gitLink, '_blank').focus()}
              icon={
                <FontAwesomeIcon
                  icon={faGithub}
                />  
              }
              text="Git"
            />
          ) : null}
          {link ? (
            <Button
              onClick={() => window.open(link, '_blank').focus()}
              icon={
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                />  
              }
              text="Visit"
            />
          ) : null}
        </div>
      </Modal>
    </>
  );
}

export default PortfolioModal;
