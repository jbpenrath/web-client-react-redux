import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { Map } from 'immutable';
import { REQUEST_TODOS, REQUEST_TODOS_FAILURE, REQUEST_TODOS_SUCCESS } from '../actions/actions';

const todos = (state = Map(), action) => {
  state.set(action.meta.loading);
  switch (action.type) {
    case REQUEST_TODOS_FAILURE:
      return state.set('error', action.payload);
    case REQUEST_TODOS_SUCCESS:
      return state.todos.merge(action.payload);
    case REQUEST_TODOS:
    default:
      return state;
  }
};

export default combineReducers({
  todos,
  routerReducer,
});
