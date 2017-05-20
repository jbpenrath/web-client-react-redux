import React, { PropTypes } from 'react';
import Title from 'presentationals/Title';
import './HelloView.styl';

const HelloView = ({ name = 'World' }) => (
  <Title>Hello {name}!</Title>
);

HelloView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloView;
