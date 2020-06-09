import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  const state = {
    persons:[
      {name:"Rimon",age:26},
      {name:"Shifat",age:21},
      {name:"Baby",age:2}
    ]
  };
  return (
    <div className="App">
      <h1> Hi I am react app</h1>
      <h1> This is really working </h1>
      <button> Switch name </button>
      <Person name={state.persons[0].name} age={state.persons[0].age}/>
      <Person name="Miti" age="18">She is so HOT</Person>
      <Person name="Babu" age="1"/>
    </div>
  );
}

export default App;
