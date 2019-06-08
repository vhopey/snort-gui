import { rules, logs, settings, feedbacks } from './testData';
import {
  OPEN_PAGE,
  EDIT_RULE,
  DELETE_RULE,
  ADD_RULE,
} from '../actions';


const initialState = {
  activePage: 'Правила',
  rules,
  test: rules,
  logs,
  settings,
  feedbacks,
  name: '',
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_PAGE:
      return {
        ...state,
        activePage: payload,
      };
    case ADD_RULE:
      state.rules.push(payload);
      return {
        ...state,
      };
    case EDIT_RULE:
      state.rules.splice(payload.id, 1, payload.values);
      return {
        ...state
      };
    case DELETE_RULE:
      state.rules.splice(payload, 1);
      return {
        ...state,
      };
    default:
      return state;
  }
};