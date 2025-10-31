import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
import Button from './components/button'

function App() {
  const [count, setCount] = useState(0)

  function button (){
    setCount(count+1);
  }

  return (
    <div className='container'>
     <Card name =" paras rawat " >
      <h1> i am a web designer  </h1>
     </Card>
     
     <Card children = " I am children" >
     </Card>

     <Button handleClick ={button}>

     </Button>
    </div>
  )
}

export default App
