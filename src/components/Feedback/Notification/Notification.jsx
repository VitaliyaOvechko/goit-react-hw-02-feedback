import PropTypes from 'prop-types';
import { NotificationTitle } from './Notification.styled';

export const Notification = ({ message }) => {
  return <NotificationTitle>{message}</NotificationTitle>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
