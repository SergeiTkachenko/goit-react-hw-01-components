import { Profile } from './Profile';
import userInfo from '../data/user.json';
import { Statistics } from './Statistics';
import statistics from '../data/data.json';
import { FriendList } from './FriendList';
import friendList from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile userInfo={userInfo} />
      <Statistics statistics={statistics} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
