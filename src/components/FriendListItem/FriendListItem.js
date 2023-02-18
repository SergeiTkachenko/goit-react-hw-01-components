import PropTypes from 'prop-types';
import { OnlineStatus } from './FriendsListItem.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <OnlineStatus isOnline={isOnline}></OnlineStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string,
};
