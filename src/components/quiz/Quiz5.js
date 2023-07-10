import React, {useState} from 'react';

const Quiz5 = (props) => {
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
      <div className='English-Font'>Q5.</div>
      <div className='Japanese-Font'>🇯🇵 美紗が一番好きな人は？</div>
      <div className='Korean-Font'>🇰🇷 미사가 가장 좋아하는 사람은?</div>
      <div className='English-Font'>🇨🇦 Who is Misa's favorite person?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'>防弾少年団 ジン / </label>
        <label className='Korean-Font'>진</label>
        <label className='English-Font'> / Jin</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'>さな / </label>
        <label className='Korean-Font'>사나</label>
        <label className='English-Font'> / Sana</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> ユ·ヨンフン /</label>
        <label className='Korean-Font'> 유영훈</label>
        <label className='English-Font'> / Hoon</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'>メッシ / </label>
        <label className='Korean-Font'>메시</label>
        <label className='English-Font'> / Messi</label>
      </div>
    </div>
  );
};

export default Quiz5;
