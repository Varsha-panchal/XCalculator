import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setOutput(result);
    } catch (error) {
      setOutput('Error');
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div className="result">{output}</div>
      <div className="buttons">
        {[7, 8, 9, '/', 4, 5, 6, '*', 1, 2, 3, '-', 0, '=', '+', 'C'].map((value) => (
          <button key={value} onClick={() => (value === '=' ? handleCalculate() : handleButtonClick(value))}>
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
