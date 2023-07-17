import React, {useState, useEffect} from 'react';
import Carousel from 'react-multi-carousel';
import {Dialog, DialogContent, DialogTitle, Typography} from '@mui/material';
import 'react-multi-carousel/lib/styles.css';

const PhotoList = () => {
  const [autoPlay, setAutoPlay] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setAutoPlay(false);
    setSelectedImage(image);
  };

  const handleClose = () => {
    setAutoPlay(true);
    setSelectedImage(null);
  };

  const images = [
    {
      src: 'images/drinking.png',
      description: `Drinking with Misa's friend 2023.03.10`,
    },
    {src: 'images/aquarium.png', description: 'Aquarium 2023.04.08'},
    {src: 'images/garden.png', description: 'VanDusen Garden 2023.04.22'},
    {
      src: 'images/grandvile_island.png',
      description: 'Grandvile Island 2023.04.30',
    },
    {
      src: 'images/movie.png',
      description: 'Watching Mario Movie 2023.05.24',
    },
    {src: 'images/Hollywood.png', description: 'US Holly-Wood 2023.05.29'},
    {src: 'images/us.png', description: 'Universial Studio 2023.05.30'},
    {src: 'images/mario.png', description: 'Mario! 2023.05.30'},
    {src: 'images/canadaDay.png', description: 'Canada Day 2023.07.01'},
    {src: 'images/victoria.png', description: 'Victoria 2023.07.03'},
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 3000},
      items: 5,
    },
    desktop: {
      breakpoint: {max: 3000, min: 1024},
      items: 3,
    },
    tablet: {
      breakpoint: {max: 1024, min: 464},
      items: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 3,
    },
  };
  return (
    <>
      <Carousel
        responsive={responsive}
        partialVisible
        ssr
        className='Caruosel-Photo'
        autoPlay={autoPlay}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={false}
      >
        {images.map((image, idx) => {
          return (
            <img
              className='Gallery-photo'
              src={image.src}
              alt={`Slide $idx`}
              width='100'
              key={idx}
              onClick={() => {
                handleClick(image);
              }}
            />
          );
        })}
      </Carousel>
      <Dialog open={selectedImage !== null} onClose={handleClose}>
        <DialogContent>
          <Typography>
            <img src={selectedImage?.src} alt='Click 1' width='100%' />
          </Typography>
        </DialogContent>
        <DialogTitle id='alert-dialog-title'>
          {selectedImage?.description}
        </DialogTitle>
      </Dialog>
    </>
  );
};

export default PhotoList;
