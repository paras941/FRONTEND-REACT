import { createContext, useState } from 'react'
import './App.css'
import ChildA from './components/ChildA';
// creating context
const UserContext = createContext();
// wrap all the child inside a provider
// pass value
// consumer k andar jaake consume karlo

function App() {
   const [user,setUser] = useState ({name : "paras "});

  return (
    <>
    <UserContext.Provider value={user}>
    <ChildA/>
    </UserContext.Provider>
    
    </>
  )
}

export default App
export {UserContext}
