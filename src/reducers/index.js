import { rules, logs, settings, feedbacks } from '../testData';
import {
  OPEN_PAGE,
} from '../actions';


const initialState = {
  activePage: 'rules',
  rules,
  logs,
  settings,
  feedbacks,
  name: '',
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    case OPEN_PAGE:
      return {
        ...state,
        activePage: payload,
      };
    default:
      return state;
  }
}