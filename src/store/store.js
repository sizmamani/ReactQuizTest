import thunk from "redux-thunk";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducers';
import logger from 'redux-logger';


export default function configureStore() {
  const middleware = composeWithDevTools(applyMiddleware(thunk, logger))
  // const middleware = applyMiddleware(thunk)
  const theStore = createStore(
    reducers,
    middleware
  )
  return theStore
}



