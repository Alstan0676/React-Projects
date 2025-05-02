import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(10)       //doesnt work inside <> </>

  const addValue = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 1);
  }

  const DelValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
    else if(counter === 0) {
      alert('Value cannot be less than zero!');
    }
  }
  return(
  <>
  
  <h1> Click to Update Number Usestate Method</h1>
  <h3>Your Value: {counter} </h3>
  <button onClick={addValue}>Add Value +1</button>
  <br />
  <button onClick={DelValue}>Remove Value -1</button>
  </> 
  )
}

export default App
