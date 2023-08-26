import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)} style={{
        marginRight: '1rem',
      }}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>      
    </>
  )
}

export default App
