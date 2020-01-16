const orm = require("./config/orm");
orm.selectAll("parties", "party_name");
orm.selectAll("clients", "client_name");
orm.selectWhere("*", "parties", "party_type", "grown-up");
