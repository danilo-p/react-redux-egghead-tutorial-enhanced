import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TodoList from './TodoList';
import styles from './index.styl';

/**
 * Describes the todo list page.
 *
 * @returns {jsx} The TodoListPage template
 */
export default function TodoListPage() {
  return (
    <Container>
      <Grid centered>
        <Grid.Column computer="8" tablet="8" mobile="16">
          <Header as="h1" className={styles.TodoListPage__Header}>
            A Simple Todo App
          </Header>
          <TodoList />
        </Grid.Column>
      </Grid>
    </Container>
  );
}
