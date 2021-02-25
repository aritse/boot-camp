import Wrapper from './components/Wrapper';
import Title from './components/Title';
import FriendCard from './components/FriendCard';
import friends from './friends.json';

export default function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(f => <FriendCard key={f.id} name={f.name} image={f.image} occupation={f.occupation} location={f.location} ></FriendCard>)}
    </Wrapper>
  )
}