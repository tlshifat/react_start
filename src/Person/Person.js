import React from 'react';

const person =(props) => {
return (
    <div>
        <p>I am a {props.name} and {props.age} years old!!</p>
        <p>{props.children}</p>
    </div>

)
};
//outputting dynamic content
//use of props children

export default person;