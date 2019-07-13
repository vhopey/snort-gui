import {  settings } from './testData';

export const FETCH_SETTINGS = 'FETCH_SETTINGS';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export function fetchSettings() {
  return {
    type: FETCH_SETTINGS,
    payload: settings,
  }
}

export function saveSettings(values) {
  return {
    type: SAVE_SETTINGS,
    payload: values,
  }
}