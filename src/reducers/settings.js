import {
  FETCH_SETTINGS,
  SAVE_SETTINGS,
} from '../actions';


const initialState = {
  settings: {},
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_SETTINGS:
      return {
        ...state,
        settings: payload,
      }
    case SAVE_SETTINGS:
      return {
        ...state,
        settings: payload,
      };
    default:
      return state;
  }
};