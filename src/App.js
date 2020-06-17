import React,{useState, Component} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


class App extends Component {
  state = {
    persons:[
      {name:"Rimon",age:26,id:1},
      {name:"Shifat",age:21,id:3},
      {name:"Baby",age:2,id:2}
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

  deletePerson =(index)=>{
    console.log(index);
    const persons = this.state.persons.slice(); //copy a new array , as array is referenced type 
    persons.splice(index,1);
    this.setState({persons:persons});
  }

  render(){

    let persons = null;
    if(this.state.show){     
      persons=(
        <div className="personBlock">
           {this.state.persons.map((person,index)=>{
                 return  <Person key={person.id} name={person.name} age={person.age} click={()=>this.deletePerson(index)}/>
            })}
      </div> ); 
    }

    return (
      <div className="App">
       
         <UserInput change={this.nameChangedHandler} userName={this.state.name}/> 
         <UserOutput userName={this.state.name}/> 
         <UserOutput userName="Min"/> 
        <h1> This is really working </h1>
        <button onClick={this.togglePerson}> Switch name </button>
        
        {persons}
        
      </div>
    )
  };
  
}

export default App;
