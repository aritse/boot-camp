import './style.css';

export default function FriendCard(props) {
  const onClickHandle = ({target: {id}}) => {
    props.unfriendAction(id);
  }

  return (
    <div className='card'>
      <div className='img-container'>
        <img src={props.image} alt={props.name}></img>
      </div>
      <div className='content'>
        <ul>
          <li><strong>Name: </strong>{props.name}</li>
          <li><strong>Location: </strong>{props.location}</li>
          <li><strong>Occupation: </strong>{props.occupation}</li>
        </ul>
      </div>
      <span className='remove' id={props.id} onClick={onClickHandle}>X</span>
    </div>
  )
}