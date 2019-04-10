import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVolume, setMode } from '../store/drumMachine/actions';
import { AppState } from '../store';
import { modes } from '../store/drumMachine/types';

interface VolumeProps {
  power: boolean;
  volume: number;
  setVolume: (volume: number) => void;
  setMode: (mode: modes) => void;
}

class Volume extends Component<VolumeProps> {
  componentDidUpdate() {
    this.handleVolume();
  }
  componentDidMount() {
    this.handleVolume();
  }
  handleVolume = () => {
    interface inputRange {
      disabled: boolean;
    }
    const inputRange = document.getElementById('volume') as HTMLElement &
      inputRange;
    if (!this.props.power && inputRange !== null) {
      inputRange.disabled = true;
    } else {
      inputRange.disabled = false;
    }
  };
  adjustVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const { setVolume, setMode } = this.props;
    setVolume(Number(value));
    setMode(Number(value));
    setTimeout(() => setMode(null), 1000);
  };
  render() {
    const { volume } = this.props;
    return (
      <input
        id='volume'
        type='range'
        min='0'
        max='1'
        step='0.01'
        value={volume}
        onChange={this.adjustVolume}
      />
    );
  }
}

const mapStateToProps = ({ drumPad: { volume, power } }: AppState) => ({
  volume,
  power
});

const mapDispatchToProps = {
  setVolume,
  setMode
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Volume);
