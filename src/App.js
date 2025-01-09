// App.js
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = () => {
    try {
      // Evaluate the input string safely
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input
          type="text"
          value={input}
          placeholder="0"
          readOnly
        />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {/* Number Buttons */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}
        {/* Operation Buttons */}
        {["+", "-", "*", "/"].map((operator) => (
          <button key={operator} onClick={() => handleClick(operator)}>
            {operator}
          </button>
        ))}
        <button onClick={clearInput}>C</button>
        <button onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default App;
