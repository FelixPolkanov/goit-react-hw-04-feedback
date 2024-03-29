import PropTypes from 'prop-types';
import {
  NotificationWrapper,
  NotificationMessage,
} from './Notification.styled';



export function Notification({ message }) {
  <NotificationWrapper>
  <NotificationMessage>{message}</NotificationMessage>
</NotificationWrapper>
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
