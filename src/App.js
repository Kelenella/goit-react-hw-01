import './index.css';
import data from './json/user.json';
import Profile from './components/profile/Profile';

import statData from './json/statistical-data.json';
import StatisticsList from './components/statisticsList/StatisticsList';

import friendsData from './json/friends.json';
import FriendList from './components/FriendList/FriendList';

import transactions from './json/transactions.json';
import TransactionHistory from './components/Transactions/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        name={data.name}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />

      <StatisticsList title="Upload stats" stats={statData} />
      <StatisticsList stats={statData} />

      <FriendList items={friendsData} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
