import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './UserData.json';
import friends from './friends.json';
import transactions from './transactions.json';

const { username, tag, location, avatar, stats } = userData;

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      
              <FriendList friends={friends} />
              
              <TransactionHistory items={transactions} />
    </>
  );
};


export default App
