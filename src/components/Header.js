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
      <div className='Japanese-Font' style={{width: '30%', fontSize: '200%'}}>
        私は可愛い美紗！
      </div>
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
      <div className='Japanese-Font' style={{fontSize: '200%'}}>
        お誕生日おめでとう
      </div>
    </div>
  );
};

export default Header;
