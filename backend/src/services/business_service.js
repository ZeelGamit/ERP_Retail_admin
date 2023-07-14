const businessData = require("../data_access/business_data"); // Importing data_access to get the data and send the data for database operation
const dateTime = require('node-datetime');

// Get all business from database by data_access files
const getAllBusinesses = async (admin_id, role) => {
    try {
        const allBusinesses = await businessData.getAllBusinesses(admin_id, role);
        return allBusinesses;    
    } catch (error) {
        throw error;
    }
}

// Get particular business from database by data_access files
const getBusinessByid = async (businessid) => {
    try {
        const businessByid = await businessData.getBusinessByid(businessid);
        return businessByid;    
    } catch (error) {
        throw error;
    }
}

// Deactivate business by setting is_deleted = 1  
const deactiveBusiness = async (businessid) => {
    try {
        const updated_result = await businessData.deactiveBusiness(businessid);
        return updated_result;    
    } catch (error) {
        throw error;
    }
}

const activeBusiness = async (businessid) => {
    try {
        const updated_result = await businessData.activeBusiness(businessid);
        return updated_result;    
    } catch (error) {
        throw error;
    }
}

// Adding new account manager  
const addNewBusiness = async (business_data) => {
    const db_name = 'fts_' + business_data.business_name.split(" ").join("").toLowerCase() + '_' + Math.floor(Math.random()*(999-100+1)+100);
    const dt = dateTime.create();
    const date = new Date();
    date.setDate(date.getDate() + 30)
    const dataToInsert = {
        ...business_data,
        db_name: db_name,
        end_date: date.toISOString().slice(0, 10),
        created_date: dt.format('Y-m-d H:M:S'),
        modification_date: dt.format('Y-m-d H:M:S'),
    }
    try {
        const createdBusiness = await businessData.addNewBusiness(dataToInsert);
        return createdBusiness;
    } catch (error) {
        throw error;
    }
}

const getAllPackages = async () => {
    try {
        const allPackages = await businessData.getAllPackages();
        return allPackages;    
    } catch (error) {
        throw error;
    }
}

const revenue = async (admin_id, role) => {
    try {
        const revenue = await businessData.revenue(admin_id, role);
        return revenue;    
    } catch (error) {
        throw error;
    }
}

const addPaymentData = async (payment_data) => {
    const dt = dateTime.create();
    const dataToInsert = {
        ...payment_data,
        date: dt.format('Y-m-d H:M:S'),
    }
    
    try {
        const createdPayment = await businessData.addPaymentData(dataToInsert);
        return createdPayment;
    } catch (error) {
        throw error;
    }
}

// Exporting modules to use in controller
module.exports = { 
    getAllBusinesses,
    deactiveBusiness,
    getBusinessByid,
    addNewBusiness,
    getAllPackages,
    revenue,
    addPaymentData,
    activeBusiness };