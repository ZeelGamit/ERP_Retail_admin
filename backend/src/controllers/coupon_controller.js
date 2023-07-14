const couponServices = require("../services/coupon_service");// Importing service

// Function of get all the coupons
const getAllCoupons = async (req, res) => {
    const admin_id = req.params.admin;
    const role = req.params.role;
    
    try {
        const allCoupons = await couponServices.getAllCoupons(admin_id, role);
        res
        .status(201)
        .send({ status: "OK", data: allCoupons });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of add new coupon
const addNewCoupon = async (req, res) => {
    if (!req.body.coupon_code || !req.body.valid_times || !req.body.valid_days || !req.body.discount_value || req.body.discount_type == null) {
        res
        .status(400)
        .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
    }
    const coupon_data = {
        coupon_code: req.body.coupon_code,
        discount_type: req.body.discount_type,
        discount_value: req.body.discount_value,
        valid_times: req.body.valid_times,
        valid_days: req.body.valid_days,
        admin_id: req.body.admin_id
    }
    try {
        const added_result = await couponServices.addNewCoupon(coupon_data);
        res.status(201).send({ status: "OK", data: added_result });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Exporting modules to use it in coupon_routes file
module.exports = { 
    getAllCoupons,
    addNewCoupon };