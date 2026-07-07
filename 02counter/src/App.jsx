import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  //let counter = 14;
  const addValue = () => {
    //console.log("clicked",counter);
    //counter = counter + 1;
    //setCounter(counter + 1)
    if(counter <20){
      setCounter(counter + 1);
    }
  }
  const removeValue = () => {
    //setCounter(counter-1)
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
    <h1>Mohsin with code</h1>
    <h2>counter value: {counter}</h2>

    <button
      onClick={addValue}
      >Add Value{counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove Value</button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
