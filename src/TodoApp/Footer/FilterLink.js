import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { setVisibilityFilter } from '../ducks/visibilityFilter';

const Link = ({
  active,
  children,
  onClick,
}) => (
  <Button
    secondary
    disabled={active}
    size="mini"
    onClick={onClick}
  >
    {children}
  </Button>
);

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (
  state,
  ownProps,
) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch,
  ownProps,
) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
