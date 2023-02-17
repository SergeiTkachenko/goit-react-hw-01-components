export const FriendList = ({ friendList }) => {
  return (
    <ul class="friend-list">
      {friendList.map(friend => {
        return (
          <li class="item">
            <span class="status"></span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
