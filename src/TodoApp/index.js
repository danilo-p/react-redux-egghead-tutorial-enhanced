/**
 * The main application component module.
 *
 * @module TodoApp
 */

import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import TodoList from './TodoList';
import styles from './index.styl';

const TodoApp = () => (
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

export default TodoApp;
