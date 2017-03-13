import React, { PropTypes } from 'react';
import { Map } from 'immutable';

const Todo = ({ todo }) => (
  <li key={todo.id}>
    <input type="checkbox" checked={todo.completed} />
    <h5>{todo.task}</h5>
    <small>{todo.createdAt.toLocaleDateString('fr-FR')}</small>
  </li>
);

Todo.propTypes = {
  todo: PropTypes.instanceOf(Map).isRequired,
};

export default Todo;
