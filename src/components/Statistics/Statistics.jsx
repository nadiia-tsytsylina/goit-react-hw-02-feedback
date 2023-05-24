import PropTypes from 'prop-types';
import { Label, Value } from './Statistics.styled';

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <div>
      <Label>
        Good: <Value>{good}</Value>
      </Label>
      <Label>
        Neutral: <Value>{neutral}</Value>
      </Label>
      <Label>
        Bad: <Value>{bad}</Value>
      </Label>
      <Label>
        Total: <Value>{total}</Value>
      </Label>
      <Label>
        Positive feedbacks: <Value>{percentage}%</Value>
      </Label>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};
