import data from './user.json';
import User from './components/user';

export default function App() {
  return (
    <div>
      <User
        name={data.name}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        alt={data.name}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
    </div>
  );
}
