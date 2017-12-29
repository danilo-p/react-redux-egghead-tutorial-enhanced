import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { setVisibilityFilter } from 'common/ducks/visibilityFilter';

/**
 * Describes a button that is used to filter the todos on the app.
 *
 * @param {Object} props The component properties
 * @param {Boolean} props.active Is the filter that the button describes active?
 * @param {Array} props.children The button children components
 * @param {Function} props.onClick Button click handler
 * @returns {jsx} The button template
 */
const FilterButton = ({
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

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = (
  state,
  containerProps,
) => ({
  active: containerProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch,
  containerProps,
) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(containerProps.filter));
  },
});

/**
 * Exports the container component for the FilterButton
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);
