import './index.css';
import data from './user.json';
import Profile from './components/profile/Profile';

import statData from './statistical-data.json';
import StatisticsList from './components/statistics/StatisticsList';

import friendsData from './friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

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

      <StatisticsList title="Upload stats" stats={statData} />
      <StatisticsList stats={statData} />

      <FriendList items={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
