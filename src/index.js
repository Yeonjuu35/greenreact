import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 플러그인
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.scss';
import 'swiper/swiper-bundle.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
