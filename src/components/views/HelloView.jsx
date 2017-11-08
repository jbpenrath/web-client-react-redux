import React from 'react';
import PropTypes from 'prop-types';
import Title from 'presentationals/Title';
import './HelloView.styl';

const HelloView = ({ name = 'World' }) => (
  <Title>Hello {name}!</Title>
);

HelloView.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloView;
