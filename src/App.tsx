import React, { Component, useState } from 'react';
import Toggle from 'react-toggle';
import './App.css';
import 'react-toggle/style.css';

interface AppProps {}
interface AppState {
  [key: string]: boolean;
}
class App extends Component<AppProps, AppState> {
  state = {
    power: false,
    bank: false
  };
  handleToggle = (key: string) => {
    const { key: val }: any = this.state;
    this.setState({ [key]: val });
  };
  render() {
    return (
      <div className='App d-flex justify-content-center align-items-center'>
        <div className='drum-container d-flex'>
          <div className='pad-container w-50 d-flex flex-column'>
            <div className='d-flex'>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                Q
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                W
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                E
              </div>
            </div>
            <div className='d-flex'>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                A
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                S
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                D
              </div>
            </div>
            <div className='d-flex'>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                Z
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                X
              </div>
              <div className='pad m-3 d-flex justify-content-center align-items-center'>
                C
              </div>
            </div>
          </div>
          <div className='controls-container w-50 d-flex flex-column justify-content-between align-items-center'>
            <div className='d-flex flex-column'>
              <div className='text-center'>Power</div>
              <Toggle
                defaultChecked={this.state.power}
                icons={false}
                onChange={() => this.handleToggle('power')}
              />
            </div>
            <div className='mode'>Mode</div>
            <input type='range' />
            <div className='d-flex flex-column'>
              <div className='text-center'>Bank</div>
              <Toggle
                defaultChecked={this.state.bank}
                icons={false}
                onChange={() => this.handleToggle('bank')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
