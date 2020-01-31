const conn = require("./connection.js");
const orm = {
  selectAll: function(tableInput, colToSelect) {
    const query = "SELECT ?? FROM ??";
    conn.query(query, [colToSelect, tableInput], function(err, records) {
      if (err) throw err;
      records.forEach(record => {
        console.log(record.party_name);
      });
    });
  },

  selectWhere: function(cols, table, val) {
    conn.query("SELECT ?? FROM ?? WHERE ??=?", [cols, table, val], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  selectAndOrder: function(cols, table, order) {
    const query = "SELECT ?? FROM ?? ORDER BY ?? DESC";
    conn.query(query, [cols, table, order], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },

  findWhoHasMost: function(col, tableTwoForeignKey, tableOne, tableTwo) {
    const query = "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? \
    ORDER BY count DESC LIMIT 1";

    conn.query(query, [col, col, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, col], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;
