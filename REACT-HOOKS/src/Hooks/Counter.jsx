import React, { useState } from 'react';
import "./Counter.css";

const Counter =() =>{
    const [ count,setCount ]= useState(0);
    return(
        <div className='Container'>
            <p id='para'>You can clicked 0 times </p>
            <button id='btn' onClick={()=>{
                   setCount(count+1)
                //    click here
            }} > Click here</button>
        </div>
        
    );
} ;

export default Counter;