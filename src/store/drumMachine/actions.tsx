import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { AppState } from '../index';
import {
  TOGGLE_POWER,
  TOGGLE_BANK,
  SET_VOLUME,
  SET_MODE,
  bankModeTypes,
  modes
} from './types';

export const toggle = (
  type: 'power' | 'bank'
): ThunkAction<void, AppState, void, AnyAction> => (dispatch, _getState) => {
  if (type === 'power') {
    dispatch({ type: TOGGLE_POWER });
  } else if (type === 'bank') {
    dispatch({ type: TOGGLE_BANK });
  }
};

export const setVolume = (
  volume: number
): ThunkAction<void, AppState, void, AnyAction> => (dispatch, _getState) => {
  dispatch({ type: SET_VOLUME, payload: { volume } });
};

export const setMode = (
  mode: bankModeTypes | modes
): ThunkAction<void, AppState, void, AnyAction> => (dispatch, _getState) => {
  dispatch({ type: SET_MODE, payload: { mode } });
};
