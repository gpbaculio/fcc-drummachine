import React, { useState } from 'react';
import { connect } from 'react-redux';
import Toggle from 'react-toggle';
import { toggle } from '../store/drumMachine/actions';
import { AppState } from '../store';

interface PowerProps {
  power: boolean;
  toggle: (type: 'power') => void;
}

const Power = ({ power, toggle }: PowerProps) => {
  return (
    <div className='my-1 d-flex flex-column'>
      <div className='text-center'>Power</div>
      <Toggle
        defaultChecked={power}
        icons={false}
        onChange={() => toggle('power')}
      />
    </div>
  );
};

const mapStateToProps = ({ drumPad }: AppState) => ({
  power: drumPad.power
});

const mapDispatchToProps = {
  toggle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Power);
