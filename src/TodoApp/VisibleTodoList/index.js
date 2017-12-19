import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Todo from './Todo';
import { toggleTodo } from '../ducks/todo';

const getVisibleTodos = (
  todosList,
  filter,
) => {
  switch (filter) {
  case 'SHOW_ALL':
    return todosList;
  case 'SHOW_COMPLETED':
    return todosList.filter(t => t.completed);
  case 'SHOW_ACTIVE':
    return todosList.filter(t => !t.completed);
  default:
    return todosList;
  }
};

const TodoList = ({
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

TodoList.propTypes = {
  todosList: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
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
)(TodoList);
