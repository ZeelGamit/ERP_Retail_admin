const router = require("express").Router(); // Importing router object
const loginController = require("../controllers/login_controller");
const Auth = require("../../middlewares/auth/authorization"); // Importing validator to validate data

// Route to login
// http://localhost:8000/api/auth/login
router.post("/login", Auth.authenticate ,loginController.Authentication);

// Route to login
// http://localhost:8000/api/auth/checktoken
router.get("/checktoken", Auth.checktoken);

// Exproting module to use it in server file
module.exports = router;