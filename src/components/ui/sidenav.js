import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ButtonNav from './buttonnav';

const SideNav = ({ links }) => {

  return (
    <div className="hidden md:flex sticky top-[calc(1rem+76px)] z-10 h-full sm:w-1/3 w-full flex-shrink flex-grow-0 sm:pr-0 max-w-[200px] -mt-[2px]">
      <div className="frost frost-squared rounded-r-[12px] 2xl:rounded-l-[12px] w-full h-full 2xl:h-fit mt-0 py-4">
        <div className="flex sm:flex-col overflow-hidden content-center justify-between">
          {links.map((item, index) => {
            return (
              <ButtonNav
                linkIcon={<img src={item.icon} alt={'About'} className="h-auto w-auto object-contain"></img>}
                linkText={item.name}
                linkTo={item.link}
                key={index}
              />
            );
          })}
        </div>
        <div className="hidden sm:flex flex-row flex-wrap justify-evenly mt-4">
          <a className="p-4 rounded hover:bg-slate-500/10 transition-all" href="https://github.com/zakmooney" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              size="lg"
            />
          </a>
          <a className="p-4 rounded hover:bg-slate-500/10 transition-all" href="https://www.linkedin.com/in/zmooney/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="lg"
            />
          </a>
          <a className="p-4 rounded hover:bg-slate-500/10 transition-all" href="mailto: zak_mooney@hotmail.co.uk" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
            />
          </a>
        </div>

      </div>
    </div>
  );
}

export default SideNav;