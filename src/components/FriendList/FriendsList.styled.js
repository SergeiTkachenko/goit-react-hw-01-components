import styled from 'styled-components';

export const FriendItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: auto;
  margin: 20px auto 20px auto;
`;

export const OnlineStatus = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
