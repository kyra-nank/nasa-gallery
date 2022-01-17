import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import App from './App';
import express from 'express';

const app = express();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const PORT = process.env.PORT || 3000;
app.listen(PORT);
