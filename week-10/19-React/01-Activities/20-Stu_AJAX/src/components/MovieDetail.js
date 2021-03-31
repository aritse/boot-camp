export default function MovieDetail({ src, title, actors, director, genre, year }) {
  return (
    <>
      <img
        src={src}
        alt={title}
        className='img-fluid'
        style={{ margin: '0 auto' }}
      />
      <h3>Actors: {actors}</h3>
      <h3>Director: {director}</h3>
      <h3>Genre: {genre}</h3>
      <h3>Year: {year}</h3>
    </>
  )
};