import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import ScrollToTop from './lib/scrolltoTop';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <ScrollToTop>
      <App />
    </ScrollToTop>
  </BrowserRouter>
);
