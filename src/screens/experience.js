import React from 'react';
import BarChart from '../components/experience/barchart';
import PieChart from '../components/experience/piechart';
import ExperienceItem from '../components/experience/experienceitem';
import { JobDetails } from '../data/jobdetails';
import Card from '../components/ui/card';
import man from '../assets/emoji/man.png';

function Experience() {

  const jobLoop = JobDetails.map((job, index) => {
    return (
      <Card className="mb-0 sm:mb-0" key={index}>
        <ExperienceItem jobDetails={job} key={index} />
      </Card>
    )
  });

  return (
    <>
      <div className="w-full mb-4">
        <h1 className="text-3xl font-medium drop-shadow-sm mb-2">
          Experience & Skills <img src={man} alt={'Experience & Skills'} className="mb-2 h-[30px] w-[30px] inline-block"></img>
        </h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="mb-0 sm:mb-0">
            <h3 className="w-full text-xl font-medium drop-shadow-sm pb-2">
              Key Role Experience
            </h3>
            <PieChart />
          </Card>
          <Card className="mb-0 sm:mb-0">
            <h3 className="w-full text-xl font-medium drop-shadow-sm pb-2">
              Key Skill Experience
            </h3>
            <BarChart />
          </Card>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full grid grid-cols-1 gap-4">
          {jobLoop}
        </div>
      </div>
    </>
  );
}

export default Experience;
