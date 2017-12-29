import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleTodo } from 'common/ducks/todos';
import Todo from './Todo/index';

/**
 * Describes the todo list
 *
 * @param {any} props The component properties
 * @param {Array} props.todosList The array containing all the todos.
 * @param {Function} props.onTodoClick The todo click handler
 * @returns {jsx} The component template
 */
const VisibleTodoList = ({
  todosList,
  onTodoClick,
}) => (
  <ul>
    {todosList.map(t => (
      <Todo
        key={t.id}
        {...t}
        onClick={() => onTodoClick(t.id)}
      />
    ))}
  </ul>
);

/**
 * Utility for filtering an array of todos given a filter.
 *
 * @param {Array} todosList The todos list
 * @param {String} filter The filter to be applied on the todosList array.
 * @returns {jsx} The filtered array
 */
const getVisibleTodos = (
  todosList,
  filter,
) => {
  switch (filter) {
  case 'SHOW_COMPLETED':
    return todosList.filter(t => t.completed);
  case 'SHOW_ACTIVE':
    return todosList.filter(t => !t.completed);
  case 'SHOW_ALL':
  default:
    return todosList;
  }
};

VisibleTodoList.propTypes = {
  todosList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  todosList: getVisibleTodos(
    state.todos,
    state.visibilityFilter,
  ),
});

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => ({
    dispatch: dispatch(toggleTodo(id)),
  }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VisibleTodoList);
