import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS Global
import './styles/global.scss'

// Caso houver banco de dados, exemplo abaixo
// import './services/firebase';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);