import React, { useState } from 'react';
import QuizResult from './QuizResult';
const QuizBox = (props) => {
  const { nowQuiz, index, setIndex } = props;
  const [score, setScore] = useState(0);
  return index === 5 ? (
    <QuizResult score={score} />
  ) : (
    <div className='Quiz-Box'>{nowQuiz}</div>
  );
};

export default QuizBox;
