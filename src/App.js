import { useState } from 'react';
import './App.css';



function App() {

  const [count, setCount] = useState(0)

  const IncNum = () => {
    setCount(count + 1)
  }

  const DecNum = () => {
    setCount(count - 1)
  }

  return (
    <div className="container">
    <span>Click + to Increament and - to Decrement a Number</span>
      <div className="box">
        <h1>{count}</h1>
        <div className="buttons">
          <button className="button1" onClick={DecNum}>
            -
          </button>
          <button className="button2" onClick={IncNum}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
