import List from './components/List';

const items = [
  { id: 1, name: 'carrot', purchased: true},
  { id: 2, name: 'milk', purchased: false},
  { id: 3, name: 'bread', purchased: true},
  { id: 4, name: 'potato', purchased: true},
  { id: 5, name: 'advil', purchased: false},
  { id: 6, name: 'cheese', purchased: false},
  { id: 7, name: 'meat', purchased: true},
];

export default function App() {
  return (
    <List items={items.filter(item => !item.purchased)} />
  )
}