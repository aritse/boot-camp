export default function Card({ heading, children }) {
  return (
    <div className='card text-center'>
      <div className='card-header'>
        <h2>{heading}</h2>
      </div>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}