import React,{useState, Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"Rimon",age:26},
      {name:"Shifat",age:21},
      {name:"Baby",age:2}
    ]
  };

   switchName = (event)=>{
    this.setState(
      {
        persons:[
          {name:event.target.value,age:26},
          {name:"Shifat",age:21},
          {name:"Baby",age:2}
        ]
      }
    );

  }
  render(){
    return (
      <div className="App">
        <h1> Hi I am react app</h1>
        <h1> This is really working </h1>
        <button onClick={this.switchName}> Switch name </button>
        <Person changed={this.switchName} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name="Miti" age="18">She is so HOT</Person>
        <Person name="Babu" age="1"/>
      </div>
    )
  };
  
}

export default App;
