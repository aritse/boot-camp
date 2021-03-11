import { useState } from 'react';
import './style.css';

export default function FormFunctionComponent() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    password: '',
  });

  const onChange = ({ target }) => {
    const { name, value } = target;
    setUser({ ...user, [name]: value });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (user.firstName && user.lastName) {
      if (user.password.length < 6) {
        alert(`Choose a longer password, ${user.firstName} ${user.lastName}`);
      } else {
        alert(`Welcome, ${user.firstName} ${user.lastName}`);
        setUser({
          firstName: '',
          lastName: '',
          password: '',
        });
      }
    } else {
      alert('Enter both first and last name');
    }
  };

  return (
    <div>
      <p>Hello {user.firstName} {user.lastName}</p>
      <form onSubmit={onFormSubmit} className='form'>
        <input type='text' name='firstName' placeholder='First Name' value={user.firstName} onChange={onChange}></input>
        <input type='text' name='lastName' placeholder='Last Name' value={user.lastName} onChange={onChange}></input>
        <input type='password' name='password' placeholder='Password' value={user.password} onChange={onChange}></input>
        <button>Submit</button>
      </form>
    </div>
  )
}