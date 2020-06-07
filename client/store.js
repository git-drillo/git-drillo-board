/**
 * @module  store.js
 * @author Jonathan Escamilla
 * @date Sat, Jun 6, 2020
 * @description Redux 'single source of truth'
*/

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import reducers from './reducers/index'

const store = createStore(
  // reducers, 
  composeWithDevTools()
);

export default store;