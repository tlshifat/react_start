import React,{ Component} from 'react';
import './App.css';
import Person from './Person/Person';



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



  nameChangedHandler = (event,id)=>{
    const personIndex = this.state.persons.findIndex(
      p=>{
        return p.id===id;
      }
    );
    const personObject = {...this.state.persons[personIndex]};
    personObject.name = event.target.value;
    const persons = this.state.persons;
    persons[personIndex] = personObject;
     this.setState({
        persons: persons
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
                 return  <Person change={(event)=>this.nameChangedHandler(event,person.id)}  key={person.id} name={person.name} age={person.age} click={()=>this.deletePerson(index)}/>
            })}
      </div> ); 
    }

    return (
      <div className="App">
       <h1> This is really working </h1>
        <button onClick={this.togglePerson}> Switch name </button>
        
        {persons}
        
      </div>
    )
  };
  
}

export default App;
