import React, {useState} from 'react';

const Quiz4 = (props) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const {setGoNext, setAns} = props;
  const handleOptionChange = (e) => {
    const newValue = e.target.value;
    setSelectedOption(newValue === selectedOption ? null : newValue);
    if (newValue === 'option4') {
      setAns(true);
    }
    setGoNext(false);
  };

  return (
    <div className='Quiz-question'>
      <div className='English-Font'>Q4.</div>
      <div className='Japanese-Font'>🇯🇵 美紗が一番得意なことは？</div>
      <div className='Korean-Font'>🇰🇷 미사가 가장 잘하는 것은?</div>
      <div className='English-Font'>🇨🇦 What is Misa best at?</div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option1'
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 可愛い / </label>
        <label className='Korean-Font'> 귀엽기</label>
        <label className='English-Font'> / Cute</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option2'
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> きれい / </label>
        <label className='Korean-Font'> 예쁘기</label>
        <label className='English-Font'> / Beautiful</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option3'
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 愛らしい /</label>
        <label className='Korean-Font'> 사랑스럽기</label>
        <label className='English-Font'> / Lovelyㅤ</label>
      </div>
      <div className='Check-Box'>
        <input
          type='radio'
          value='option4'
          checked={selectedOption === 'option4'}
          onChange={handleOptionChange}
        />
        <label className='Japanese-Font'> 全部 / </label>
        <label className='Korean-Font'> 전부</label>
        <label className='English-Font'> / All</label>
      </div>
    </div>
  );
};

export default Quiz4;
