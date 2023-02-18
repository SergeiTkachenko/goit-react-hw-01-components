import styled from 'styled-components';

export const OnlineStatus = styled.span`
  display: flex;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;
