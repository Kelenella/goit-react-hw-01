import PropTypes from 'prop-types';
import friendsData from '../../friends.json';
import Friends from './Friends';

export default function FriendList(items) {
  return (
    <ul className="friend-list">
      {friendsData.map(item => (
        <li key={item.id}>
          <Friends
            id={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        </li>
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
