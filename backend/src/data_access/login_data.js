const connection = require("../../config/db"); // Importing db.js file to connect database

const Authentication = async (data) => {
    try {
        const [rows, fields] = await connection.promCon.execute('SELECT * FROM ' + process.env.DB_PREFIX + 'admins WHERE email = "' + data.email + '" AND is_active = 0');
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find admin with the email '${data.email}' or your account is deactivated.`,
            }
        }
        return rows;    
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

module.exports = { Authentication };