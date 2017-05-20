import React, { PropTypes } from 'react';
import { Map } from 'immutable';
import './Todo.styl';

const Todo = ({ todo, onClick }) => {
  const date = new Date(todo.get('createdAt'));

  const formatedDate = `${date.toLocaleDateString('en-EN')} at ${date.getHours()}:${date.getMinutes()}`;

  return (
    <li onClick={onClick} className={
          `Todo Todo_${todo.get('completed') ? 'completed' : 'uncompleted'}`
        }
    >
      <h5 className="Todo-task">{todo.get('task')}</h5>
      <small className="Todo-timestamp">{formatedDate}</small>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.instanceOf(Map).isRequired,
};

export default Todo;
