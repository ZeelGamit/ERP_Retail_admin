const connection = require("../../config/db"); // Importing db.js file to connect database
 
// Getting all account managers from database
const getAllAccountManagers = async () => {
    try {
        const [rows, fields] = await connection.promCon.execute('SELECT * FROM ' + process.env.DB_PREFIX + 'admins WHERE is_deleted = 0');
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find any account manager.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Getting particular account from database by its id
const getAccountManagerByid = async (account_manager_id) => {
    try {
        const [rows, fields] = await connection.promCon.execute('SELECT * FROM ' + process.env.DB_PREFIX + 'admins WHERE id = ' + account_manager_id);
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find account manager with the id '${account_manager_id}'.`,
            }
        }
        return rows;    
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Deactivate account manager by setting is_deleted = 1  
const deactiveAccountManager = async (account_manager_id) => {
    try {
        const [idForUpdate, fields] = await connection.promCon.execute('SELECT id FROM ' + process.env.DB_PREFIX + 'admins WHERE id = ' + account_manager_id);
        if (idForUpdate.length == 0) {
            throw {
                status: 400,
                message: `Can't find account manager with the id '${account_manager_id}'.`,
            }
        }
        const updated_result = await connection.promCon.execute('UPDATE ' + process.env.DB_PREFIX + 'admins SET is_active = 1 WHERE id = ' + account_manager_id);
        return updated_result;    
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Adding new account manager  
const addAccountManager = async (dataToInsert) => {
    try {
        const [emailForAdd, fields] = await connection.promCon.execute('SELECT email FROM ' + process.env.DB_PREFIX + 'admins WHERE email = ?', [dataToInsert.email]);
        if (emailForAdd.length > 0) {
            throw {
                status: 400,
                message: `Account manager already exists with the email '${dataToInsert.email}'.`,
            }
        }
        // const added_result = await connection.execute('INSERT INTO ' + `${process.env.DB_PREFIX}admins` + ' VALUES ?', [dataToInsert]);
        const added_result = connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}admins SET ?`, [dataToInsert], (error, result) => {
            if(error) throw { status: error?.status || 500, message: error?.message || error }
            return result;
        });
        return added_result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Editing new account manager  
const editAccountManager = async (dataToUpdate, id) => {
    try {
        // Getting the data of particular id to check that user updated email or not 
        const [rows, field] = await connection.promCon.execute('SELECT * FROM ' + process.env.DB_PREFIX + 'admins WHERE id = ' + id);
        // If user updated email than checking new email already exists in database or not
        if(!(rows[0].email === dataToUpdate.email)) {
            const [emailForAdd, fields] = await connection.promCon.execute('SELECT email FROM ' + process.env.DB_PREFIX + 'admins WHERE email = ?', [dataToUpdate.email]);
            if (emailForAdd.length > 0) {
                throw {
                    status: 400,
                    message: `Account manager already exists with the email '${dataToUpdate.email}'.`,
                }
            }
        }
        const updated_result = connection.promCon.query(`UPDATE ${process.env.DB_PREFIX}admins SET ? WHERE id = ?`, [dataToUpdate, id], (error, result) => {
            if(error) throw { status: error?.status || 500, message: error?.message || error }
            return result;
        });
        return updated_result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Exporting modules to use in services
module.exports = { 
    getAllAccountManagers,
    getAccountManagerByid,
    deactiveAccountManager,
    addAccountManager,
    editAccountManager };