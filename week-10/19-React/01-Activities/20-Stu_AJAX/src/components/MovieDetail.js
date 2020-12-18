export default function MovieDetail(props) {
  return (
    <div className='text-center'>
      <img src={props.src} alt={props.title} className='img-fluid' style={{margin: '0 auto'}}></img>
      <h3>Director(s): {props.director}</h3>
      <h3>Genre: {props.genre}</h3>
      <h3>Released: {props.released}</h3>
    </div>
  )
}