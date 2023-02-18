import PropTypes from 'prop-types';
import { FriendItemList, OnlineStatus } from './FriendsList.styled';

export const FriendList = ({ friendList }) => {
  return (
    <FriendItemList>
      {friendList.map(friend => {
        return (
          <li key={friend.id}>
            <OnlineStatus isOnline={friend.isOnline}></OnlineStatus>
            <img src={friend.avatar} alt="User avatar" width="48" />
            <p>{friend.name}</p>
          </li>
        );
      })}
    </FriendItemList>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
