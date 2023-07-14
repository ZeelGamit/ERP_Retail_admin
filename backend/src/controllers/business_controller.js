const businessServices = require("../services/business_service"); // Importing services
const bcrypt = require("bcrypt") // Used for password hashing

// Function of get all the registered businesses
const getAllBusinesses = async (req, res) => {
    const admin_id = req.params.admin;
    const role = req.params.role;
    try {
        const allBusinesses = await businessServices.getAllBusinesses(admin_id, role);
        res
            .status(201)
            .send({ status: "OK", data: allBusinesses });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of get the particular businesses data by its id
const getBusinessByid = async (req, res) => {
    const business_id = req.params.id;
    if (!business_id) {
        res
            .status(400)
            .send({ status: "FAILED", data: { error: "Parameter ':business_id' can not be empty" } });
    } try {
        const businessByid = await businessServices.getBusinessByid(business_id);
        res.send({ status: "OK", data: businessByid });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of deactive particular business
const deactiveBusiness = async (req, res) => {
    const business_id = req.params.id;
    if (!business_id) {
        res
            .status(400)
            .send({ status: "FAILED", data: { error: "Parameter ':business_id' can not be empty" } });
    }
    try {
        const updated_result = await businessServices.deactiveBusiness(business_id);
        res.send({ status: "OK", data: updated_result });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const activeBusiness = async (req, res) => {
    const business_id = req.params.id;
    if (!business_id) {
        res
            .status(400)
            .send({ status: "FAILED", data: { error: "Parameter ':business_id' can not be empty" } });
    }
    try {
        const updated_result = await businessServices.activeBusiness(business_id);
        res.send({ status: "OK", data: updated_result });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of add new business
const addNewBusiness = async (req, res) => {
    if (!req.body.business_name || !req.body.email || !req.body.password || !req.body.mobileno || !req.body.your_name || !req.body.city || !req.body.full_address) {
        res
            .status(400)
            .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
    }
    // Encrypt the password of user for security
    const hash_pass = await bcrypt.hash(req.body.password.toString(), 10)
    const business_data = {
        business_name: req.body.business_name,
        email: req.body.email,
        db_password: hash_pass,
        contact_name: req.body.your_name,
        contact_number: req.body.mobileno,
        full_address: req.body.full_address,
        city: req.body.city,
        admin_id: req.body.admin_id,
        package_id: 1
    }
    try {
        const added_result = await businessServices.addNewBusiness(business_data);
        res.status(201).send({ status: "OK", data: added_result });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const getAllPackages = async (req, res) => {
    try {
        const allPackages = await businessServices.getAllPackages();
        res
            .status(201)
            .send({ status: "OK", data: allPackages });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const revenue = async (req, res) => {
    const admin_id = req.params.admin;
    const role = req.params.role;
    try {
        const revenue = await businessServices.revenue(admin_id, role);
        res
            .status(201)
            .send({ status: "OK", data: revenue });
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const razorpay = async (req, res) => {
    try {
        if (!req.body.payment_id || !req.body.amount || !req.body.validity || !req.body.package_id) {
            res
                .status(400)
                .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
        } else {

            const payment_data = {
                payment_id: req.body.payment_id,
                user_id: req.body.user_id,
                admin_id: req.body.admin_id,
                amount: req.body.amount,
                discount: req.body.discount,
                discount_value: req.body.discount_value,
                discount_type: req.body.discount_type,
                coupon_id: req.body.coupon_id,
                validity: req.body.validity,
                package_id: req.body.package_id
            }
            const added_result = await businessServices.addPaymentData(payment_data);
            res.status(201).send({ status: "OK", data: added_result });
        }
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Exporting modules to use it in business_routes file
module.exports = {
    getAllBusinesses,
    deactiveBusiness,
    getBusinessByid,
    addNewBusiness,
    getAllPackages,
    revenue,
    razorpay,
    activeBusiness
};