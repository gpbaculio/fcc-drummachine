export const TOGGLE_POWER = 'TOGGLE_POWER';
export const TOGGLE_BANK = 'TOGGLE_BANK';
export const SET_VOLUME = 'SET_VOLUME';
export const SET_MODE = 'SET_MODE';
export const heaterKit = 'Heater Kit';
export const smoothPianoKit = 'Smooth Piano Kit';
export const heater1 = 'Heater-1';
export const heater2 = 'Heater-2';
export const heater3 = 'Heater-3';
export const heater4 = 'Heater-4';
export const clap = 'Clap';
export const openHh = 'Open-HH';
export const kickNHat = "Kick-n'-Hat";
export const kick = 'Kick';
export const closedHh = 'Closed-HH';
export const chord1 = 'Chord-1';
export const chord2 = 'Chord-2';
export const chord3 = 'Chord-3';
export const shaker = 'Shaker';
export const punchKick = 'Punchy-Kick';
export const sideStick = 'Side-Stick';
export const snare = 'Snare';

export type bankModeTypes = typeof heaterKit | typeof smoothPianoKit;
export type modes =
  | typeof heaterKit
  | typeof smoothPianoKit
  | typeof heater1
  | typeof heater2
  | typeof heater3
  | typeof heater4
  | typeof clap
  | typeof openHh
  | typeof kickNHat
  | typeof kick
  | typeof closedHh
  | typeof chord1
  | typeof chord2
  | typeof chord3
  | typeof shaker
  | typeof punchKick
  | typeof sideStick
  | typeof snare
  | null
  | number;

export interface DrumMachineState {
  bankMode: bankModeTypes;
  mode: modes | bankModeTypes;
  power: boolean;
  volume: number;
  bank: boolean;
}

interface togglePower {
  type: typeof TOGGLE_POWER;
}

interface toggleBank {
  type: typeof TOGGLE_BANK;
}

interface setMode {
  type: typeof SET_MODE;
  payload: {
    mode: string;
  };
}

interface setVolume {
  type: typeof SET_VOLUME;
  payload: {
    volume: number;
  };
}

export type DrumMachineActionTypes =
  | togglePower
  | toggleBank
  | setMode
  | setVolume;
