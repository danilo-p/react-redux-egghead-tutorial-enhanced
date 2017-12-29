import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TodoList from './TodoList';
import styles from './index.styl';

/**
 * SFC that describes the todo app.
 * @see SFC https://reactjs.org/docs/components-and-props.html#functional-and-class-components
 *
 * @export
 * @returns {jsx} The TodoApp template
 */
export default function TodoApp() {
  return (
    <Container>
      <Grid centered>
        <Grid.Column computer="8" tablet="8" mobile="16">
          <Header as="h1" className={styles.TodoApp__Header}>
            A Simple Todo App
          </Header>
          <TodoList />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
