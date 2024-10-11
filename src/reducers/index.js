import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';


export const history = createBrowserHistory()

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  counter: counterReducer
})
