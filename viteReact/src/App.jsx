import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
