import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './lib/scrolltoTop';

const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename='/'>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </HashRouter>
);
