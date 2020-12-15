import {useState} from "react";
import "./style.css";

export default function FormFunctional() {
  const [user, setUser] = useState({firstName: "", lastName: "", password: ""});

  const onChange = ({target}) => {
    const {name, value} = target;
    setUser({...user, [name]: value});
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (user.firstName && user.lastName) {
      if (user.password.length < 6) {
        alert(`Choose longer password, ${user.firstName} ${user.lastName}`);
      } else {
        alert(`Welcome, ${user.firstName} ${user.lastName}`);
        setUser({firstName: "", lastName: "", password: ""});
      }
    } else {
      alert("Enter both first and last names");
    }
  };

  return (
    <div>
      <p>Hello {user.firstName} {user.lastName}</p>
      <form onSubmit={onSubmit} className="form">
        <input value={user.firstName} type="text" placeholder="First Name" onChange={onChange} name="firstName" />
        <input value={user.lastName} type="text" placeholder="Last Name" onChange={onChange} name="lastName" />
        <input value={user.password} type="password" placeholder="Password" onChange={onChange} name="password" />
        <button>Submit</button>
      </form>
    </div>
  );
}