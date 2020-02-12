import React from "react";
import CardContext from "../../utils/CardContext";

<<<<<<< HEAD
const CardTitleText = () => {
  return <CardContext.Consumer>{({ title }) => <h2>{title}</h2>}</CardContext.Consumer>;
};
=======
function CardTitleText() {
  return <CardContext.Consumer>{({ title }) => <h2>{title}</h2>}</CardContext.Consumer>;
}
>>>>>>> upstream/master

export default CardTitleText;
