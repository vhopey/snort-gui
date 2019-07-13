import {
  ADD_RULE,
  DELETE_RULE,
  EDIT_RULE,
  FETCH_RULES,
} from '../actions';


const initialState = {
  rules: [],
};

export default function rulesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_RULES:
      return {
        ...state,
        rules: payload,
      }
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