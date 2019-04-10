import {
  heater3,
  heater1,
  heater2,
  heater4,
  clap,
  openHh,
  kickNHat,
  kick,
  closedHh,
  chord1,
  chord2,
  chord3,
  shaker,
  punchKick,
  sideStick,
  snare
} from './store/drumMachine/types';

export default {
  'Heater Kit': {
    Q: {
      // heater kit
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Heater-1' as typeof heater1,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
    },
    W: {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Heater-2' as typeof heater2,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
    },
    E: {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Heater-3' as typeof heater3,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
    },
    A: {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Heater-4' as typeof heater4,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
    },
    S: {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Clap' as typeof clap,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
    },
    D: {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Open-HH' as typeof openHh,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
    },
    Z: {
      keyCode: 90,
      keyTrigger: 'Z',
      id: "Kick-n'-Hat" as typeof kickNHat,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
    },
    X: {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Kick' as typeof kick,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
    },
    C: {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Closed-HH' as typeof closedHh,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
    }
  },
  'Smooth Piano Kit': {
    Q: {
      keyCode: 81,
      keyTrigger: 'Q',
      id: 'Chord-1' as typeof chord1,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    },
    W: {
      keyCode: 87,
      keyTrigger: 'W',
      id: 'Chord-2' as typeof chord2,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    },
    E: {
      keyCode: 69,
      keyTrigger: 'E',
      id: 'Chord-3' as typeof chord3,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    },
    A: {
      keyCode: 65,
      keyTrigger: 'A',
      id: 'Shaker' as typeof shaker,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    },
    S: {
      keyCode: 83,
      keyTrigger: 'S',
      id: 'Open-HH' as typeof openHh,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    },
    D: {
      keyCode: 68,
      keyTrigger: 'D',
      id: 'Closed-HH' as typeof closedHh,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    },
    Z: {
      keyCode: 90,
      keyTrigger: 'Z',
      id: 'Punchy-Kick' as typeof punchKick,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    },
    X: {
      keyCode: 88,
      keyTrigger: 'X',
      id: 'Side-Stick' as typeof sideStick,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    },
    C: {
      keyCode: 67,
      keyTrigger: 'C',
      id: 'Snare' as typeof snare,
      url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    }
  }
};
