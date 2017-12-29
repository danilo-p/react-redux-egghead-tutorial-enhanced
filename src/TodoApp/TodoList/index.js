import React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

/**
 * SFC that describes the todo list.
 * @see SFC https://reactjs.org/docs/components-and-props.html#functional-and-class-components
 *
 * @export
 * @return {jsx} The TodoList template
 */
export default function TodoList() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}
