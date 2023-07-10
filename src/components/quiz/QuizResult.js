import React from 'react';
import QuizFail from './QuizFail';
import QuizPass from './QuizPass';

const QuizResult = (props) => {
  const {score, fresh} = props;
  return score >= 80 ? (
    <QuizPass score={score} />
  ) : (
    <QuizFail score={score} fresh={fresh} />
  );
};

export default QuizResult;
