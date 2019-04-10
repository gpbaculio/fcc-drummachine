import React, { Component } from 'react';
import bank from '../sounds';
import { AppState } from '../store';
import { connect } from 'react-redux';
import { setMode } from '../store/drumMachine/actions';
import { bankModeTypes, modes } from '../store/drumMachine/types';

interface PadProps {
  keypad: 'Q' | 'W' | 'E' | 'A' | 'S' | 'D' | 'Z' | 'X' | 'C';
  bankMode: bankModeTypes;
  power: boolean;
  volume: number;
  setMode: (mode: modes | bankModeTypes) => void;
}

class Pad extends Component<PadProps> {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  handleKeyPress = (e: any) => {
    const { keypad, bankMode, power, setMode, volume } = this.props;
    if (e.keyCode === bank[bankMode][keypad].keyCode) {
      this.playSound();
    }
  };
  playSound = () => {
    const { keypad, bankMode, power, setMode, volume } = this.props;
    const sound = document.getElementById(
      bank[bankMode][keypad].id
    ) as HTMLAudioElement;
    if (power && sound !== null) {
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
      const mode: modes = bank[bankMode][keypad].id;
      setMode(mode);
    }
  };
  render() {
    const { keypad, bankMode } = this.props;
    return (
      <div
        id={keypad}
        onClick={this.playSound}
        className='drum-pad m-3 d-flex justify-content-center align-items-center'>
        <audio
          className='clip'
          id={bank[bankMode][keypad].id}
          src={bank[bankMode][keypad].url}
        />
        {keypad}
      </div>
    );
  }
}

const mapStateToProps = ({
  drumPad: { bankMode, power, volume }
}: AppState) => ({
  bankMode,
  power,
  volume
});

const mapDispatchToProps = {
  setMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pad);
