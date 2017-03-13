import { Map, List } from 'immutable';

export const REQUEST_TODOS = 'REQUEST_TODOS';
export function requestTodos() {
  return {
    type: REQUEST_TODOS,
    meta: { loading: true },
    payload: {},
  };
}

export const REQUEST_TODOS_SUCCESS = 'REQUEST_TODOS_SUCCESS';
export function requestTodosSuccess(todos) {
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

export const FETCH_TODOS = 'FETCH_TODOS';
export function fetchTodos(dispatch) {
  dispatch(requestTodos());
  setTimeout(() => {
    const todos = List([Map({
      id: 0,
      completed: false,
      task: 'A first task',
      createdAt: Date.now(),
    }), Map({
      id: 1,
      completed: true,
      task: 'A second task',
      createdAt: Date.now() - 10,
    })]);
    dispatch(requestTodosSuccess(todos));
  }, 500 + (Math.random() * 500));
}
