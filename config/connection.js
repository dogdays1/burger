
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection({
    
    host: process.env.JAWSDB_URL,
    port: 3306,
    user: "v2wkns2bfz9x0xrm",
    password: "uh7o7f9mpk4hikof",
    database: "h05m0vklufv1d91x",
    });
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burgers_db"
  });
};
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;