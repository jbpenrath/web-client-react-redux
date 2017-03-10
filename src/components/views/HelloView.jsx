import React, { PropTypes } from 'react';
import './HelloView.styl';

const HelloView = ({ name = 'World' }) => (
  <h1>Hello {name} 🌍</h1>
);

HelloView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloView;
