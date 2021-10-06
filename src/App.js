import data from './user.json';
import Profile from './components/profile/Profile';

import statData from './statistical-data.json';
import StatisticsList from './components/statistics/StatisticsList';
import Section from './components/section/Section';

import friendsData from './friends.json';
import FriendList from './components/FriendList/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        key={data.tag}
        name={data.name}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        alt={data.name}
        followers={data.stats.followers}
        views={data.stats.views}
        likes={data.stats.likes}
      />
      <Section title="Upload stats" stats={statData}>
        <StatisticsList items={statData} />
      </Section>
      <FriendList items={friendsData} />
    </div>
  );
}
