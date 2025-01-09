import { useState } from 'react'
import Card from './components/Card'
import './index.css'

function App() {
  const [count, setCount] = useState(0)  
  const [BggColor, setBggColor] = useState("grey");

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
    <div className='w-full h-screen duration-200' style={{backgroundColor:BggColor}}>

        <div className="max-w-sm mx-auto p-6 rounded-lg shadow-md bg-white">
  <div className="flex space-x-4">
    <button onClick={() => setBggColor("red")} class="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none">Red</button>
    <button onClick={() => setBggColor("blue")}class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">Blue</button>
    <button onClick={() => setBggColor("green")}class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none">Green</button>
  </div>
</div>

         

        <br/>
        <button onClick={Increment} className="rounded-lg shadow-md bg-white">
          Increment {count}
        </button>
        <br />
        <button onClick={Decrement} className="rounded-lg shadow-md bg-white">
          Decrement {count}
        </button>
        </div>
      </>
  )
}

export default App
