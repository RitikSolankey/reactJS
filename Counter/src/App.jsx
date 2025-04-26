import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);
  let addCount = () =>{
    if (counter<20){
      setCounter(counter+1);
    }
  }
  let remCount = () => {
    if(counter>0){
      setCounter(counter-1);
    }
  }
  return (
    <>
      <p>Counter : {counter}</p>
      <button onClick= {addCount} className='Inc'>Increase</button>
      <button onClick={remCount} className='Dec'>Decrease</button>
    </>
  )
}

export default App
