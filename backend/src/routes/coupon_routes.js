const router = require("express").Router(); // Importing router object
const couponController = require("../controllers/coupon_controller");// Importing controller
const Validator = require("../../middlewares/validators/Validator"); // Importing validator to validate data
const Auth = require("../../middlewares/auth/authorization");

// Route to get all coupons
// http://localhost:8000/api/coupons/getAllCoupons/:admin&:role
router.get("/getAllCoupons/:admin&:role", Auth.authorization, couponController.getAllCoupons);

// Route to add new coupon
// http://localhost:8000/api/coupons/addNewCoupon
router.post("/addNewCoupon", Auth.authorization, Validator.validateCoupon, couponController.addNewCoupon);

// Exproting module to use it in server file
module.exports = router;