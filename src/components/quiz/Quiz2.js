import React, {useState} from 'react';

const Quiz2 = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {setGoNext, setAns} = props;
  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue === selectedOption ? null : newValue);
    if (newValue === 'option2') {
      setAns(true);
    }
    setGoNext(false);
  };

  return (
    <div>
      <div className='English-Font'>Q2.</div>
      <div className='Japanese-Font'>🇯🇵 美紗が嫌いな果物は？</div>
      <div className='Korean-Font'>🇰🇷 미사가 싫어하는 과일은?</div>
      <div className='English-Font'>🇨🇦 What fruit does Misa hate?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> チェリー / </label>
        <label className='Korean-Font'> 체리</label>
        <label className='English-Font'> / Cherry</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> スイカ / </label>
        <label className='Korean-Font'> 수박</label>
        <label className='English-Font'> / Watermelon</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 梨 / </label>
        <label className='Korean-Font'> 배</label>
        <label className='English-Font'> / Pear</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 葡萄 / </label>
        <label className='Korean-Font'> 포도</label>
        <label className='English-Font'> / Grape</label>
      </div>
    </div>
  );
};

export default Quiz2;
