import { Profile } from './Profile/Profile';
import userInfo from '../data/user.json';
import { Statistics } from './Statistics/Statistics';
import statistics from '../data/data.json';
import { FriendList } from './FriendList/FriendList';
import friendList from '../data/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions.json';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <Profile userInfo={userInfo} />
      <Statistics title="Upload stats" statistics={statistics} />
      <FriendList friendList={friendList} />
      <TransactionHistory transactions={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
