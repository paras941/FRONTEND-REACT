
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }

  return (
    <div>
      <Button handleClick={handleClick} text="click me " >
        <h1>{count}</h1>
      </Button>

      {/* <Card name="love babbar">
        <h1>Best WEB DEV course</h1>
        <p> Trying to be consistent in this</p>
        <p>Will complete the course soon</p>
      </Card>
      <Card children ="Main ek children hu">
        Hello Jee, kaise ho saare
      </Card> */}
    </div>
  )
}

export default App
