import './App.css'
import Card from './components/card'

function App() {
  

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl mb-9'>Welcome Home</h1>
      <Card username="Ankit"/>
      <Card username="Arya" btnText="Read here"/>
    </>
  )
}

export default App
