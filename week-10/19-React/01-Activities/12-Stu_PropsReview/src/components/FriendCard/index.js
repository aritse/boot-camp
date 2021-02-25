import './style.css';

const FriendCard = ({image, name, location, occupation}) => {
    return (
        <div className='card'>
            <div className='img-container'>
                <img src={image} alt={name}></img>
            </div>
            <div className='content'>
                <ul>
                    <li><strong>Name: </strong>{name}</li>
                    <li><strong>Location: </strong>{location}</li>
                    <li><strong>Occupation: </strong>{occupation}</li>
                </ul>
            </div>
        </div>
    )
};

export default FriendCard;
