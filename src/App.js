import React,{ Component } from "react";
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';

import ReactRedux from './react-redux/App';

import RouterPage from './router';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <ReactRedux/>

        <RouterPage />
      </header>
    </div>
  );
}

export default App;
