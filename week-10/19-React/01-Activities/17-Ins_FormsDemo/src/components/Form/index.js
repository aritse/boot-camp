import { useState } from 'react';
import './style.css';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onButtonClick = (event) => {
    event.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    setFirstName('');
    setLastName('');
  }

  return (
    <form>
      <input type='text' name='firstName' placeholder='First name' value={firstName} onChange={e => setFirstName(e.target.value)}></input>
      <input type='text' name='lastName' placeholder='Last name' value={lastName} onChange={e => setLastName(e.target.value)}></input>
      <button onClick={onButtonClick}>Submit</button>
    </form>
  )
}