import PropTypes from 'prop-types';
import { StatisticsList, UploadStats, UploadItem } from './Statistics.styled';
import { getRandomColorExceptBlack } from '../../utils/getRandomColorExceptBlack';

export const Statistics = ({ title, statistics }) => {
  return (
    <StatisticsList>
      {title && <h2>{title}</h2>}

      <UploadStats>
        {statistics.map(statistic => {
          return (
            <UploadItem
              key={statistic.id}
              style={{ backgroundColor: getRandomColorExceptBlack() }}
            >
              <span>{statistic.label}</span>
              <span>{statistic.percentage}</span>
            </UploadItem>
          );
        })}
      </UploadStats>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
