import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from 'presentationals/Todo.jsx';
import { List } from 'immutable';

const TodoList = ({ todos }) => (
  <ul>
    {
      todos.map(todo => <Todo todo={todo} />)
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
};

const mapStateToProps = (state) => {
  return {
    todos: state.get('todos'),
  };
};

export default connect(mapStateToProps)(TodoList);
