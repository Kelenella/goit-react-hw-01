import PropTypes from 'prop-types';
import statData from '../../statistical-data.json';
import Statistics from './Statistics';
import s from './StatisticsList.module.css';

const createRandomColor = () => {
  return `rgb(${(Math.random() * 255) << 0}, ${(Math.random() * 255) << 0}, ${
    (Math.random() * 255) << 0
  })`;
};
function StatisticsList({ items }) {
  return (
    <ul className={s.statList}>
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
