import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import 'style/main.styl';
import reducers from 'core/reducers/reducers';
import Todos from 'views/Todos/Todos';
import TodoArchived from 'views/TodoArchived/TodoArchived';

window.React = React;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const todoStore = createStoreWithMiddleware(
  reducers,
  {},
  window.devToolsExtension ? window.devToolsExtension() : f => f,
);

const TodoApp = ({ store }) => (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Todos} />
      <Route path="/archived" component={TodoArchived} />
    </Router>
  </Provider>
);

TodoApp.propTypes = {
  store: PropTypes.object.isRequired,
};

render(<TodoApp store={todoStore} />, document.getElementById('root'));
