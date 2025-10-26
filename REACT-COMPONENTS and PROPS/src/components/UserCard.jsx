
import React from 'react'
import coder from '../assets/coder.webp'
import "./UserCard.css"

const UserCard =(props) =>{
    return(
        <div className='Container'>
            <p id='user-name'>{props.name}</p>
            <img id='user-src' src={coder} alt="image"/><img></img>
            
            <p id='user-desc'>Description of the Person </p>
        </div>
    )
} 

export default UserCard