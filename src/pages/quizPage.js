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
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Header from '../components/Header';

const QuizPage = () => {
  const [progress, setProgress] = useState(10);
  const [quizIndex, setQuizIndex] = useState(0);
  const [goNext, setGoNext] = useState(true);
  const [quiz, setQuizs] = useState([
    <Quiz1 setGoNext={setGoNext} />,
    <Quiz2 setGoNext={setGoNext} />,
    <Quiz3 setGoNext={setGoNext} />,
    <Quiz4 setGoNext={setGoNext} />,
    <Quiz5 setGoNext={setGoNext} />,
  ]);
  const updateIndex = () => {
    setQuizIndex(quizIndex + 1);
    setGoNext(true);
  };
  useEffect(() => {
    console.log(quiz.length);
    console.log(quizIndex);
  });
  return (
    <div className='App'>
      <Header />
      <div className='Body'>
        <div>Do you know about Misa well?🧐🐣</div>
        <div className='Question-Box'>
          <QuizBox
            nowQuiz={quiz[quizIndex]}
            index={quizIndex}
            setIndex={setQuizIndex}
            setClick={setGoNext}
          />
          <Button
            variant='contained'
            endIcon={<SendIcon />}
            onClick={updateIndex}
            disabled={goNext}
          >
            Send
          </Button>
          <div className='Progress-Bar'>
            <BorderLinearProgress
              variant='determinate'
              value={quizIndex * 20}
            />
            <text className='Progress-Text'>{quizIndex * 20}%</text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
