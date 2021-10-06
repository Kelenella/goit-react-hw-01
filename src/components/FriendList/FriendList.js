import PropTypes from 'prop-types';
import friendsData from '../../friends.json';
import Friends from './Friends';
import s from './FriendList.module.css';

export default function FriendList(items) {
  return (
    <ul className={s.friendList}>
      {friendsData.map(item => (
        <Friends
          key={item.id}
          name={item.name}
          avatar={item.avatar}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};
