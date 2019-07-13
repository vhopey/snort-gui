import {
  OPEN_PAGE,
} from '../actions';


const initialState = {
  activePage: 'Правила',
};

export default function controlReducer(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_PAGE:
      return {
        ...state,
        activePage: payload,
      };
    default:
      return state;
  }
};