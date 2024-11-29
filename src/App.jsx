import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [length, setLength] = useState(0);
  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumber] = useState(false);
  const [symbol, setSymbol] = useState(false);
  const [generatepassword, setGeneratepassword] = useState("");

  const lowerChar = "abcdefghijklmnopqrstuvwxyz";
  const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+<>,.?/";

  const passwordGen = () => {
    let combineChar = "";

    if (lowercase) {
      combineChar = combineChar + lowerChar;
    }
    if (uppercase) {
      combineChar = combineChar + upperChar;
    }
    if (number) {
      combineChar = combineChar + numberChar;
    }
    if (symbol) {
      combineChar = combineChar + symbolChar;
    }

    let password = "";

    for (let i = 0; i < length; i++) {
      const random = Math.floor(Math.random() * combineChar.length);
      password = password + combineChar[random];
    }
    setGeneratepassword(password);
  };

  return (
    <div className="container">
      <label>Length:</label>
      <input
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />

      <input
        type="checkbox"
        checked={lowercase}
        onChange={(e) => setLowercase(e.target.checked)}
      />
      <label>Lowercase</label>

      <input
        type="checkbox"
        checked={uppercase}
        onChange={(e) => setUppercase(e.target.checked)}
      />
      <label>Uppercase</label>

      <input
        type="checkbox"
        checked={number}
        onChange={(e) => setNumber(e.target.checked)}
      />
      <label>Number</label>

      <input
        type="checkbox"
        checked={symbol}
        onChange={(e) => setSymbol(e.target.checked)}
      />
      <label>Symbol</label>

      <button onClick={passwordGen}>Generate</button>

      {generatepassword && <h1>{generatepassword}</h1>}
    </div>
  );
};

export default App;
