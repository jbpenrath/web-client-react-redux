import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import React, { PropTypes } from 'react';
import 'style/main.styl';
import reducers from 'core/reducers/reducers';
import { fetchTodos } from 'core/actions/actions';
import Todos from 'views/Todos/Todos';

window.React = React;

const middleware = applyMiddleware(thunk);

const todoStore = createStore(
  reducers,
  compose(
    middleware,
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

todoStore.dispatch(fetchTodos);

const TodoApp = ({ store }) => (
  <Provider store={store}>
    <Todos />
  </Provider>
);

TodoApp.propTypes = {
  store: PropTypes.object.isRequired,
};

render(<TodoApp store={todoStore} />, document.getElementById('root'));
