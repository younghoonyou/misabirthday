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
      <div className='Japanese-Font'>おいおい、美紗についてもっと勉強しろ</div>
      <div className='Korean-Font'>이봐, 미사에 대해 더 공부해</div>
      <div className='English-Font'>Hey, hey, study more about Misa</div>
      <Button
        variant='contained'
        color='error'
        onClick={handleFail}
        className='Button-Check'
        style={{marginTop: '5%', fontSize: '250%'}}
      >
        Fail
      </Button>
    </div>
  );
};

export default QuizFail;
