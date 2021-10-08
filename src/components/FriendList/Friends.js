import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function Friends({ isOnline, avatar, name, id }) {
  return (
    <li className={s.item} key={id}>
      <span
        className={s.status}
        style={{
          backgroundColor: isOnline ? 'green' : 'red',
        }}
      >
        {isOnline}
      </span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
Friends.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.number,
};
