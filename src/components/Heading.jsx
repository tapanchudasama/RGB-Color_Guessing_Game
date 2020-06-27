import React, { useState, useEffect } from "react";
import "./style.css";

const Heading = (props) => {
  const [bgcolor, setBgColor] = useState("");
  useEffect(() => {
    if (props.winStatus === true) {
      setBgColor(props.pickedcolor);
    } else {
      setBgColor("rgb(126,140,159)");
    }
  }, [props.winStatus, props.pickedcolor]);
  return (
    <h1 className="heading" style={{ backgroundColor: `${bgcolor}` }}>
      THE GREAT
      <br />
      <span className="colorDisplay">{props.pickedcolor}</span> <br />
      COLOR GAME
    </h1>
  );
};
export default Heading;
