import { createStore } from 'redux';
import reducer from './reducers';
import store from './store';

export default function() {
  return createStore(reducer, store);
}
