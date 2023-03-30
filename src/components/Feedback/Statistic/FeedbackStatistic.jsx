import PropTypes from 'prop-types';
import {
  StatisticList,
  StatisticListItem,
  StatisticText,
} from './FeedbackStatistic.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticList>
      <StatisticListItem>
        <StatisticText>
          <b>Good:</b> {good}
        </StatisticText>
      </StatisticListItem>
      <StatisticListItem>
        <StatisticText>
          <b>Neutral:</b> {neutral}
        </StatisticText>
      </StatisticListItem>
      <StatisticListItem>
        <StatisticText>
          <b>Bad:</b> {bad}
        </StatisticText>
      </StatisticListItem>
      <StatisticListItem>
        <StatisticText>
          <b>Total:</b> {total()}
        </StatisticText>
      </StatisticListItem>
      <StatisticListItem>
        <StatisticText>
          <b>Positive feedback:</b> {positivePercentage()}%
        </StatisticText>
      </StatisticListItem>
    </StatisticList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
