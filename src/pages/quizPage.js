import React, { useState, useEffect } from 'react';
import '../assets/css/App.css';
import '../assets/css/Quiz.css';
import BorderLinearProgress from '../components/quiz/progressBar';
import Quiz1 from '../components/quiz/Quiz1';
import Quiz2 from '../components/quiz/Quiz2';
import Quiz3 from '../components/quiz/Quiz3';
import Quiz4 from '../components/quiz/Quiz4';
import Quiz5 from '../components/quiz/Quiz5';
import QuizBox from '../components/quiz/QuizBox';
const QuizPage = () => {
  const [progress, setProgress] = useState(10);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quiz, setQuizs] = useState([
    <Quiz1 />,
    <Quiz2 />,
    <Quiz3 />,
    <Quiz4 />,
    <Quiz5 />,
  ]);
  useEffect(() => {});
  return (
    <div className='App'>
      <div className='Header'></div>
      <div className='Body'>
        <div className='Question-Box'>
          <QuizBox nowQuiz={quiz[quizIndex]} />
          <div className='Progress-Bar'>
            <BorderLinearProgress variant='determinate' value={progress} />
            <text className='Progress-Text'>{progress}%</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
