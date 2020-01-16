const conn = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? sign is for swapping out table or column names.
// The ? sign is for swapping out other values.

// They help avoid SQL injection - https://en.wikipedia.org/wiki/SQL_injection
const orm = {
  selectWhere: (table, column, value) => {
    const query = "SELECT * FROM ?? WHERE ??=?";
    conn.query(query, [table, column, value], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: (columns, table, order) => {
    const query = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    conn.query(query, [columns, table, order], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: (column, table2ForeignKey, table1, table2) => {
    const query = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    conn.query(query, [column, column, table1, table2, table2, table2ForeignKey, table1, column], (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
