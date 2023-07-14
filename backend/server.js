require("dotenv").config(); // Importing dotenv to use environment variables
const express = require("express"); // Importing express framework
const cors = require("cors") // If client and server has different origin
const { exec } = require('child_process'); // For run terminal for creating new database
const fs = require('fs') // Importing for file processes
const businessRouter = require("./src/routes/business_routes"); // Importing business router to do operation on businesses
const accountManagerRouter = require("./src/routes/account_manager_routes"); // Importing account manager router to do operation on account manager's data
const couponRouter = require("./src/routes/coupon_routes"); // Importing coupon router to do operation on coupon data
const authRouter = require("./src/routes/login_route"); // Importing login router 

const app = express() // Express object
app.use(express.urlencoded({extended: true})) // Url middleware parse the incoming requestes based on body-parser
app.use(express.json()) // Parses incoming JSON requests and puts the parsed data in req.body 
app.use(cors())

// Routers
app.use("/api/businesses", businessRouter); // Business router
app.use("/api/accountManagers", accountManagerRouter); // Account manager router
app.use("/api/coupons", couponRouter); // Coupon roter
app.use("/api/auth", authRouter); // Login router

// Application will run on http://localhost:PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});


