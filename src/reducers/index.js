import { combineReducers } from 'redux';
import account from './account';
import control from './control';
import logs from './logs';
import rules from './rules';
import settings from './settings';

const rootReducer = combineReducers({
  account,
  control,
  logs,
  rules,
  settings,
});

export default rootReducer;