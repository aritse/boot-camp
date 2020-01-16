const conn = require("../config/connection.js");

const orm = {
  selectWhere: (table, column, value, cb) => {
    const query = "SELECT * FROM ?? WHERE ?? = ?";
    conn.query(query, [table, column, value], (err, result) => {
      if (err) throw err;
      cb(result);
    });
  }
};

module.exports = orm;
