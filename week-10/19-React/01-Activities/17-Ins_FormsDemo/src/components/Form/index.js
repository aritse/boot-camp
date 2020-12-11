import { useState } from "react";
import "./style.css";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onClickHandler = event => {
    event.preventDefault();
    alert(`Hello, ${firstName} ${lastName}`);
    setFirstName(firstName);
    setLastName(lastName);
  };

  return (
    <form>
      <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value) } />
      <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value) } />
      <button onClick={onClickHandler}>Submit</button>
    </form>
  );
}