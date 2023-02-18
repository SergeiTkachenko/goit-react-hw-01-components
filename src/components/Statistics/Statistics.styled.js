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

// функция сгенерированная GPT AI

export function getRandomColorExceptBlack() {
  let color = generateRandomColor();

  while (isDarkColor(color) || isNearBlack(color)) {
    color = generateRandomColor();
  }

  return color;
}

function generateRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}

function isDarkColor(color) {
  const rgb = extractRGB(color);
  const brightness = (299 * rgb.r + 587 * rgb.g + 114 * rgb.b) / 1000;
  return brightness < 128;
}

function isNearBlack(color) {
  const rgb = extractRGB(color);
  const distance = Math.sqrt(
    Math.pow(rgb.r, 2) + Math.pow(rgb.g, 2) + Math.pow(rgb.b, 2)
  );
  return distance < 80;
}

function extractRGB(color) {
  const regex = /rgb\((\d+), (\d+), (\d+)\)/;
  const match = color.match(regex);
  if (!match) {
    throw new Error('Invalid color format');
  }
  const r = Number(match[1]);
  const g = Number(match[2]);
  const b = Number(match[3]);
  return { r, g, b };
}

export const UploadItem = styled.li`
  width: 80px;
  height: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
