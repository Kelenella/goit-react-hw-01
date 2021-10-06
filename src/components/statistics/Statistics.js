import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { label, percentage } = props;
  return (
    <div>
      <span className="label">{label} </span>
      <span className="percentage">{percentage} %</span>
    </div>
  );
}
Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
