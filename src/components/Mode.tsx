import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../store';

interface ModeProps {
  mode: string;
  power: boolean;
}
const Mode = ({ mode, power }: ModeProps) => {
  return (
    <div id='display' className='my-3 mode w-75 text-center'>
      {!!power ? mode : ''}
    </div>
  );
};

const mapStateToProps = ({ drumPad }: AppState) => ({
  mode: drumPad.mode,
  power: drumPad.power
});

export default connect(mapStateToProps)(Mode);
