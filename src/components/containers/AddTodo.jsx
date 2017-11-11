import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTodo } from 'core/actions/actions';

const AddTodo = ({ dispatch }) => {
  let input;

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.value.trim()) {
      dispatch(addTodo(input.value));
    }
    input.value = '';
  };

  return (
    <form className="Todos-form" onSubmit={e => onSubmit(e)}>
      <input className="Todos-input" ref={(node) => { input = node; }} type="text" placeholder="Add a task..." />
      <input className="Todos-submit" type="submit" value="+" />
    </form>
  );
};

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
