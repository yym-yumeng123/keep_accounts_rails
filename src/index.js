import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Login from './views/login/login.jsx';
import Register from './views/register/rejister.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Register />
  </React.StrictMode>,
  document.getElementById('root')
);
