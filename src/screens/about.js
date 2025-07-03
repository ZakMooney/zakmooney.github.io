import React from 'react';

import astronaut from '../assets/emoji/astronaut.png';
import { JobDetails } from '../data/jobdetails';

import Card from '../components/ui/card';
import ExperienceItem from '../components/experience/experienceitem';
import Button from '../components/ui/button';

function About() {
  return (
    <>
      <h1 className="text-3xl font-medium drop-shadow-sm mb-4">
        About Me <img src={astronaut} alt={'About Me'} className="mb-2 h-[30px] w-[30px] inline-block"></img>
      </h1>
      <Card className="about">
        <div className="w-full">
        </div>
        <div className="w-full">
          <p className="text-lg font-light opacity-80 drop-shadow-sm pb-4">
            Hey there! I&apos;m Zak, a tech lover with a passion for crafting user-friendly interfaces.
          </p>
          <p className="text-lg font-light opacity-80 drop-shadow-sm pb-4">
            From my younger years of toying with HTML & CSS as a hobby, I&apos;ve since expanded into over 8 years of professional expertise building & maintaining frontends for everything from SaaS products, to marketplaces & crypto dashboards.
          </p>
          <p className="text-lg font-light opacity-80 drop-shadow-sm">
            My years of experience working in tech startups have helped me forge a skillset that allows me to handle the unique challenges and opportunities that arise in fast-paced & innovative settings.
          </p>
        </div>
      </Card>
      <h1 className="text-3xl font-medium drop-shadow-sm mb-4 mt-8">
        Latest Experience
      </h1>
      <Card className="mb-4">
        <ExperienceItem jobDetails={JobDetails[0]} />
        <div className="w-full flex justify-end mt-4">
          <Button
            text="See More"
            linkTo="/experience"
            type="purple"
          />
        </div>
      </Card>

      <h1 className="text-3xl font-medium drop-shadow-sm mb-4 mt-8">
        Core Skills
      </h1>
      <Card className="about">
        <div className="w-full">
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 opacity-80">
            <div className="w-full">
              <ul className="list-disc pl-4">
                <li>HTML, Javascript, CSS3, SCSS</li>
                <li>ReactJS</li>
                <li>Foundation, Material UI, Tailwind, Bootstrap</li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="list-disc pl-4">
                <li>Web3 Technology</li>
                <li>Cross Browser Compatibility</li>
                <li>Responsive & Mobile First Web Design</li>
              </ul>
            </div>
            <div className="w-full">
              <ul className="list-disc pl-4">
                <li>Agile Methodologies</li>
                <li>Git Source/Version Control</li>
                <li>RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <Button
            text="See More"
            linkTo="/experience"
            type="purple"
          />
        </div>
      </Card>
    </>
  );
}

export default About;
