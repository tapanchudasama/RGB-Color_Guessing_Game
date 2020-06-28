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
      message: "verdict",
      score: 100,
      tries: 0,
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
    var numberOfSquares;
    if (this.state.mode === "easy") {
      numberOfSquares = 3;
    } else {
      numberOfSquares = 6;
    }
    this.setState({
      colors: new Array(numberOfSquares).fill(pickedcolor),
      winStatus: true,
      message: "Correct!",
      tries: 0,
    });
  };

  handleReset = () => {
    var array = generateRandomColors(6);
    this.setState({
      colors: array,
      pickedcolor: pickColor(array),
      winStatus: false,
      mode: "hard",
      message: "verdict",
      score: 100,
      tries: 0,
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
      message: "verdict",
      tries: 0,
      score: 100,
    });
  };
  handleMessage = () => {
    this.setState({ message: "Try Again!" });
  };
  handleTries = () => {
    var numberOfSquares;
    if (this.state.mode === "easy") {
      numberOfSquares = 3;
    } else {
      numberOfSquares = 6;
    }
    this.setState({
      tries: this.state.tries + 1,
      score: Math.round(
        this.state.score -
          (this.state.tries / numberOfSquares) * this.state.score
      ),
    });
  };
  displaySquares(pickedcolor, handleWin, handleMessage, handleTries) {
    const squares = this.state.colors.map((squarecolor, i) => (
      <Square
        squarecolor={squarecolor}
        pickedcolor={pickedcolor}
        key={i}
        handleWin={handleWin}
        handleMessage={handleMessage}
        handleTries={handleTries}
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
          score={this.state.score}
        />
        <div className="container">
          {this.displaySquares(
            this.state.pickedcolor,
            this.handleWin,
            this.handleMessage,
            this.handleTries
          )}
        </div>
      </div>
    );
  }
}
export default App;
