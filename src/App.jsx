import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const incCount = () => setCount(count + 1);
  const decCount = () => setCount(count - 1);

  return (
    <>
      <div>
        <h1>계수: {count}</h1>
      </div>
    </>
  )
}

export default App
