import React, {useState} from 'react';
const Header = () => {
  const [smile, setSmile] = useState(false);
  const clickMisa = () => {
    setSmile(!smile);
  };
  return (
    <div className='Header'>
      {smile ? (
        <img
          className='Misa-Face'
          alt='Misa_smile'
          src='images/Misa_smile.png'
          width='70'
          height='70'
          onClick={clickMisa}
        />
      ) : (
        <img
          className='Misa-Face'
          alt='Misa_face'
          src='images/Misa_face.png'
          width='70'
          height='70'
          onClick={clickMisa}
        />
      )}
      <img alt='light' src='images/light.png' width='70' height='70' />
      <text className='Japanese-Font'>私は可愛い美紗！</text>
      <div className='Duck-Moving'>
        <img
          alt='walking-misa'
          src='images/walking-misa.gif'
          width='70'
          height='70'
        />
      </div>
      <img
        className='Cake'
        alt='cake'
        src='images/cake.gif'
        width='70'
        height='70'
      />
      <text className='Japanese-Font'>お誕生日おめでとう</text>
    </div>
  );
};

export default Header;
