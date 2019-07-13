import { combineReducers } from 'redux';

import account from './account';
import rules from './rules';
import control from './control';
import logs from './logs';
import settings from './settings';

const rootReducer = combineReducers({
  account,
  rules,
  control,
  settings,
  logs,
});

export default rootReducer;