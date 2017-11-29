
var connection;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    connection = mysql.createConnection({
        root: 3306,
        host: "icopoghru9oezxh8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: " w5n14694us8zw5c5",
        password: "bcgyo69nqbgi7kj0",
        database: "z59dazvrnh8fjswv",
    });
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for the ORM to use.
module.exports = connection;