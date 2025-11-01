import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   function Clickhandle (){
      alert(' I am clicked')
   }

   function Moveover(){
    alert (' para ke uper ho bhai')
   }

   function text(e){
       console.log('typing ia done',e.target.value )
   }


  return (
    
     <div>
     <button onClick={Clickhandle} > click me </button>

     <p onMouseOver={Moveover} style={{border:"2px solid black"}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quam alias facilis, assumenda nisi quia delectus atque molestiae accusamus odio!</p>

      <form>
        <input type ='text' onChange={text}/>
     </form>
  
     </div>

     
  )
}

export default App
