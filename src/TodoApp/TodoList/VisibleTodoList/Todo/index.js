import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import styles from './index.styl';

/**
 * Describes a todo item.
 *
 * @param {Object} props The Todo's component properties
 * @param {Object} props.onClick The todo's click handler
 * @param {Object} props.completed The todo's completeness
 * @param {Object} props.text The todo's content
 * @returns {jsx} The Todo's component template
 */
const Todo = ({
  onClick,
  completed,
  text,
}) => (
  <li>
    <Checkbox
      className={styles.Todo__Checkbox}
      onClick={onClick}
      label={{ children: text }}
      checked={completed}
    />
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
