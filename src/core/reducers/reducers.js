import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { Map, List } from 'immutable';
import { REQUEST_TODOS, REQUEST_TODOS_FAILURE, REQUEST_TODOS_SUCCESS, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actions/actions';

const initialState = Map({
  loading: false,
  todos: List(),
});

const todoApp = (state = initialState, action) => {
  let todos;
  switch (action.type) {
    case ADD_TODO:
      todos = state.get('todos').unshift(Map({
        primaryKey: state.get('todos').size,
        completed: false,
        task: action.payload,
        createdAt: Date.now(),
      }));
      return state.set('todos', todos);
    case TOGGLE_TODO:
      todos = state.get('todos').map((todo) => {
        if (todo.get('primaryKey') === action.payload.id) {
          return todo.set('completed', !todo.get('completed'));
        }
        return todo;
      });
      return state.set('todos', todos);
    case REQUEST_TODOS_FAILURE:
      state.set('loading', action.meta.loading);
      return state.set('error', action.payload);
    case REQUEST_TODOS_SUCCESS:
      state = state.set('loading', action.meta.loading);
      todos = state.get('todos').push(...action.payload);
      return state.set('todos', todos);
    case REQUEST_TODOS:
      return state.set('loading', action.meta.loading);
    default:
      return state;
  }
};

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;
    default:
      return state;
  }
};

export default combineReducers({
  todoApp,
  visibilityFilter,
  routerReducer,
});
