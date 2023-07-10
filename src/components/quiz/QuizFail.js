import React from 'react';
import Button from '@mui/material/Button';

const QuizFail = (props) => {
  const {score, fresh} = props;
  const handleFail = () => {
    fresh();
  };
  return (
    <div className='Quiz-Result'>
      <img alt='Fail' src='images/Fail.png' width={100} height={100} />
      <div
        className='English-Font'
        style={{fontSize: '60px', color: '#C62C2E'}}
      >
        {score}
      </div>
      <text className='Japanese-Font'>
        おいおい、美紗についてもっと勉強しろ
      </text>
      <text className='Korean-Font'>이봐, 미사에 대해 더 공부해</text>
      <text className='English-Font'>Hey, hey, study more about Misa</text>
      <div className='Button-Check'>
        <Button variant='contained' color='error' onClick={handleFail}>
          Fail
        </Button>
      </div>
    </div>
  );
};

export default QuizFail;
