import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from 'core/actions/actions';
import { List } from 'immutable';
import Todo from '../presentationals/Todo/Todo.jsx';

const TodoList = ({ todos, toggleTodoEvent }) => (
  <ul className="TodoList">
    {
      todos.map(todo => (
        <Todo
          key={todo.get('primaryKey')}
          todo={todo}
          onClick={() => toggleTodoEvent(todo.get('primaryKey'))}
        />
      ))
    }
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.instanceOf(List).isRequired,
  toggleTodoEvent: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodoEvent: (id) => {
      dispatch(toggleTodo(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(TodoList);
