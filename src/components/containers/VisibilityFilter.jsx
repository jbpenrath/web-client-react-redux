import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from 'core/actions/actions';

const VisibilityFilter = ({ className, filter_activated, onClick }) => (
  <ul className={className}>
    <li className={`Filter ${filter_activated === 'SHOW_ALL' ? 'isActive' : null}`}>
      <button onClick={(e) => {
        e.preventDefault();
        onClick('SHOW_ALL');
      }}>All</button>
    </li>
    <li className="Separator">|</li>
    <li className={`Filter ${filter_activated === 'SHOW_ACTIVE' ? 'isActive' : null}`}>
      <button onClick={(e) => {
        e.preventDefault();
        onClick('SHOW_ACTIVE');
      }}>Not Completed</button>
    </li>
  </ul>
);

VisibilityFilter.propTypes = {
  className: PropTypes.string,
  filter_activated: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

VisibilityFilter.defaultProps = {
  className: '',
};

const mapStateToProps = (state) => {
  const nextState = {
    filter_activated: state.visibilityFilter,
  };
  return nextState;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (filter) => {
      dispatch(setVisibilityFilter(filter));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisibilityFilter);
