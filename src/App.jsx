import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userData from './UserData.json';
import friends from './friends.json';
import transactions from './transactions.json';
import { RefExample } from './components/RefExample/RefExample';
import { useRef } from 'react';
import Player from './components/RefExample/Player';
import MeasureDiv from './components/RefExample/MeasureDiv';
import ScrollDiv from './components/RefExample/ScrollDiv';
import Forms from './components/Forms/Forms';

const { username, tag, location, avatar, stats } = userData;
// const videoSrc = 'http://media.w3.org/2010/05/sintel/trailer.mp4';

const App = () => {
  return (
    <>
      <h2>Different type of forms</h2>
      <Forms />

      <h2>Scroll Div Example (ref)</h2>
      <ScrollDiv />

      <h2>Measure Div Example (ref)</h2>
      <MeasureDiv />

      <h2>RefExample</h2>
      <RefExample />

      {/* <h2>Ref with Player Example</h2>
      <Player videoSrc={videoSrc} /> */}

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

export default App;
