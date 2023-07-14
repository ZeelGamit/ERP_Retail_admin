const router = require("express").Router(); // Importing router object
const accountManagerController = require("../controllers/account_manager_controller"); // Importing controller to send req and get res
const Validator = require("../../middlewares/validators/Validator"); // Importing validator to validate data
const Auth = require("../../middlewares/auth/authorization");

// Route to get all account managers that are registered
// http://localhost:8000/api/accountManagers/getAllAccountManagers
router.get("/getAllAccountManagers", Auth.authorization, accountManagerController.getAllAccountManagers);

// Route to get particular account manager's data from its id
// http://localhost:8000/api/accountManagers/getAccountManagerByid/:id
router.get("/getAccountManagerByid/:id", Auth.authorization, accountManagerController.getAccountManagerByid);

// Route to deactive account manager
// http://localhost:8000/api/accountManagers/deactiveAccountManager/:id
router.put("/deactiveAccountManager/:id", Auth.authorization, accountManagerController.deactiveAccountManager);

// Route to add new account manager
// http://localhost:8000/api/accountManagers/addAccountManager
router.post("/addAccountManager", Auth.authorization, Validator.validateAccountManager, accountManagerController.addAccountManager);

// Route to edit account manager
// http://localhost:8000/api/accountManagers/editAccountManager/:id
router.put("/editAccountManager/:id", Auth.authorization, Validator.validateAccountManager, accountManagerController.editAccountManager);

// Exproting module to use it in server file
module.exports = router;