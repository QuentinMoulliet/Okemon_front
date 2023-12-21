import { combineReducers } from 'redux';

import mainReducer from './main';
import userReducer from './user';
import newUserReducer from './newUser';
import searchReducer from './search';

const rootReducer = combineReducers({
  main: mainReducer,
  user: userReducer,
  newUser: newUserReducer,
  search: searchReducer,
});

export default rootReducer;
