import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import initialStore from './initialStore';

export default function() {
  return createStore(reducer, initialStore, applyMiddleware(thunk));
}
