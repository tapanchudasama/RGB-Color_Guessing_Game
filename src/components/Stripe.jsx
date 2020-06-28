import React, { useState } from "react";
import "./style.css";

const Stripe = (props) => {
  const [easy, setEasy] = useState(false);
  const [hard, setHard] = useState(true);
  const resetColors = () => {
    props.handleReset();
  };
  const changeMode = (value) => {
    props.handleMode(value);
    if (easy) {
      setEasy(false);
      setHard(true);
    } else {
      setEasy(true);
      setHard(false);
    }
  };
  return (
    <div className="stripe">
      <button className="reset" onClick={resetColors}>
        New Colors
      </button>
      <span className="message">{props.message}</span>
      <span className="message">Score: {props.score}</span>
      <button
        className={easy === true ? "selected" : ""}
        onClick={() => changeMode("easy")}
        value="easy"
      >
        Easy
      </button>
      <button
        className={hard === true ? "selected" : ""}
        value="hard"
        onClick={() => changeMode("hard")}
      >
        Hard
      </button>
    </div>
  );
};

export default Stripe;
