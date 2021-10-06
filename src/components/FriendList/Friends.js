import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function Friends({ isOnline, avatar, name, id }) {
  return (
    <li key={id}>
      <span className={s.status}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
Friends.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number,
};
