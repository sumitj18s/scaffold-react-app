import { createStore } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import placeholderReducer from '../redux/placeholder';
// import createSagaMiddleware from 'redux-saga';


const store = createStore(placeholderReducer,
  composeWithDevTools(
    
    // other store enhancers if any
    ));

export default store;
