const connection = require("../../config/db"); // Importing db.js file to connect database
const util = require('util');
const exec = util.promisify(require('child_process').exec); // For excute terminal commands
const fs = require('fs')
const dateTime = require('node-datetime');

// Getting all businesses from database
const getAllBusinesses = async (admin_id, role) => {
    try {
        let [rows, fields] = [];
        if (role == 1) {
            [rows, fields] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'users.*, ' + process.env.DB_PREFIX + 'users.id AS business_id,' + process.env.DB_PREFIX + 'packages.* FROM ' + process.env.DB_PREFIX + 'users LEFT JOIN ' + process.env.DB_PREFIX + 'packages ON ' + process.env.DB_PREFIX + 'users.package_id=' + process.env.DB_PREFIX + 'packages.id');
        } else {
            [rows, fields] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'users.*, ' + process.env.DB_PREFIX + 'users.id AS business_id,' + process.env.DB_PREFIX + 'packages.* FROM ' + process.env.DB_PREFIX + 'users LEFT JOIN ' + process.env.DB_PREFIX + 'packages ON ' + process.env.DB_PREFIX + 'users.package_id =' + process.env.DB_PREFIX + 'packages.id WHERE ' + process.env.DB_PREFIX + 'users.admin_id = ' + admin_id);
        }
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find any businesses.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Getting particular business from database by its id
const getBusinessByid = async (businessid) => {
    try {
        const [rows, fields] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'users.*, ' + process.env.DB_PREFIX + 'users.id AS business_id,' + process.env.DB_PREFIX + 'packages.* FROM ' + process.env.DB_PREFIX + 'users LEFT JOIN ' + process.env.DB_PREFIX + 'packages ON ' + process.env.DB_PREFIX + 'users.package_id=' + process.env.DB_PREFIX + 'packages.id WHERE ' + process.env.DB_PREFIX + 'users.id = ' + businessid);
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find business with the id '${businessid}'.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Deactivate business by setting is_deleted = 1  
const deactiveBusiness = async (businessid) => {
    try {
        const [idForUpdate, fields] = await connection.promCon.execute('SELECT id FROM ' + process.env.DB_PREFIX + 'users WHERE id = ' + businessid);
        if (idForUpdate.length == 0) {
            throw {
                status: 400,
                message: `Can't find business with the id '${businessid}'.`,
            }
        }
        const updated_result = await connection.promCon.execute('UPDATE ' + process.env.DB_PREFIX + 'users SET is_active = 1 WHERE id = ' + businessid);
        return updated_result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const activeBusiness = async (businessid) => {
    try {
        const [idForUpdate, fields] = await connection.promCon.execute('SELECT id FROM ' + process.env.DB_PREFIX + 'users WHERE id = ' + businessid);
        if (idForUpdate.length == 0) {
            throw {
                status: 400,
                message: `Can't find business with the id '${businessid}'.`,
            }
        }
        const updated_result = await connection.promCon.execute('UPDATE ' + process.env.DB_PREFIX + 'users SET is_active = 0 WHERE id = ' + businessid);
        return updated_result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Adding new account manager  
const addNewBusiness = async (dataToInsert) => {
    try {
        // Checking business with same email
        const [emailForAdd, fields] = await connection.promCon.execute('SELECT email FROM ' + process.env.DB_PREFIX + 'users WHERE email = ?', [dataToInsert.email]);
        if (emailForAdd.length > 0) {
            throw { status: 400, message: `Business already exists with the email '${dataToInsert.email}'.` };
        }
        // Setting data to insert in fts_staff table in master and business's database
        const dataToInsertStaff = {
            email: dataToInsert.email
        }
        // Adding business data in to master table
        const added_business = await connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}users SET ?`, [dataToInsert], async (error, result) => {
            if (error) throw { status: error?.status || 500, message: error?.message || error }
        });
        // Adding data into fts_staff table in master database
        const dataToInsertStaffMaster = {
            ...dataToInsertStaff,
            user_id: added_business[0].insertId,
            created_date: dataToInsert.created_date,
            modification_date: dataToInsert.modification_date
        }
        const added_staff_master = await connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}staff SET ?`, [dataToInsertStaffMaster], async (error, result) => {
            if (error) throw { status: error?.status || 500, message: error?.message || error }
        });

        // Creating new database for new business
        await connection.promCon.execute('CREATE DATABASE ' + dataToInsert.db_name)
        const dumpFile = fs.realpathSync('dump.sql', []);
        const promise = exec(`mysql -u ${process.env.USER} ${dataToInsert.db_name} < ${dumpFile}`);
        const child = promise.child;

        child.stdout.on('data', function (data) {
            console.log('stdout: ' + data);
        });
        child.stderr.on('data', function (data) {
            console.log('stderr: ' + data);
        });
        const close_exec = child.on('close', async (code) => {
            console.log('closing code: ' + code);
        })

        // i.e. can then await for promisified exec call to complete
        const { stdout, stderr } = await promise;

        // Changing database to newly added business's database to insert data in fts_staff table of business's database
        const changedConnection = await connection.changeDatabase(dataToInsert.db_name);
        const subData = {
            ...dataToInsertStaff,
            password: dataToInsert.db_password,
            role: 2,
            active: 1,
            datecreated: dataToInsert.created_date
        }
        const staff_data = await connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}staff SET ?`, [subData], (error, result) => {
            if (error) throw { status: error?.status || 500, message: error?.message || error }
        });
        // Changing database to master
        const changedConnectionToMaster = await connection.changeDatabase(process.env.DATABASE);
        return staff_data;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const getAllPackages = async () => {
    try {
        const [rows, fields] = await connection.promCon.execute('SELECT * FROM ' + process.env.DB_PREFIX + 'packages WHERE hidden = 0');
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find any Package.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const revenue = async (admin_id, role) => {
    try {
        let [rows, feilds] = [];
        if (role == 1) {
            [rows, feilds] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'payment.*, ' + process.env.DB_PREFIX + 'admins.name, ' + process.env.DB_PREFIX + 'users.business_name FROM ' + process.env.DB_PREFIX + 'users, ' + process.env.DB_PREFIX + 'payment, ' + process.env.DB_PREFIX + 'admins WHERE ' + process.env.DB_PREFIX + 'payment.admin_id = ' + process.env.DB_PREFIX + 'admins.id AND ' + process.env.DB_PREFIX + 'payment.user_id = ' + process.env.DB_PREFIX + 'users.id');
        } else {
            [rows, feilds] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'payment.*, ' + process.env.DB_PREFIX + 'admins.name, ' + process.env.DB_PREFIX + 'users.business_name FROM ' + process.env.DB_PREFIX + 'users, ' + process.env.DB_PREFIX + 'payment, ' + process.env.DB_PREFIX + 'admins WHERE ' + process.env.DB_PREFIX + 'payment.admin_id = ' + process.env.DB_PREFIX + 'admins.id AND ' + process.env.DB_PREFIX + 'payment.user_id = ' + process.env.DB_PREFIX + 'users.id AND ' + process.env.DB_PREFIX + 'payment.admin_id = ' + admin_id);
        }
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find revenue.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

const addPaymentData = async (dataToInsert) => {
    try {
        const added_result = await connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}payment SET ?`, [dataToInsert]);

        const [rows, feilds] = await connection.promCon.execute('SELECT end_date from ' + process.env.DB_PREFIX + 'users WHERE id = ' + dataToInsert.user_id);

        const date = new Date();

        if (rows[0].end_date > date) {
            date.setDate(date.getDate(rows[0].end_date) + dataToInsert.validity)
        } else {
            date.setDate(date.getDate() + dataToInsert.validity)
        }

        const dataToUpdate = {
            end_date: date.toISOString().slice(0, 10),
            package_id: dataToInsert.package_id
        }
       
        const updated_result = await connection.promCon.query(`UPDATE ${process.env.DB_PREFIX}users SET ? WHERE id = ?`, [dataToUpdate, dataToInsert.user_id]);

        const result = {
            updated_result,
            added_result
        }
        return result;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Exporting modules to use in services
module.exports = {
    getAllBusinesses,
    deactiveBusiness,
    getBusinessByid,
    addNewBusiness,
    getAllPackages,
    revenue,
    addPaymentData,
    activeBusiness
};