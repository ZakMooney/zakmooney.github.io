import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import envelope from '../assets/emoji/envelope.png';

function Contact() {
  return (
    <>
      <div className="w-full">
        <h1 className="text-3xl font-medium drop-shadow-sm mb-4">
          Get In Touch <img src={envelope} alt={'Get In Touch'} className="mb-2 h-[30px] w-[30px] inline-block"></img>
        </h1>
      </div>
      <div className="w-full">
        <p className="text-lg font-light opacity-80 drop-shadow-sm mb-4">
          Feel free to reach out to me through my socials or email below!
        </p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card frost p-2 drop-shadow-md h-60 text-center flex justify-center items-center">
            <div>
              <a href="https://github.com/zakmooney" target="_blank" rel="noreferrer" style={{fontSize: 60}}>
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                />
              </a>
            </div>
          </div>
          <div className="card frost p-2 drop-shadow-md h-60 text-center flex justify-center items-center">
            <div>
              <a href="https://www.linkedin.com/in/zmooney/" target="_blank" rel="noreferrer" style={{fontSize: 60}}>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                />
              </a>
            </div>
          </div>
          <div className="card frost p-2 drop-shadow-md h-60 text-center flex justify-center items-center">
            <div>
              <a href="mailto: zak_mooney@hotmail.co.uk" target="_blank" rel="noreferrer" style={{fontSize: 60}}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                />
              </a>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Contact;
