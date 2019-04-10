import React, { Component } from 'react';
import { Pad, Power, Mode, Bank, Volume } from './components';
import { connect } from 'react-redux';
import './App.css';
import 'react-toggle/style.css';
import { AppState } from './store';

interface AppProps {
  power: boolean;
}
interface AppComponentState {
  [key: string]: boolean;
}
class App extends Component<AppProps, AppComponentState> {
  state = {
    power: false,
    bank: false
  };

  handleToggle = (key: string) => {
    const { key: val }: AppComponentState = this.state;
    this.setState({ [key]: val });
  };
  render() {
    return (
      <div
        id='drum-machine'
        className='App d-flex justify-content-center align-items-center'>
        <div className='drum-container d-flex'>
          <div className='pad-container justify-content-center align-items-center w-50 d-flex flex-column'>
            <div className='d-flex'>
              <Pad keypad={'Q'} />
              <Pad keypad={'W'} />
              <Pad keypad={'E'} />
            </div>
            <div className='d-flex'>
              <Pad keypad={'A'} />
              <Pad keypad={'S'} />
              <Pad keypad={'D'} />
            </div>
            <div className='d-flex'>
              <Pad keypad={'Z'} />
              <Pad keypad={'X'} />
              <Pad keypad={'C'} />
            </div>
          </div>
          <div className='controls-container my-1 w-50 d-flex flex-column justify-content-between align-items-center'>
            <Power />
            <Mode />
            <Volume />
            <Bank />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ drumPad }: AppState) => ({
  power: drumPad.power
});

export default connect(mapStateToProps)(App);
