const mysql = require('mysql2'); // Importing mysql package

const connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'empdb',
});

connection.connect(function(err) {
if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
}
console.log('Connected as id ' + connection.threadId);
})

module.exports = connection;