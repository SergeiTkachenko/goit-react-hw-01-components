import PropTypes from 'prop-types';
import {
  ProfileContainer,
  AvatarImg,
  Description,
  Stats,
  StatsFollowers,
  StatsViews,
  StatsLikes,
} from './Profile.styled';

export const Profile = ({
  userInfo: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContainer key={username}>
      <Description>
        <AvatarImg src={avatar} alt={username} />
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsFollowers>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsFollowers>
        <StatsViews>
          <span>Views</span>
          <span>{views}</span>
        </StatsViews>
        <StatsLikes>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsLikes>
      </Stats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};
