import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <li>
        <p>
          <b>Good:</b> {good}
        </p>
      </li>
      <li>
        <p>
          <b>Neutral:</b> {neutral}
        </p>
      </li>
      <li>
        <p>
          <b>Bad:</b> {bad}
        </p>
      </li>
      <li>
        <p>
          <b>Total:</b> {total()}
        </p>
      </li>
      <li>
        <p>
          <b>Positive feedback:</b> {positivePercentage()}%
        </p>
      </li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};
