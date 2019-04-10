import {
  DrumMachineState,
  DrumMachineActionTypes,
  TOGGLE_POWER,
  TOGGLE_BANK,
  heaterKit,
  smoothPianoKit,
  bankModeTypes,
  SET_VOLUME,
  SET_MODE,
  modes
} from './types';

export const initialState: DrumMachineState = {
  bankMode: heaterKit,
  mode: heaterKit,
  power: false,
  volume: 0.5,
  bank: false
};

export default (state = initialState, action: DrumMachineActionTypes) => {
  switch (action.type) {
    case TOGGLE_POWER: {
      return {
        ...state,
        power: !state.power
      };
    }
    case TOGGLE_BANK: {
      const mode: any =
        state.mode === smoothPianoKit ? initialState.mode : smoothPianoKit;
      return {
        ...state,
        bank: !state.bank,
        bankMode: mode,
        mode: mode
      };
    }
    case SET_VOLUME: {
      return {
        ...state,
        volume: action.payload.volume
      };
    }
    case SET_MODE: {
      return {
        ...state,
        mode: action.payload.mode
      };
    }
    default:
      return state;
  }
};
