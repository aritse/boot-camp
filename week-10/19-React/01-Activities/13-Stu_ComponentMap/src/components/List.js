export default function List({items}) {
  return (
    <ul className='list-group'>
      {items.map(({name, id}) => <li key={id} className='list-group-item'>{name}</li>)}
    </ul>
  )
}