const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
    const data = req.body;
    const authToken = jwt.sign({data}, process.env.JWT_SECRET, { expiresIn: '3d' });
    req.accessToken = authToken;
    next();
}

const authorization = (req, res, next) => {
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    if (!token) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: "Please authenticate using token." });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

const checktoken = (req, res, next) => {
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1];
    if (!token) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: "Please authenticate using token." });
    }
    try {
        const data = jwt.verify(token, process.env.JWT_SECRET)
        res
        .status(201)
        .send({ status: "OK", data: "Valid token." });
    } catch (error) {
        res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error } });
    }
}
module.exports = { 
    authenticate,
    authorization,
    checktoken }