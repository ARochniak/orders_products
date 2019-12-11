import { createStore } from 'redux';
import reducer from './reducers';
import initialStore from './initialStore';

export default function() {
  return createStore(reducer, initialStore);
}
