import React from 'react'

export const Child = (props) => {
  return (
    <div>
      <input type =' text' onChange={(e) => props.setName(e.target.value) }/>
      <p> I am a child . My name is : {props.name}</p>
    </div>
  )
}
