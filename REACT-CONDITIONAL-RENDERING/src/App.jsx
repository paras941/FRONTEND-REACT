import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [isLoggedIn, setLoggedin] = useState(true);

//  Using if else statements

  if(isLoggedIn){
    return(
      <LogoutBtn/>
    )
  }else{
    return(
      <LoginBtn/>
    )
  }

//  usinf ternery operator 
  return (
    <div>
      {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
    </div>
  )
 
}

export default App
