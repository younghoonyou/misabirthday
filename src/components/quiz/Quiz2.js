import React, { useState } from 'react';

const Quiz2 = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const { setGoNext } = props;
  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue === selectedOption ? null : newValue);
    setGoNext(false);
  };

  return (
    <div>
      <div className='Japanese-Font'>美紗の嫌いな食べ物は？</div>
      <div className='Korean-Font'>미사가 싫어하는 음식은?</div>
      <div className='English-Font'>What food does Misa hate?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 京都</label>
        <label className='Korean-Font'> 쿄토</label>
        <label className='English-Font'> Kyoto</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 京都</label>
        <label className='Korean-Font'> 쿄토</label>
        <label className='English-Font'> Kyoto</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 京都</label>
        <label className='Korean-Font'> 쿄토</label>
        <label className='English-Font'> Kyoto</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 京都</label>
        <label className='Korean-Font'> 쿄토</label>
        <label className='English-Font'> Kyoto</label>
      </div>
    </div>
  );
};

export default Quiz2;
