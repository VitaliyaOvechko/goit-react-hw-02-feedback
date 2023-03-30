import PropTypes from 'prop-types';
import { List, ListItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <List>
      {options.map(option => (
        <ListItem key={option}>
          <Button type="button" value={option} onClick={onLeaveFeedback}>
            {option[0].toUpperCase() + option.slice(1)}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
