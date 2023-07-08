import React from 'react';
const QuizBox = (props) => {
  const { nowQuiz } = props;
  return <div className='Quiz-Box'>{nowQuiz}</div>;
};

export default QuizBox;
