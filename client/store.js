/**
 * @module  store.js
 * @author Jonathan Escamilla
 * @date Sat, Jun 6, 2020
 * @description Redux 'single source of truth'
 */

import { createStore } from 'redux';

const store = createStore(composeWithDevTools());

export default store;
