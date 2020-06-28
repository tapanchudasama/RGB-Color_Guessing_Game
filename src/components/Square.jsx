import React, { useState, useEffect } from "react";
import "./style.css";

const Square = (props) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    setColor(props.squarecolor);
  }, [props.squarecolor]);

  const checkWin = () => {
    props.handleTries();
    if (props.squarecolor === props.pickedcolor) {
      props.handleWin(props.pickedcolor);
    } else {
      setColor("rgb(35,35,35)");
      props.handleMessage();
    }
  };
  return (
    <div
      className="square"
      style={{ backgroundColor: `${color}` }}
      onClick={checkWin}
    ></div>
  );
};

export default Square;
