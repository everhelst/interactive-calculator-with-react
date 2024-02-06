import { useState } from "react";
import Button from "./Components/Button";
import Screen from "./Components/Screen";
import ClearButton from "./Components/ClearButton";
import { evaluate } from "mathjs";
import "./App.css";
import logo from "./images/pixar-dev.jpg";

function App() {
  const [input, setInput] = useState("");

  const addInput = (value) => {
    // Verify if last chapter is an operator
    const lastChar = input.length > 0 ? input.slice(-1) : "";
    console.log(lastChar);
    if (
      ["+", "-", "*", "/"].includes(lastChar) &&
      ["+", "-", "*", "/"].includes(value)
    ) {
      // Replace last operator with the new operator
      setInput(input.slice(0, -1) + value);
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Please enter a value");
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo-dev" src={logo} alt="logo pixar style" />
      </div>
      <div className="container-calculator">
        <Screen userInput={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={addInput}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={addInput}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={addInput}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={addInput}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClick={() => setInput("")}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}

export default App;
