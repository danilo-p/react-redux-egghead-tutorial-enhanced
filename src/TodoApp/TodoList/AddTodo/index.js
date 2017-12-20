import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react';
import { addTodo } from 'common/ducks/todos';
import styles from './index.styl';

class AddTodo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onInputChange(event) {
    this.setState({
      inputText: event.target.value,
    });
  }

  onButtonClick() {
    const { inputText } = this.state;
    if (inputText) {
      this.props.dispatch(addTodo(inputText));
      this.setState({
        inputText: '',
      });
    }
  }

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
