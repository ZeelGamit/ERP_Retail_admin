const router = require("express").Router(); // Importing router object
const businessController = require("../controllers/business_controller"); // Importing controller to send req and get res
const Validator = require("../../middlewares/validators/Validator"); // Importing validator to validate data
const Auth = require("../../middlewares/auth/authorization");

// Route to get all business that are registered
// http://localhost:8000/api/businesses/getAllBusinesses/:admin&:role
router.get("/getAllBusinesses/:admin&:role", Auth.authorization, businessController.getAllBusinesses);

// Route to get particular business data from its id
// http://localhost:8000/api/businesses/getBusinessByid/:id
router.get("/getBusinessByid/:id", Auth.authorization, businessController.getBusinessByid);

// Route to deactive business
// http://localhost:8000/api/businesses/deactiveBusiness/:id
router.put("/deactiveBusiness/:id", Auth.authorization, businessController.deactiveBusiness);

// http://localhost:8000/api/businesses/deactiveBusiness/:id
router.put("/activeBusiness/:id", Auth.authorization, businessController.activeBusiness);

// Route to add new business
// http://localhost:8000/api/businesses/addNewBusiness
router.post("/addNewBusiness", Validator.validateBusiness, Auth.authorization, businessController.addNewBusiness);

// Route to get all packages
// http://localhost:8000/api/businesses/getAllPackages
router.get("/getAllPackages", Auth.authorization, businessController.getAllPackages);

// http://localhost:8000/api/businesses/revenue
router.get("/revenue/:admin&:role", Auth.authorization, businessController.revenue);

// http://localhost:8000/api/businesses/razorpay
router.post("/razorpay", businessController.razorpay);

// Exproting module to use it in server file
module.exports = router;