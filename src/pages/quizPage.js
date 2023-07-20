import React, {useState, useEffect} from 'react';
import '../assets/css/App.css';
import '../assets/css/Quiz.css';
import BorderLinearProgress from '../components/quiz/progressBar';
import Quiz1 from '../components/quiz/Quiz1';
import Quiz2 from '../components/quiz/Quiz2';
import Quiz3 from '../components/quiz/Quiz3';
import Quiz4 from '../components/quiz/Quiz4';
import Quiz5 from '../components/quiz/Quiz5';
import QuizBox from '../components/quiz/QuizBox';
import Header from '../components/Header';

const QuizPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [start, setStart] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [goNext, setGoNext] = useState(true);
  const [ans, setAns] = useState(false);
  const [score, setScore] = useState(0);
  const quiz = [
    <Quiz1 setGoNext={setGoNext} setAns={setAns} />,
    <Quiz2 setGoNext={setGoNext} setAns={setAns} />,
    <Quiz3 setGoNext={setGoNext} setAns={setAns} />,
    <Quiz4 setGoNext={setGoNext} setAns={setAns} />,
    <Quiz5 setGoNext={setGoNext} setAns={setAns} />,
  ];

  const handleClickImage = () => {
    setIsHovered(!isHovered);
  };

  const startQuiz = () => {
    setStart(true);
  };

  const BeforeStart = () => {
    return (
      <>
        <div className='Start-Box'>
          <img alt='paper-rain' src='images/paper-rain.gif' height='100%' />
          <img
            alt={isHovered ? 'After-misa.png' : 'Before-misa'}
            src={isHovered ? 'images/after-misa.png' : 'images/before-misa.png'}
            onClick={handleClickImage}
            width='600'
            height='600'
            className='Misa-Cute'
          />
          <img alt='paper-rain' src='images/paper-rain.gif' height='100%' />
        </div>
        <button
          className='Start-Button'
          variant='contained'
          onClick={startQuiz}
        >
          Start
        </button>
      </>
    );
  };

  const RefreshState = () => {
    setQuizIndex(0);
    setGoNext(true);
    setAns(false);
    setScore(0);
  };

  const updateIndex = () => {
    if (!goNext) {
      setQuizIndex(quizIndex + 1);
    }
    setGoNext(true);
    if (ans) {
      setScore(score + 20);
      setAns(false);
    }
  };
  return (
    <div className='App'>
      <Header />
      <div className='Body'>
        {start && (
          <div className='Question-Box'>
            <QuizBox
              nowQuiz={quiz[quizIndex]}
              index={quizIndex}
              setIndex={setQuizIndex}
              setClick={setGoNext}
              score={score}
              fresh={RefreshState}
            />
            {quizIndex !== 5 && (
              <img
                className='Duck-Button'
                alt='duck'
                src='images/duck.png'
                width={200}
                disabled={goNext}
                style={{opacity: goNext ? 0.5 : 1}}
                onClick={updateIndex}
              />
            )}
            <div className='Progress-Bar'>
              <BorderLinearProgress
                variant='determinate'
                value={quizIndex * 20}
              />
              <div className='Progress-Text'>{quizIndex * 20}%</div>
            </div>
          </div>
        )}
        {!start && BeforeStart()}
      </div>
    </div>
  );
};

export default QuizPage;
