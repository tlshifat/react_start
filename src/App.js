import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <h1> This is really working </h1>
      <Person name="Rimon" age="26"/>
      <Person name="Miti" age="18">She is so HOT</Person>
      <Person name="Babu" age="1"/>
    </div>
  );
}

export default App;
