import React, {useState} from 'react';

const Quiz1 = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {setGoNext, setAns} = props;
  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue === selectedOption ? null : newValue);
    if (newValue === 'option3') {
      setAns(true);
    }
    setGoNext(false);
  };

  return (
    <div>
      <div className='English-Font'>Q1.</div>
      <div className='Japanese-Font'>🇯🇵 美紗の出生地は？</div>
      <div className='Korean-Font'>🇰🇷 미사 출생지는?</div>
      <div className='English-Font'>🇨🇦 Where was Misa born ?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 京都 / </label>
        <label className='Korean-Font'> 쿄토 </label>
        <label className='English-Font'> / Kyoto</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 東京 / </label>
        <label className='Korean-Font'> 토쿄</label>
        <label className='English-Font'> / Tokyo</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 大阪 / </label>
        <label className='Korean-Font'> 오사카</label>
        <label className='English-Font'> / Osaka</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 北海道 / </label>
        <label className='Korean-Font'> 훗카이도</label>
        <label className='English-Font'> / Hokkaido ㅤ</label>
      </div>
    </div>
  );
};

export default Quiz1;
