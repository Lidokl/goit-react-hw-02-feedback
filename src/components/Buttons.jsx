import { Component } from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './App.styled';

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonList>
        {Object.keys(options).map(btn => {
          return (
            <li key={btn}>
              <Button type="button" onClick={onLeaveFeedback}>
                {btn}
              </Button>
            </li>
          );
        })}
      </ButtonList>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};