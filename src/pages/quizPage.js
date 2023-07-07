import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import '../assets/css/Quiz.css';
import BorderLinearProgress from '../components/quiz/progressBar';
import QuizBox from '../components/quiz/QuizBox';
const QuizPage = () => {
  const [progress, setProgress] = useState(10);
  useEffect(() => {});
  return (
    <div className='App'>
      Quiz time
      <QuizBox />
      <div className='Progress-Bar'>
        <BorderLinearProgress variant='determinate' value={progress} />
        <text className='Progress-Text'>{progress}%</text>
      </div>
    </div>
  );
};

export default QuizPage;
