import { useState , useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ count,setCount]= useState(0);
  const [ Total,setTotal]= useState(1);
  //  First is the side-effect-function
  //  second is the clean-up-function
  // Third is the comma separated function
    
    function clickhandle(){{
           setCount(count+1);
    }}
    
    function clickhandleTotal(){{
           setTotal(Total+1);
    }}

    // useEffect(()=>{
    //   alert('i will render after every click')
    // },[count])

    useEffect(() => {
      alert('count is updated')
    
      return () => {
       alert(" count is cleaning")
      }
    }, [count])
  

  return (
    <>
      <div>
        <button onClick={clickhandle}>
          click me 
        </button>
        Count : {count}
      </div>

      <div>
        <button onClick={clickhandleTotal}>
          Total 
        </button>
       Total Count  : {Total}
      </div>


    </>
  )
}

export default App
