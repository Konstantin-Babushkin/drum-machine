import React from "react";
import DrumPad from "./DrumPad";
import { bank1 } from "./sounds";
import { bank2 } from "./sounds";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentBank: bank1,
      currentBankId: "BANK 1",
      display: "Let's start",
    };
    this.updateDisplay = this.updateDisplay.bind(this);
    this.changeBank = this.changeBank.bind(this);
  }

  updateDisplay(text) {
    this.setState({ display: text });
  }

  changeBank(e) {
    console.log(e.target.value);
    this.state.currentBankId === "BANK 1"
      ? this.setState({
          currentBankId: "BANK 2",
          currentBank: bank2,
          display: "Chickuyori",
        })
      : this.setState({
          currentBankId: "BANK 1",
          currentBank: bank1,
          display: "Bogdan 100",
        });
  }
  render() {
    return (
      <div className="container">
        <h1 id="title">Drum Machine</h1>
        <div id="drum-machine">
          <div className="controls">
            <div id="display">{this.state.display}</div>
            <div id="bank-switcher">
              <p>{this.state.currentBankId}</p>
              <div className="switch">
                <label>
                  <input type="checkbox" onChange={this.changeBank} />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
          <div id="pads">
            {this.state.currentBank.map((sound) => (
              <DrumPad data={sound} onPlay={this.updateDisplay} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
