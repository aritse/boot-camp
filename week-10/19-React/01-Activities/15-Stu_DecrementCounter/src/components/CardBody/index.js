export default function CardBody({count, incrementCount, decrementCount}) {
  return (
    <div className='card-body'>
      <p className='card-text'>Count: {count}</p>
      <button className='btn btn-primary' onClick={incrementCount}>Increment</button>
      <button className='btn btn-secondary' onClick={decrementCount}>Decrement</button>
    </div>
  )
}