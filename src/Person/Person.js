import React from 'react';

const person =(props) => {
return (
    <div>
        <p>I am a {props.name} and {props.age} years old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>

)
};
//outputting dynamic content
//use of props childre

export default person;