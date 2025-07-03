import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ButtonNav from './buttonnav';

const SideNav = ({ links }) => {

  return (
    <div className="hidden md:flex absolute z-10 sm:relative sm:w-1/3 w-full flex-shrink flex-grow-0 sm:pr-0 max-w-[250px] -mt-[2px]">
      <div className="sticky top-0 frost frost-squared rounded-none 2xl:rounded-[12px] w-full h-full 2xl:h-auto  mt-0 2xl:mt-4 pt-4">
        <div className="flex sm:flex-col overflow-hidden content-center justify-between">
          {links.map((item, index) => {
            return (
              <ButtonNav
                linkIcon={<img src={item.icon} alt={'About'} className="h-auto w-auto object-contain"></img>}
                linkText={item.name}
                linkTo={item.link}
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