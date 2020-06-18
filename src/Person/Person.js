import React from 'react';
import "./Person.css";
// import Radium from 'radium';
import styled from 'styled-components';

const person =(props) => {

const StyledDiv = styled.div`
@media (min-width: 500px):{
    width:450px,
    background-color:red
}
`;    
const style={
    '@media (min-width: 500px)':{
        width:'450px',
        backgroundColor:'red'
    }
}    
return (
    // <div className="Person" style={style}>
    <StyledDiv>
        <p onClick={props.click}>I am a {props.name} and {props.age} years old!!</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.change} value={props.name}/>
    </StyledDiv>
    // </div>

)
};
//outputting dynamic content
//use of props childre

export default person;