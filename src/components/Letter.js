import React, {useState} from 'react';
import {Collapse} from '@mui/material';

const Letter = (props) => {
  const {writer, context} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  console.log(context);
  const toggleCollapse = () => {
    setIsExpanded((prev) => !prev);
  };
  return (
    <>
      <button className='Toggle-Button English-Font' onClick={toggleCollapse}>
        <div>Writer : {writer}</div>
      </button>
      <Collapse in={isExpanded} className='Collapse-Box'>
        <div className='Japanese-Font' style={{marginLeft: '3%'}}>
          Japanese: {context.jap}
        </div>
        <div
          className='Korean-Font'
          style={{marginLeft: '3%', marginTop: '1%'}}
        >
          Korean: {context.kor}
        </div>
        <div
          className='English-Font'
          style={{marginLeft: '3%', marginTop: '1%'}}
        >
          English: {context.eng}
        </div>
      </Collapse>
    </>
  );
};

export default Letter;
