const accountManagerData = require("../data_access/account_manager_data"); // Importing data_access to get the data and send the data for database operation
const dateTime = require('node-datetime');

// Get all account managers from database by data_access files
const getAllAccountManagers = async () => {
    try {
        const allAccountMangers = await accountManagerData.getAllAccountManagers();
        return allAccountMangers;    
    } catch (error) {
        throw error;
    }
}

// Get particular account manager from database by data_access files
const getAccountManagerByid = async (account_manager_id) => {
    try {
        const accountManagerByid = await accountManagerData.getAccountManagerByid(account_manager_id);
        return accountManagerByid;    
    } catch (error) {
        throw error;
    }
}

// Deactivate account manager by setting is_deleted = 1  
const deactiveAccountManager = async (account_manager_id) => {
    try {
        const updated_result = await accountManagerData.deactiveAccountManager(account_manager_id);
        return updated_result;    
    } catch (error) {
        throw error;
    }
}

// Adding new account manager  
const addAccountManager = async (account_manager_data) => {
    const dt = dateTime.create();
    const dataToInsert = {
        ...account_manager_data,
        created_date: dt.format('Y-m-d H:M:S'),
        modification_date: dt.format('Y-m-d H:M:S'),
        role: 2
    }
    try {
        const createdAccountManager = await accountManagerData.addAccountManager(dataToInsert);
        return createdAccountManager;
    } catch (error) {
        throw error;
    }
}

// Editing new account manager  
const editAccountManager = async (account_manager_data, id) => {
    const dt = dateTime.create();
    const dataToUpdate = {
        ...account_manager_data,
        modification_date: dt.format('Y-m-d H:M:S'),
    }
    try {
        const createdAccountManager = await accountManagerData.editAccountManager(dataToUpdate, id);
        return createdAccountManager;
    } catch (error) {
        throw error;
    }
}

// Exporting modules to use in controller
module.exports = { 
    getAllAccountManagers,
    getAccountManagerByid,
    deactiveAccountManager,
    addAccountManager,
    editAccountManager };