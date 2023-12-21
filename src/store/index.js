import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

import reducer from '../reducers';
import userMiddleware from '../middleware/userMiddleware';

const enhancerWithMiddlewares = applyMiddleware(userMiddleware);

const enhancer = composeWithDevTools(enhancerWithMiddlewares);

const store = createStore(reducer, enhancer);

export default store;
