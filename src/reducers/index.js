import { rules, logs, settings, admins } from './testData';
import {
  OPEN_PAGE,
  EDIT_RULE,
  DELETE_RULE,
  ADD_RULE,
  CHECK_SIGN_IN,
  DELETE_ACCOUNT,
  SAVE_SETTINGS,
  CREATE_ACCOUNT,
  EDIT_ACCOUNT,
  LOGOUT,
} from '../actions';


const initialState = {
  activePage: 'Правила',
  rules,
  test: rules,
  logs,
  settings,
  name: '',
  admins,
  isAuthorized: null,
  check: null,
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHECK_SIGN_IN:
      return {
        ...state,
        isAuthorized: payload.authorized,
        name: payload.name,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthorized: false,
      };
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
    case DELETE_ACCOUNT:
        state.admins.splice(payload, 1);
      return {
        ...state,
      };
    case CREATE_ACCOUNT: 
    state.admins.push(payload);
      return {
        ...state,
      };
    case SAVE_SETTINGS:
      return {
        ...state,
        settings: payload,
      };
    case EDIT_ACCOUNT:
      state.rules.splice(payload.id, 1, payload.values);
      return {
        ...state,
      };
    default:
      return state;
  }
};