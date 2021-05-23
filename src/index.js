import firebase from 'firebase';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebaseConfig from './helpers/apiKeys';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById('root')
);

reportWebVitals();
