import './App.css';
import {useState} from 'react'


function App() {
  const [count, setCount] =useState(0)

  const handleClick = () => {
    setCount((prev) =>{
      return prev + 1
    })
  }
  const handleClickMinus = () => {
    setCount((prev) =>{
      return prev - 1
    })
  }
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick = {handleClickMinus}>-</button>
      <button onClick = {handleClick}>+</button>
    </div>
  );
}

export default App;
