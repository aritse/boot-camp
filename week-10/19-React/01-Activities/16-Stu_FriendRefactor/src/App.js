import { useState } from "react";
import json from "./friends.json";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import "./App.css";

export default function App() {
  const [friends, setFriends] = useState(json);
  const handleClick = id => setFriends(friends.filter(f => f.id !== parseInt(id)));

  return (
    <Wrapper>
      <h1 className="title">Friends List</h1>
      {friends.map((f, key) => (
        <FriendCard key={key}
          id={f.id}
          name={f.name}
          image={f.image}
          occupation={f.occupation}
          location={f.location}
          handleClick={handleClick}/>
      ))}
    </Wrapper>
  )
}