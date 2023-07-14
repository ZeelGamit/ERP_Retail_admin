const connection = require("../../config/db"); // Importing db.js file to connect database

// Getting all coupons from database
const getAllCoupons = async (admin_id, role) => {
    try {
        let [rows, fields] = [];
        if (role == 1) {
            [rows, fields] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'coupons.*, ' + process.env.DB_PREFIX + 'coupons.created_date AS c_created_date,' + process.env.DB_PREFIX + 'admins.* FROM ' + process.env.DB_PREFIX + 'coupons LEFT JOIN ' + process.env.DB_PREFIX + 'admins ON ' + process.env.DB_PREFIX + 'coupons.admin_id=' + process.env.DB_PREFIX + 'admins.id');
        } else {
            [rows, fields] = await connection.promCon.execute('SELECT ' + process.env.DB_PREFIX + 'coupons.*, ' + process.env.DB_PREFIX + 'coupons.created_date AS c_created_date,' + process.env.DB_PREFIX + 'admins.* FROM ' + process.env.DB_PREFIX + 'coupons LEFT JOIN ' + process.env.DB_PREFIX + 'admins ON ' + process.env.DB_PREFIX + 'coupons.admin_id=' + process.env.DB_PREFIX + 'admins.id WHERE ' + process.env.DB_PREFIX + 'coupons.admin_id = ' + admin_id);
        }
        
        if (rows.length == 0) {
            throw {
                status: 400,
                message: `Can't find any Coupon.`,
            }
        }
        return rows;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
}

// Adding new coupon  
const addNewCoupon = async (dataToInsert) => {
    try {
        const [codeForAdd, fields] = await connection.promCon.execute('SELECT coupon_code FROM ' + process.env.DB_PREFIX + 'coupons WHERE coupon_code = ?', [dataToInsert.coupon_code]);
        if (codeForAdd.length > 0) {
            throw {
                status: 400,
                message: `Coupon already exists with this coupon code '${dataToInsert.coupon_code}'.`,
            }
        }
        // const added_result = await connection.execute('INSERT INTO ' + `${process.env.DB_PREFIX}admins` + ' VALUES ?', [dataToInsert]);
        const added_result = connection.promCon.query(`INSERT INTO ${process.env.DB_PREFIX}coupons SET ?`, [dataToInsert], (error, result) => {
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
    getAllCoupons,
    addNewCoupon };