const mysql = require('mysql2'); // Importing mysql package
const bluebird = require('bluebird');

// Connection to mysql
var connection = mysql.createConnection({
    host     : process.env.HOST,
    user     : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE,
    Promise: bluebird
});

connection.connect(function(err) {
if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
}
console.log('Connected as id ' + connection.threadId);
})

const changeDatabase = async (db) => {
    const result = connection.changeUser({database : db}, function(err) { 
        if (err) throw err;
        return true; 
      });
      return result;
}

const promCon = connection.promise(); 
// Exporting module to use it whenever database required(mostly used in data_access files)
module.exports = {
    promCon,
    changeDatabase
}