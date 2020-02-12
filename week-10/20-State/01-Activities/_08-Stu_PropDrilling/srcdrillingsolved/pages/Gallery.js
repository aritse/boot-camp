import React, { useState,useEffect } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {
  const [userIndex, setUserIndex] = useState(0);
  const [users, setUsers] = useState([{}]);
  const [user, setUser] = useState({});

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);

  useEffect(()=>{
    setUser(users[userIndex])
  },[userIndex])

  // Ensure that the user index stays within our range of users
  function nextUser() {
    const nextIdx = (userIndex+1)%users.length;
    setUserIndex(nextIdx);
    // setUser(users[nextIdx]);
  }

  // Ensure that the user index stays within our range of users
  function previousUser() {
    const prevUser = userIndex===0? users.length-1: userIndex-1;
    setUserIndex(prevUser);
    // setUser(users[prevUser])
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      nextUser();
    } else {
      previousUser();
    }
  }

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then(users => {
          setUsers(users);
          setUser(users[0]);
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <h3 className="text-center">Click on the arrows to browse users</h3>
      <Row>
        <CardContainer title={user.login} image={user.image} language={user.language} handleClick = {handleBtnClick}/>
      </Row>
    </div>
  );
}

export default Gallery;
