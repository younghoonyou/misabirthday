import React, {useState} from 'react';

const Quiz3 = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {setGoNext, setAns} = props;
  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue === selectedOption ? null : newValue);
    if (newValue === 'option1') {
      setAns(true);
    }
    setGoNext(false);
  };

  return (
    <div className='Quiz-question'>
      <div className='English-Font'>Q3.</div>
      <div className='Japanese-Font'>🇯🇵 美紗の姓は？</div>
      <div className='Korean-Font'>🇰🇷 미사의 이름 성은?</div>
      <div className='English-Font'>🇨🇦 What is Misa Last name?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 山下 / </label>
        <label className='Korean-Font'> 야마시타</label>
        <label className='English-Font'> / Yamashita ㅤㅤ </label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 橋本 / </label>
        <label className='Korean-Font'> 하시모토</label>
        <label className='English-Font'> / Hashimoto</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 鈴木 / </label>
        <label className='Korean-Font'> 스즈키</label>
        <label className='English-Font'> / Suzuki</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 加藤 / </label>
        <label className='Korean-Font'> 카토</label>
        <label className='English-Font'> / Kato</label>
      </div>
    </div>
  );
};

export default Quiz3;
