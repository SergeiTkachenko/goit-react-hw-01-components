import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid black;
  border-radius: 5px;
  width: 300px;
  margin: auto;
  padding: 10px;
`;

export const AvatarImg = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  text-align: center;
  margin: 10px;
`;

export const Stats = styled.ul`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const StatsFollowers = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StatsViews = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

export const StatsLikes = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
