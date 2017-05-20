import { Map, List } from 'immutable';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export function setVisibilityFilter(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter },
  };
}

export const REQUEST_TODOS = 'REQUEST_TODOS';
export function requestTodos() {
  return {
    type: REQUEST_TODOS,
    meta: { loading: true },
  };
}

export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export function requestTodosSuccess(todos = []) {
  return {
    type: REQUEST_TODOS_SUCCESS,
    meta: { loading: false },
    payload: todos,
  };
}

export const REQUEST_TODOS_FAILURE = 'REQUEST_TODOS_FAILURE';
export function requestTodosFailure(error) {
  return {
    type: REQUEST_TODOS_FAILURE,
    meta: { loading: false },
    payload: error,
  };
}

export const ADD_TODO = 'ADD_TODO';
export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export const TOGGLE_TODO = 'TOGGLE_TODO';
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: {
      id,
    },
  };
}

export const FETCH_TODOS = 'FETCH_TODOS';
export function fetchTodos(dispatch) {
  dispatch(requestTodos());
  setTimeout(() => {
    const todos = List([Map({
      primaryKey: 0,
      completed: false,
      task: 'A first task',
      createdAt: Date.now(),
    }), Map({
      primaryKey: 1,
      completed: true,
      task: 'A second task',
      createdAt: Date.now() - 10,
    })]);
    dispatch(requestTodosSuccess(todos));
  }, 1000 + (Math.random() * 1000));
}