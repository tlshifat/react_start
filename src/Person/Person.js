import React from 'react';
import "./Person.css";
import Radium from 'radium';

const person =(props) => {
const style={
    '@media (min-width: 500px)':{
        width:'450px',
        backgroundColor:'red'
    }
}    
return (
    <div className="Person" style={style}>
        <p onClick={props.click}>I am a {props.name} and {props.age} years old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </div>

)
};
//outputting dynamic content
//use of props childre

export default Radium(person);