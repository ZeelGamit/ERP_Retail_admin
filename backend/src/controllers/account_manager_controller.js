const accountManagerServices = require("../services/account_manager_service"); // Importing services
const bcrypt = require("bcrypt") // Used for password hashing

// Function of get all the registered account manager
const getAllAccountManagers = async (req, res) => {
    try {
        const allAccountMangers = await accountManagerServices.getAllAccountManagers();
        res
        .status(201)
        .send({ status: "OK", data: allAccountMangers });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of get the particular account manager's data by its id
const getAccountManagerByid = async (req, res) => {
    const account_manager_id = req.params.id;
    if(!account_manager_id) {
        res
        .status(400)
        .send({ status: "FAILED", data: { error: "Parameter ':business_id' can not be empty" } });
    }try {
        const accountManagerByid = await accountManagerServices.getAccountManagerByid(account_manager_id);
        res.send({ status: "OK", data: accountManagerByid });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}
 
// Function of deactive particular account manager
const deactiveAccountManager = async (req, res) => {
    const account_manager_id = req.params.id;
    if(!account_manager_id) {
        res
        .status(400)
        .send({ status: "FAILED", data: { error: "Parameter ':account_manager_id' can not be empty" } });
    }
    try {
        const updated_result = await accountManagerServices.deactiveAccountManager(account_manager_id);
        res.send({ status: "OK", data: updated_result });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of add new account manager
const addAccountManager = async (req, res) => {
    if (!req.body.name || !req.body.mobileno || !req.body.email || !req.body.password) {
        res
        .status(400)
        .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
    }
    // Encrypt the password of user for security
    const hash_pass = await bcrypt.hash(req.body.password.toString(), 10)
    const account_manager_data = {
        email: req.body.email,
        password: hash_pass,
        name: req.body.name,
        contact_number: req.body.mobileno
    }
    try {
        const added_result = await accountManagerServices.addAccountManager(account_manager_data);
        res.status(201).send({ status: "OK", data: added_result });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Function of edit account manager
const editAccountManager = async (req, res) => {
    if (!req.body.name || !req.body.mobileno || !req.body.email || !req.body.password) {
        res
        .status(400)
        .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
    }
    try {
        const id = req.params.id;
        // Getting user by id
        const accountManagerByid = await accountManagerServices.getAccountManagerByid(id);
        let hash_pass = '';
        // Checking if user updated password or not
        if(accountManagerByid[0].password === req.body.password) {
            hash_pass = req.body.password;
        } else {
            // Encrypt the new password of user for security
            hash_pass = await bcrypt.hash(req.body.password.toString(), 10);
        }
        const account_manager_data = {
            email: req.body.email,
            password: hash_pass,
            name: req.body.name,
            contact_number: req.body.mobileno
        }
        const added_result = await accountManagerServices.editAccountManager(account_manager_data, id);
        res.status(201).send({ status: "OK", data: added_result });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

// Exporting modules to use it in account_manager_routes file
module.exports = { 
    getAllAccountManagers,
    getAccountManagerByid,
    deactiveAccountManager,
    addAccountManager,
    editAccountManager };