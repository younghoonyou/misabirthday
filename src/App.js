import './assets/css/App.css';
import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import LandingPage from './pages/landingPage';
import PrivateRoute from './lib/privateRoute';
import QuizPage from './pages/quizPage';
function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
    const token = localStorage.token || sessionStorage.token;
    if (token) {
      // setAuthToken(token, isRemember);
    }
  }, []);
  // return <div className="App"></div>;
  return (
    <Routes>
      <Route path='/' element={<QuizPage />} exact />
      <Route element={<PrivateRoute />}>
        <Route path='/main' element={<LandingPage />} exact />
      </Route>
    </Routes>
  );
}

export default App;
