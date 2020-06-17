import React from 'react';


const validation=(props)=>{
    let message = null;
    if(props.len > 5){
        message="big ";
    } else {
        message="short";
    }
    return <p>Okay {message}</p>
};



export default validation;