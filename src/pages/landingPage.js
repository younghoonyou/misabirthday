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
          <PhotoList />
        </div>
        <div className='Birthday-Writing'>
          <HBDletter />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
