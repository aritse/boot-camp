import friends from "./friends.json";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";

export default function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map((f, i) => <FriendCard key={i} name={f.name} image={f.image} occupation={f.occupation} location={f.location} />)}
    </Wrapper>
  );
}