import { Component } from 'react';
import PropTypes from 'prop-types';
import { StatListItem } from './App.styled';
import { Notification } from './Notification';

export class Statistics extends Component {
  render() {
    const { total, positivePercentage, stats } = this.props;

    return (
      <>
        {total ? (
          <ul>
            {Object.keys(stats).map((label, i) => {
              return (
                <StatListItem key={label}>
                  {label}: {Object.values(stats)[i]}
                </StatListItem>
              );
            })}
            <StatListItem>Total: {total}</StatListItem>
            {positivePercentage && (
              <StatListItem>
                Positive feedback: {positivePercentage}%
              </StatListItem>
            )}
          </ul>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  stats: PropTypes.object.isRequired,
};