export default function ResultList(props) {
  return (
    <ul className="list-group">
      {
        props.result.map(item =>
          <li className="list-group-name" key={item.id}>
            <img
              className="img-fluid"
              src={item.images.original.url}
              alt={item.title}/>
          </li>)
      }
    </ul>
  )
}