import {Link} from 'react-router-dom';

export default function Contact(props) {
  return (
    <>
      <h1>Contact Page</h1>
      <Link to={`${props.match.url}/learn`} role="button" className='btn btn-link'>Learn more</Link>
    </>
  )
}