import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import userData from './UserData.json';
import friends from './friends.json';

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
    </>
  );
};


export default App
