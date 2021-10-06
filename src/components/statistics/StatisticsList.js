import PropTypes from 'prop-types';
import statData from '../../statistical-data.json';
import Statistics from './Statistics';

function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {statData.map(item => (
        <li key={item.id}>
          <Statistics
            id={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        </li>
      ))}
    </ul>
  );
}
StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default StatisticsList;
