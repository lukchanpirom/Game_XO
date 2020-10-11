import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      turn: "",
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    };
    this.startAndclear = this.startAndclear.bind(this);
    this.appendXO = this.appendXO.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
  }

  componentDidUpdate() {
    let randomNumber;

    this.checkWinner();
    if (this.state.started && this.state.turn === "") {
      randomNumber = Math.random() > 0.5 ? "x" : "o";
      this.setState({ turn: randomNumber });
    }
  }

  appendXO(event) {
    const inputID = event.target.id;

    if (
      this.state.started === true &&
      !event.target.textContent &&
      this.state.winner === ""
    ) {
      switch (inputID) {
        case "1":
          this.setState({ one: this.state.turn === "x" ? "x" : "o" });
          break;
        case "2":
          this.setState({ two: this.state.turn === "x" ? "x" : "o" });
          break;
        case "3":
          this.setState({ three: this.state.turn === "x" ? "x" : "o" });
          break;
        case "4":
          this.setState({ four: this.state.turn === "x" ? "x" : "o" });
          break;
        case "5":
          this.setState({ five: this.state.turn === "x" ? "x" : "o" });
          break;
        case "6":
          this.setState({ six: this.state.turn === "x" ? "x" : "o" });
          break;
        case "7":
          this.setState({ seven: this.state.turn === "x" ? "x" : "o" });
          break;
        case "8":
          this.setState({ eight: this.state.turn === "x" ? "x" : "o" });
          break;
        case "9":
          this.setState({ nine: this.state.turn === "x" ? "x" : "o" });
          break;
        default:
      }

      this.setState((state) => ({ turn: state.turn === "x" ? "o" : "x" }));
    }
  }

  startAndclear() {
    this.setState((state) => ({
      started: !state.started,
      winner: "",
      turn: "",
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      eight: "",
      nine: "",
    }));
  }

  checkWinner() {
    let win = "";
    const { one, two, three, four, five, six, seven, eight, nine } = this.state;
    if (this.state.winner === "") {
      if (one === "x" && two === "x" && three === "x") win = "x";
      if (one === "x" && four === "x" && seven === "x") win = "x";
      if (one === "x" && five === "x" && nine === "x") win = "x";
      if (two === "x" && five === "x" && eight === "x") win = "x";
      if (three === "x" && five === "x" && seven === "x") win = "x";
      if (three === "x" && six === "x" && nine === "x") win = "x";
      if (four === "x" && five === "x" && six === "x") win = "x";
      if (seven === "x" && eight === "x" && nine === "x") win = "x";

      if (one === "o" && two === "o" && three === "o") win = "o";
      if (one === "o" && four === "o" && seven === "o") win = "o";
      if (one === "o" && five === "o" && nine === "o") win = "o";
      if (two === "o" && five === "o" && eight === "o") win = "o";
      if (three === "o" && five === "o" && seven === "o") win = "o";
      if (three === "o" && six === "o" && nine === "o") win = "o";
      if (four === "o" && five === "o" && six === "o") win = "o";
      if (seven === "o" && eight === "o" && nine === "o") win = "o";
      if (win !== "") this.setState({ winner: win, turn: "" });
    }
  }

  render() {
    const {
      started,
      turn,
      winner,
      one,
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine,
    } = this.state;

    return (
      <div className="wrapper">
        <section className="turn-bar">
          <div className={turn === "x" ? "bar action" : "bar"}>x</div>
          <div className="vs">VS</div>
          <div className={turn === "o" ? "bar action" : "bar"}>o</div>
        </section>
        <section className="table-wrap">
          <div className="table-row">
            <div id="1" className="btn" onClick={this.appendXO}>
              {one === "x" ? "x" : one === "o" ? "o" : ""}
            </div>
            <div id="2" className="btn" onClick={this.appendXO}>
              {two === "x" ? "x" : two === "o" ? "o" : ""}
            </div>
            <div id="3" className="btn" onClick={this.appendXO}>
              {three === "x" ? "x" : three === "o" ? "o" : ""}
            </div>
          </div>
          <div className="table-row">
            <div id="4" className="btn" onClick={this.appendXO}>
              {four === "x" ? "x" : four === "o" ? "o" : ""}
            </div>
            <div id="5" className="btn" onClick={this.appendXO}>
              {five === "x" ? "x" : five === "o" ? "o" : ""}
            </div>
            <div id="6" className="btn" onClick={this.appendXO}>
              {six === "x" ? "x" : six === "o" ? "o" : ""}
            </div>
          </div>
          <div className="table-row">
            <div id="7" className="btn" onClick={this.appendXO}>
              {seven === "x" ? "x" : seven === "o" ? "o" : ""}
            </div>
            <div id="8" className="btn" onClick={this.appendXO}>
              {eight === "x" ? "x" : eight === "o" ? "o" : ""}
            </div>
            <div id="9" className="btn" onClick={this.appendXO}>
              {nine === "x" ? "x" : nine === "o" ? "o" : ""}
            </div>
          </div>
        </section>
        <section className="footer">
          <button className="btn-start-reset" onClick={this.startAndclear}>
            {started ? "reset" : "start"}
          </button>
          <h1 style={{ fontSize: "60px" }}>
            {winner === "x" ? "x WIN!" : winner === "o" ? "o WIN!" : ""}
          </h1>
        </section>
      </div>
    );
  }
}

export default App;
