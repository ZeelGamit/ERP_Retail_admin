const loginData = require("../data_access/login_data")

const Authentication = async (data) => {
    try {
        const authdata = await loginData.Authentication(data);
        return authdata;    
    } catch (error) {
        throw error;
    }
}

module.exports = { Authentication };