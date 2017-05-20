import React, { PropTypes } from 'react';

const Title = ({ children }) => (
  <h1>{children}</h1>
);

Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Title;
