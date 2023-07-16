import React, {useEffect} from 'react';
import Header from '../components/Header';
import PhotoList from '../components/PhotoList';
import '../assets/css/Landing.css';
import HBDletter from '../components/HBDletter';
const LandingPage = () => {
  useEffect(() => {});
  return (
    <div className='Landing-page'>
      <Header />
      <div className='Landing-Body'>
        <div className='Photo-List'>
          <div className='Our-Memory'>
            <img
              className='Heart'
              src='images/heart.png'
              alt='heart'
              width='70'
            />
            Our Memory
          </div>
          <PhotoList />
        </div>
        <HBDletter />
      </div>
    </div>
  );
};

export default LandingPage;
