import { Component } from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from './App.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <SectionTitle>
        {title}
        {children}
      </SectionTitle>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};