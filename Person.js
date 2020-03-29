import React from 'react';
const person = (props) => {
    return (
    <div>
    <p onClick={props.click}> i'm {props.Name} and i am {props.age} age old</p>
    <p> {props.children} </p>
    </div>
    );
};

export default person;