import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const QuizPass = (props) => {
  const navigate = useNavigate();
  const {score} = props;
  const handlePass = () => {
    const token = {
      value: true,
      expire: Date.now() + 30 * 60 * 1000, // 30min
    };
    console.log(JSON.stringify(token));
    localStorage.setItem('token', JSON.stringify(token));
    navigate('/main');
  };
  return (
    <div className='Quiz-Result'>
      <img alt='Fail' src='images/Pass.png' width={100} height={100} />
      <div
        className='English-Font'
        style={{fontSize: '60px', color: '#46AA5B'}}
      >
        {score}
      </div>
      <div className='Japanese-Font'>あなた、美紗の本当の友達だね</div>
      <div className='Korean-Font'>당신, 미사의 진정한 친구군</div>
      <div className='English-Font'>You're a true friend of Misa</div>
      <div className='Button-Check'>
        <Button variant='contained' color='success' onClick={handlePass}>
          Pass
        </Button>
      </div>
    </div>
  );
};

export default QuizPass;
