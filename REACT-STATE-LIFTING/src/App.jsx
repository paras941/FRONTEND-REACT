import { useState } from 'react'
import './App.css'
import Child from './components/child'

function App() {
     //  Create state
    // manage  state
    // change state 
    // sabhi child me state ko syn karwado
    const [ name , Setname]= useState('');
  

  return (
      <div>
        <Child name ={ name } setName ={Setname}/>
        <p> I am a parent and My name is : {name}</p>
      </div>
    
  )
}

export default App
