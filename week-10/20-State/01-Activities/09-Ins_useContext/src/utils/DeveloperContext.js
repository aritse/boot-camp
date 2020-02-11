import React from "react";

const DeveloperContext = React.createContext({
  search: "",
  title: "",
  desciption: "",
  url: ""
});

export default DeveloperContext;
