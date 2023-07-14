const loginService = require("../services/login_service");
const bcrypt = require("bcrypt") // Used for password hashing

const Authentication = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            res
            .status(400)
            .send({ status: "FAILED", data: { error: "Parameters can not be empty" } });
        }

        const hash_pass = await bcrypt.hash(req.body.password.toString(), 10)
        const data = {
            email: req.body.email,
        } 
        const authData = await loginService.Authentication(data);
        const isMatched = await bcrypt.compare(req.body.password, authData[0].password);

        if(isMatched) {
            res
            .status(201)
            .send({ status: "OK", data: authData, accessToken: req.accessToken });
        } else {
            res
            .status(400)
            .send({ status: "FAILED", data: { error: "Password is incorrect!" } });
        }
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = { Authentication };