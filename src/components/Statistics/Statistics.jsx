import PropTypes from 'prop-types';
import { StatisticsList, StatisticsListItem } from './Statistic.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  
  return (
    <StatisticsList>
      <StatisticsListItem>Good: {good}</StatisticsListItem>
      <StatisticsListItem>Neutral: {neutral}</StatisticsListItem>
      <StatisticsListItem>Bad: {bad}</StatisticsListItem>
      <StatisticsListItem>Total: {total}</StatisticsListItem>
      <StatisticsListItem>
        Positive feedback: {positivePercentage}%
      </StatisticsListItem>
    </StatisticsList>
  );
}


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  // If we don't have feedback yet, function result is NaN - use witch function witchout Math.round
  // positivePercentage: PropTypes.oneOfType([
  //   PropTypes.number.isRequired,
  //   PropTypes.string.isRequired
  // ]),
};