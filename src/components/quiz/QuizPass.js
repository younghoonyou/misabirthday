import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';

const QuizPass = (props) => {
  const navigate = useNavigate();
  const {score} = props;
  const handlePass = () => {
    localStorage.setItem('token', true);
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
      <text className='Japanese-Font'>あなた、美紗の本当の友達だね</text>
      <text className='Korean-Font'>당신, 미사의 진정한 친구군</text>
      <text className='English-Font'>You're a true friend of Misa</text>
      <div className='Button-Check'>
        <Button variant='contained' color='success' onClick={handlePass}>
          Pass
        </Button>
      </div>
    </div>
  );
};

export default QuizPass;
