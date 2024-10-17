import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import ButtonNav from './buttonnav';
import ThemeToggle from './themetoggle';
import me from '../../assets/images/me.jpg';

const SideNav = (props) => {

  return (
    <div className="absolute z-10 sm:relative sm:w-1/3 w-full flex-shrink flex-grow-0 sm:pr-0 nav">
      <div className="sticky top-0 frosted-bg w-full h-full">
        <div className="pb-6 pt-4 px-6 hidden sm:flex">
          <div className="profile-icon pi-sm flex flex-col justify-center">
            <img src={me} className="rounded-full drop-drop-shadow-md" alt="Zak Mooney" />
          </div>
          <div className="flex flex-col justify-center ml-4">
            <h2 className="text-xl font-medium drop-shadow-sm">
              Zak M.
            </h2>
            <p className="text-sm opacity-50 font-medium drop-shadow-sm">
              Frontend Dev 🚀
            </p>
          </div>
        </div>
        <div className="flex sm:flex-col overflow-hidden content-center justify-between">
          <ButtonNav
            linkIcon="👨🏻‍🚀"
            linkText="About"
            linkTo="/about"
          />
          <ButtonNav
            linkIcon="👨🏻‍💻"
            linkText="Experience"
            linkTo="/experience"
          />
          <ButtonNav
            linkIcon="️🖥"
            linkText="Portfolio"
            linkTo="/portfolio"
          />
          <ButtonNav
            linkIcon="✉️"
            linkText="Contact"
            linkTo="/contact"
          />
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

        <div className="hidden sm:flex flex-row flex-wrap justify-evenly mt-4">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default SideNav;