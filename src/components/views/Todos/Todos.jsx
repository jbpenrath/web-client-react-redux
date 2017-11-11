import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'immutable';
import TodoList from 'containers/TodoList';
import AddTodo from 'containers/AddTodo';
import VisibilityFilter from 'containers/VisibilityFilter';

const Todos = ({ loading, todos = [] }) => {
  return (
    <div className="Todos">
      <header className="Todos-header">
        <h1>To Do Tasks</h1>
      </header>
      <section className="Todos-container">
        <AddTodo />
        {loading ?
          <span className="loader" /> :
          <TodoList todos={todos} />
        }
      </section>
      <footer className="Todos-footer">
        <h3 className="Todos-counter">{todos.size} todos</h3>
        <VisibilityFilter className="Todos-filter" />
      </footer>
    </div>
  );
};

Todos.propTypes = {
  loading: PropTypes.bool.isRequired,
  todos: PropTypes.instanceOf(List),
};

Todos.defaultProps = {
  todos: List(),
};

const mapStateToProps = (state) => {
  const nextState = {
    loading: state.todoApp.get('loading'),
    todos: filterTodos(state.visibilityFilter, state.todoApp.get('todos')),
  };
  return nextState;
};

function filterTodos(filter, todos) {
  switch (filter) {
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.get('completed'));
    case 'SHOW_ALL':
    default:
      return todos;
  }

}

export default connect(mapStateToProps)(Todos);
