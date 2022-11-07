import React from "react";

const pressed = {
  backgroundColor: "#fffa57",
};

const unpressed = {
  backgroundColor: "#eff0f2",
};
export default class DrumPad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: unpressed,
    };
    this.playSound = this.playSound.bind(this);
    this.handleKeydown = this.handleKeydown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleKeydown(e) {
    if (e.keyCode === this.props.data.keyCode) {
      this.playSound();
    }
  }

  playSound(e) {
    const { id, keyTrigger } = this.props.data;
    const sound = document.getElementById(keyTrigger);
    sound.currentTime = 0;
    console.log(sound);
    sound.play();
    this.props.onPlay(id);
    this.setState({ style: pressed });
    setTimeout(() => this.setState({ style: unpressed }), 100);
  }

  render() {
    const { id, url, keyTrigger } = this.props.data;
    return (
      <div
        className="drum-pad"
        id={id}
        onClick={this.playSound}
        style={this.state.style}
      >
        <audio
          id={keyTrigger}
          src={url}
          className="clip"
          type="audio/mp3"
        ></audio>
        {keyTrigger}
      </div>
    );
  }
}
