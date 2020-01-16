const orm = require("./config/orm.js");

const data = orm.selectWhere("parties", "party_type", "grown-up", result => {
  const data = result;
  console.log(data);
});
