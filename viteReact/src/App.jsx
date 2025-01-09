import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const Increment = () => {
    if(count < 20)
      setCount(count+1)
  }  

  const Decrement = () => {
    if(count > 0)
      setCount(count-1)
  }

  return (
    <>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Yo Yo</h1>

        <Card mood = "hot"/>
        <Card mood = "cold"/>          

        <br/>
        <button onClick={Increment}>
          Add count is {count}
        </button>
        <button onClick={Decrement}>
          Remove count is {count}
        </button>
    </>
  )
}

export default App
