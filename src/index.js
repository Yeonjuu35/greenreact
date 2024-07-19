import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 플러그인
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter } from 'react-router-dom';

// CSS
import '../src/scss/common.scss';
import '../src/scss/nav.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
