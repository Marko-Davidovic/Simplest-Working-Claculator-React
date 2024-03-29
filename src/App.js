import {
  useRef, useState
} from "react";
import './App.css';

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((result) => result + Number
    (inputRef.current.value));
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((result) => result - Number
    (inputRef.current.value));

  };

  const times = (e) => {
    e.preventDefault();
    setResult((result) => result * Number
    (inputRef.current.value));
  };

  const divide = (e) => {
    e.preventDefault();
    setResult((result) => result / Number
    (inputRef.current.value));

  };

  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value= 0;

  };

  const resetResult = (e) => {
    e.preventDefault();
    setResult((prevVal) => prevVal* 0);
  };

  return (
    <div className="App">
        <div>
          <h1>Simplest Working Claculator</h1>
        </div>
        <form>
          <p ref={resultRef}>{result}</p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="Number"
            placeholder="Type a number"
          ></input>
          <button onClick={plus}>+</button>
          <button onClick={minus}>-</button>
          <button onClick={times}>*</button>
          <button onClick={divide}>/</button>
          <button onClick={resetInput}>Reset Input</button>
          <button onClick={resetResult}>Reset Result</button>
        </form>
    </div>
  );
}

export default App;
