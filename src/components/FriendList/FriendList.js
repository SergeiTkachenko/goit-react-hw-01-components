import PropTypes from 'prop-types';
import { FriendItem } from './FriendsList.styled';
import { FriendListItem } from '../FriendListItem/FriendListItem';

export const FriendList = ({ friendList }) => {
  return (
    <FriendItem>
      {friendList.map(({ id, avatar, name, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </FriendItem>
  );
};

FriendList.propTypes = {
  friendList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
