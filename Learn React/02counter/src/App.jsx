import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0) // we can write any name
  // first parameter is default name and second is function
// use State returns array


// Problem in UI updation
// Clicking onebutton changes eveyrthing everywhere, This is managed by React
// Hooks controls this
  const addValue = () =>{
    setCounter((prevCounter) => prevCounter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
    console.log("Clicked", counter);
  }

  const removeValue = () => {
    if(counter == 0 ) return 0
    else setCounter(counter-1)
  }

  return (
    <>
      <h1>Hello World</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick= {addValue}>Add Value {counter}</button>
      <br></br>
      <button 
      onClick={removeValue}>Remove Value {counter} </button>
      <h1>footer : {counter}</h1>
    </>
  )
}

export default App
