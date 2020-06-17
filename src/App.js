import React,{useState, Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons:[
      {name:"Rimon",age:26},
      {name:"Shifat",age:21},
      {name:"Baby",age:2}
    ],
    name:"xx",
    show: false
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

  newstate={
    name:"OKK"
  };

  nameChangedHandler = (event)=>{
     this.setState({
        name:event.target.value
     })
  }

  togglePerson = ()=>{
    console.log(this.state.show);
    this.setState({
      show:!this.state.show
    });
  }

  render(){
    return (
      <div className="App">
       
         <UserInput change={this.nameChangedHandler} userName={this.state.name}/> 
         <UserOutput userName={this.state.name}/> 
         <UserOutput userName="Min"/> 
        <h1> This is really working </h1>
        <button onClick={this.togglePerson}> Switch name </button>
        { this.state.show ? 
          <div className="personBlock">
            <Person  changed={this.switchName} name={this.state.persons[0].name} age={this.state.persons[0].age}/>
            <Person click={this.switchName.bind(this,"SEXYYY")} name="Miti" age="18">She is so HOT</Person>
            <Person name="Babu" age="1"/>
        </div> :null
        }
        
      </div>
    )
  };
  
}

export default App;
