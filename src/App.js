import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Top from './components/Top';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Router>
        <ul>
          <li><Link to="/">トップ</Link></li>
          <li><Link to="/about/">アバウト</Link></li>
        </ul>
        <Route path="/" exact component={Top}></Route>
        <Route path="/about/" exact component={About}></Route>
    </Router>
    </div>
  );
}

export default App;
