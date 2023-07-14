const couponData = require("../data_access/coupon_data"); // Importing data_access layer
const dateTime = require('node-datetime');

// Get all coupons from database by data_access files
const getAllCoupons = async (admin_id, role) => {
    try {
        const allCoupons = await couponData.getAllCoupons(admin_id, role);
        return allCoupons;    
    } catch (error) {
        throw error;
    }
}

// Adding new coupon  
const addNewCoupon = async (coupon_data) => {
    const dt = dateTime.create();
    const dataToInsert = {
        ...coupon_data,
        created_date: dt.format('Y-m-d H:M:S'),
    }
    try {
        const createdCoupon = await couponData.addNewCoupon(dataToInsert);
        return createdCoupon;
    } catch (error) {
        throw error;
    }
}

// Exporting modules to use in controller
module.exports = { 
    getAllCoupons,
    addNewCoupon };