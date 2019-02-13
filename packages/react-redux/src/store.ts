import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import makeRootReducer from './reducers';

// Reducers
const history = createBrowserHistory();
const rootReducer = makeRootReducer(history);
// Enhancers
const enhancers = composeWithDevTools({})(applyMiddleware(routerMiddleware(history)));
// Store
const store = createStore(rootReducer, {}, enhancers);

export { history };
export default store;
