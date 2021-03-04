import { useState } from 'react';
import json from './friends.json';
import Wrapper from './components/Wrapper';
import FriendCard from './components/FriendCard';
import './App.css';

export default function App() {
  const [friends, setFriends] = useState(json);
  const unfriendAction = (id) => {
    setFriends(friends.filter(f => f.id !== Number(id)));
  }

  
  return (
    <Wrapper>
      <h1 className='title'>Friends List</h1>
      {
        friends.map(f => <FriendCard
          key={f.id}
          id={f.id}
          name={f.name}
          image={f.image}
          occupation={f.occupation}
          location={f.location}
          unfriendAction={unfriendAction}
          />)
      }
    </Wrapper>
  )
}