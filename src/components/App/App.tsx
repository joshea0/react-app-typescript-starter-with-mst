import logo from 'logo.svg';
import React from 'react';
import './App.css';
import { AppHeader } from './App.styles';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </AppHeader>
    </div>
  );
};

export default App;
