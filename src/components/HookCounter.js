import React, { useState } from "react";
const HookCounter = () => {
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState({
    col: "black",
  });
  const colorHandler = () => {
    if (counter <= -1) {
      setColor({ col: "red" });
    } else if (counter >= 1) {
      setColor({ col: "blue" });
    } else {
      setColor({ col: "black" });
    }
  };
  const counterHandler = () => {
    setCounter(counter + 1);
    colorHandler();
  };

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        width: 400,
        marginTop: 85,
      }}
    >
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        reset
      </button>
      <div style={{ flexDirection: "row", display: "flex" }}>
        <button
          style={{
            color: "white",
            borderRadius: 25,
            borderWidth: 5,
            borderColor: "teal",
            backgroundColor: "teal",
          }}
          onClick={() => {
            setCounter(counter - 1);
            colorHandler();
          }}
        >
          press here for -1
        </button>
        <h1 style={{ color: color.col }}>count : {counter}</h1>
        <button
          style={{
            color: "white",
            borderRadius: 25,
            borderWidth: 5,
            borderColor: "teal",
            backgroundColor: "teal",
          }}
          onClick={counterHandler}
        >
          press here for +1
        </button>
      </div>
    </div>
  );
};

export default HookCounter;
