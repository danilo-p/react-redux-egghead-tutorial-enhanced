import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';

import styles from './index.styl';

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
