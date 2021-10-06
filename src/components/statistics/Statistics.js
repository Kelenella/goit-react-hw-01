import PropTypes from 'prop-types';
import s from './StatisticsList.module.css';

export default function Statistics(props) {
  const { label, percentage } = props;
  return (
    <div>
      <span className={s.label}>{label} </span>
      <span className={s.percentage}>{percentage} %</span>
    </div>
  );
}
Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
