import styled from 'styled-components';

export const StatisticsList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  width: 300px;
  margin: 20px auto 20px auto;
  padding: 10px;
`;

export const UploadStats = styled.ul`
  gap: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const UploadItem = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
