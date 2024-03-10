import Profile from './components/Profile/Profile';
import userData from './UserData.json'
import './App.css'

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
    </>
  );
};


export default App
