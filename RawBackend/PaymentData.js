const connection = require("./db"); // Importing db.js file to connect database
 
// Getting all account managers from database
const getAllPayments = async () => {
    try {
        const [rows, fields] = await connection.execute('SELECT * FROM tansactiontb');
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find any transaction.`,
            }
        }
        console.log(rows)
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Adding new account manager  
const addPayment = async (dataToInsert) => {
    try {
        const [IdForAdd, fields] = await connection.execute('SELECT TransferId FROM tansactiontb WHERE TansferId = ?', [dataToInsert.TansferId]);
        if (IdForAdd.length > 0) {
            throw {
                status: 400,
                message: `Invalid Transaction!`,
            }
        }
        // const added_result = await connection.execute('INSERT INTO ' + `${process.env.DB_PREFIX}admins` + ' VALUES ?', [dataToInsert]);
        const added_result = connection.query(`INSERT INTO tansactiontb SET ?`, [dataToInsert], (error, result) => {
            if(error) throw { status: error?.status || 500, message: error?.message || error }
            return result;
        });
        return added_result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Exporting modules to use in services
module.exports = { 
    getAllPayments,
    addPayment,
 };