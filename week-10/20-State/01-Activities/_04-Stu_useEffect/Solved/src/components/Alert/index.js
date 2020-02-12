import React from "react";

<<<<<<< HEAD
const Alert = props => {
=======
function Alert(props) {
>>>>>>> upstream/master
  return (
    <div
      role="alert"
      className={`alert alert-${props.type} fade in`}
      style={{ width: "80%", margin: "0 auto", marginTop: 18, ...props.style }}
    >
      {props.children}
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> upstream/master

export default Alert;
