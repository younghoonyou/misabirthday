import React, {useState} from 'react';
import QuizResult from './QuizResult';
const QuizBox = (props) => {
  const {nowQuiz, index, setIndex, score, fresh} = props;
  return index === 5 ? (
    <QuizResult score={score} fresh={fresh} />
  ) : (
    <div className='Quiz-Box'>{nowQuiz}</div>
  );
};

export default QuizBox;
