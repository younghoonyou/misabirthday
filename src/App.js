import "./assets/css/App.css";
import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function setScreenSize() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}

function App() {
  useEffect(() => {
    setScreenSize();
  });
  return <div className="App"></div>;
}

export default App;
