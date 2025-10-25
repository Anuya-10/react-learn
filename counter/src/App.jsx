import { useState } from 'react' // this is hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setcounter]=useState(5)
 
  //let counter=5;
  const addvalue=()=>{
    //counter=counter+1;
    setcounter(counter=>counter+1);
    setcounter(counter=>counter+1);
    
    console.log("clicked",counter);
  }
  const remove=()=>{
    //counter =counter-1;
    
    setcounter(counter-1);
    console.log("clicked",counter);
  }
  return (
    <>
    <h1> hello i am god</h1>
    <h2> counter value {counter}</h2>
    <button onClick={addvalue}>add value</button>
    <br></br>
    <button onClick={remove}>subtract value</button>
    </>
  )
}

export default App
