import React, {useState} from 'react';
import FsLightbox from "fslightbox-react";

import Card from '../components/ui/card';
import PortfolioItem from '../components/portfolio/portfolioitem';
import PortfolioModal from '../components/portfolio/portfoliomodal';
import computer from '../assets/emoji/computer.png';


import { WorkDetails } from '../data/portfoliodetails';

function Portfolio() {

  const [open, setOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [work, setWork] = useState('');

  const jobDetails = WorkDetails?.find((item) => item.tag === work);

  const useImages = jobDetails?.images;
  const useCaptions = jobDetails?.captions;

  const useSlides = useImages && useImages.length && useImages.map(function(source, index) {
    if (source.includes(".mp4")) {
      return (
        <div style={{width: '1920px', height: '1080px'}}>
          <div className="h-full w-full">
            <video src={source} controls className="h-full w-full"/>
          </div>
          <div className="w-full pt-4">
            <h1 className="text-center">{useCaptions[index]}</h1>
          </div>
        </div>
      );
    }
    return (
      <div style={{width: '1920px', height: '1080px'}}>
        <div className="flex justify-center">
          <img
            src={source}
            alt=""
            width='100%'
            height='100%'
            style={{maxHeight: "70vh", width: "auto"}}
          />
        </div>
        <div className="w-full pt-4">
          <h1 className="text-center">{useCaptions[index]}</h1>
        </div>
      </div>
    )
  });

  const handleCloseModal = () => {
    setOpen(false);
    setWork('');
  }

  const handleOpenModal = (tag) => {
    setWork(tag);
    setOpen(true);
  }

  const portfolioLoop = WorkDetails.map((job, index) => {
    return (
      <Card className="mb-0 sm:mb-0" key={index}>
        <PortfolioItem
          jobDetails={job}
          key={index}
          handleOpenModal={handleOpenModal}
        />
      </Card>
    )
  });

  return (
    <>
      <h1 className="text-3xl font-medium drop-shadow-sm mb-4">
        Portfolio & Works <img src={computer} alt={'Portfolio & Works'} className="mb-2 h-[30px] w-[30px] inline-block"></img>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioLoop}
      </div>

      <PortfolioModal
        work={work}
        handleCloseModal={handleCloseModal}
        isOpen={open}
        jobDetails={jobDetails}
        setLightboxOpen={setLightboxOpen}
        lightboxOpen={lightboxOpen}
      />

      <FsLightbox
        className="fixed"
				toggler={lightboxOpen}
				sources={useSlides || []}
        captions={useCaptions || []}
			/>
    </>
  );
}

export default Portfolio;
