import React from "react";
import Heading from "./components/Heading";
import Stripe from "./components/Stripe";
import "./components/style.css";
import { generateRandomColors, pickColor } from "./functions";
import Square from "./components/Square";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      colors: [],
      pickedcolor: "",
      mode: "hard",
      winStatus: false,
      message: "",
    };
  }
  componentDidMount() {
    var array = generateRandomColors(6);
    this.setState({
      colors: array,
      pickedcolor: pickColor(array),
    });
  }
  handleWin = (pickedcolor) => {
    this.setState({
      colors: new Array(6).fill(pickedcolor),
      winStatus: true,
      message: "Correct!",
    });
  };

  handleReset = () => {
    var array = generateRandomColors(6);
    this.setState({
      colors: array,
      pickedcolor: pickColor(array),
      winStatus: false,
      mode: "hard",
      message: "",
    });
  };
  handleMode = (value) => {
    var array;
    if (value === "easy") {
      array = generateRandomColors(3);
    } else {
      array = generateRandomColors(6);
    }
    this.setState({
      mode: value,
      colors: array,
      pickedcolor: pickColor(array),
      winStatus: false,
      message: "",
    });
  };
  handleMessage = () => {
    this.setState({ message: "Try Again!" });
  };
  displaySquares(pickedcolor, handleWin, handleMessage) {
    const squares = this.state.colors.map((squarecolor, i) => (
      <Square
        squarecolor={squarecolor}
        pickedcolor={pickedcolor}
        key={i}
        handleWin={handleWin}
        handleMessage={handleMessage}
      />
    ));
    return squares;
  }
  render() {
    return (
      <div>
        <Heading
          pickedcolor={this.state.pickedcolor}
          winStatus={this.state.winStatus}
        />
        <Stripe
          winStatus={this.state.winStatus}
          handleReset={this.handleReset}
          handleMode={this.handleMode}
          message={this.state.message}
        />
        <div className="container">
          {this.displaySquares(
            this.state.pickedcolor,
            this.handleWin,
            this.handleMessage
          )}
        </div>
      </div>
    );
  }
}
export default App;
