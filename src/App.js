import React,{ Component} from 'react';
import './App.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import  './Char/Char.css';
import Radium,{StyleRoot} from 'radium';


class App extends Component {
  state = {
    persons:[
      {name:"Rimon",age:26,id:1},
      {name:"Shifat",age:21,id:3},
      {name:"Baby",age:2,id:2}
    ],
    name:"xx",
    show: false,
    length: 0,
    chars:[]

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
  
  charsComponent=null;
  getLength=(event)=>{
      const chars=event.target.value.split('');
      this.setState({
        length:event.target.value.length,
        chars:chars
        
      });
  }

  
  deleteChar=(event,index)=>{
    const charsArray = this.state.chars.slice();
   
    charsArray.splice(index,1);
    this.setState({
      chars:charsArray
      
    });


  }
  
  render(){
    const style={
      backgroundColor:'green',
      color:'white',
      ':hover':{
        backgroundColor:'lightgreen',
        color:'yellow'
      }
    };
    let persons = null;
    let charsComponents = null;
    let classes =[];
    
    if(this.state.persons.length < 2){
      classes.push('red');
    } else {
      classes.push('bold');
    }
    if(this.state.show){     
      persons=(
        <StyleRoot>
        <div className="personBlock">
           {this.state.persons.map((person,index)=>{
                 return  <Person change={(event)=>this.nameChangedHandler(event,person.id)}  key={person.id} name={person.name} age={person.age} click={()=>this.deletePerson(index)}/>
            })}
      </div> 
      </StyleRoot>); 
      style.backgroundColor='red';
      style[':hover']={
        backgroundColor:'yellow'
      };
    }
    console.log(this.state.chars.length);
    if(this.state.chars.length > 0){
      charsComponents =  (
        <div className="Char">
            {
              this.state.chars.map(
                (char,index)=>{
                  return <Char click={(event)=>this.deleteChar(event,index)} char={char} key={index+''+char}/>
                }
              )
            }
         </div> 
      );
    }


    return (
      <div className="App">
       <h1 className={classes.join(' ')}> This is really working </h1>
       <input type="text" onChange={this.getLength}/>
        <p>Length is : {this.state.length}</p>
      < Validation len={this.state.length}/>
      <Char char="A"/>

        <button style={style} onClick={this.togglePerson}> Switch name </button>
        
        {persons}
        {charsComponents}
        
      </div>
    )
  };
  
}

export default Radium(App);
