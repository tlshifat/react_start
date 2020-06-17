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

   switchName = (newName)=>{
     console.log(newName);
    this.setState(
      {
        persons:[
          {name:newName,age:26},
          {name:newName,age:21},
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
        <Person  changed={this.switchName} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person click={this.switchName.bind(this,"SEXYYY")} name="Miti" age="18">She is so HOT</Person>
        <Person name="Babu" age="1"/>
      </div>
    )
  };
  
}

export default App;
