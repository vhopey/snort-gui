import {
  CHECK_SIGN_IN,
  CREATE_ACCOUNT,
  DELETE_ACCOUNT,
  EDIT_ACCOUNT,
  LOGOUT,
} from '../actions';


const initialState = {
  name: '',
  admins: [],
  isAuthorized: null,
};

export default function accountReducer(state = initialState, { type, payload }) {
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
    case EDIT_ACCOUNT:
      state.rules.splice(payload.id, 1, payload.values);
      return {
        ...state,
      };
    default:
      return state;
  }
};