import { Component } from 'react';
import PropTypes from 'prop-types';
import { Msg } from './App.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;
    return <Msg>{message}</Msg>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};
