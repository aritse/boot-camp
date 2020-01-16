const conn = require("./connection.js");
const orm = {
  selectAll: function(tableInput, colToSelect) {
    const query = "SELECT ?? FROM ??";
    conn.query(query, [colToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(colName, table, val) {
    conn.query("SELECT * FROM ?? WHERE ??=?", [colToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectAndOrder: function(whatToSelect, table, orderCol) {
    const query = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    console.log(query);
    conn.query(query, [whatToSelect, table, orderCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findWhoHasMost: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
    const query = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";

    conn.query(query, [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
