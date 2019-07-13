import {
  FETCH_LOGS,
} from '../actions';


const initialState = {
  logs: [],
};

export default function logsReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_LOGS:
      return {
        ...state,
        logs: payload,
      }
    default:
      return state;
  }
};