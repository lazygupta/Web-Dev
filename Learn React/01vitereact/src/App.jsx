import Hello from "./Hello";

function App () { 
  const username = 'lazygupta'
  
  return (
    <>
    <h1>Hello World Vite+React {username}</h1>
    {/* This inside curly braces are called evaluated expressions */}
    <Hello />
    </>
  )
}

// We cannot write evaluated expressions inside return scope

export default App;
