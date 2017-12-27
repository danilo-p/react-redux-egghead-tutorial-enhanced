import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { addTodo } from 'common/ducks/todos';
import styles from './index.styl';

/**
 * Used for add a new todo with an input.
 *
 * @class AddTodo
 * @extends {React.Component}
 *
*/
class AddTodo extends React.Component {
  /**
   * Creates an instance of AddTodo.
   * @memberof AddTodo
   */
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  /**
   * Handles the input change and updates the component state.
   *
   * @param {any} event The change event containing the current value of the
   * input.
   * @memberof AddTodo
   * @return {void}
   */
  onInputChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }
  /**
   * Handles the button click and dispatch an addTodo action if allowed.
   *
   * @memberof AddTodo
   * @return {void}
   */
  onButtonClick() {
    const { inputText } = this.state;
    if (inputText) {
      this.props.dispatch(addTodo(inputText));
      this.setState({
        inputText: '',
      });
    }
  }
  /**
   * Renders the component
   *
   * @memberof AddTodo
   * @return {jsx} The component template
   */
  render() {
    return (
      <div className="AddTodo">
        <Input
          action
          placeholder="Remind to feed the..."
          className={styles.AddTodo__Input}
          value={this.state.inputText}
          onChange={this.onInputChange}
          onKeyPress={(event) => {
            if (event.key === 'Enter') {
              this.onButtonClick();
            }
          }}
        >
          <input />
          <Button
            primary
            onClick={this.onButtonClick}
            className="AddTodo__Button"
          >
            Add Todo
          </Button>
        </Input>
      </div>
    );
  }
}

AddTodo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddTodo);
