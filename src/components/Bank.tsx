import React from 'react';
import Toggle from 'react-toggle';
import { connect } from 'react-redux';
import { toggle } from '../store/drumMachine/actions';
import { AppState } from '../store';

interface BankProps {
  bank: boolean;
  toggle: (type: 'bank') => void;
  power: boolean;
}

const Bank = ({ bank, toggle, power }: BankProps) => {
  return (
    <div className='my-1 d-flex flex-column'>
      <div className='text-center'>Bank</div>
      <Toggle
        disabled={!power}
        defaultChecked={bank}
        icons={false}
        onChange={() => toggle('bank')}
      />
    </div>
  );
};

const mapStateToProps = ({ drumPad }: AppState) => ({
  bank: drumPad.bank,
  power: drumPad.power
});

const mapDispatchToProps = {
  toggle
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Bank);
