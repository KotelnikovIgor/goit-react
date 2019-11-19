import React from 'react';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './components/Profile/user.json';
import statisticalData from './components/Statistics/statistics-data';
import friends from './components/FriendList/friendList.json';
import transactions from './components/TransactionHistory/transactions.json';

const App = () => (
  <>
    <Profile user={user} />
    <Statistics title="Upload Stats" stats={statisticalData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
);

export default App;
