const express = require('express')
const app = express();
const path = require('path');
const Razorpay = require('razorpay');
const cors = require('cors');
// const bodyparser = require('body-parser');
const router = require('./router');
const db = require('./db')

app.use(express.urlencoded({extended: true})) // Url middleware parse the incoming requestes based on body-parser
app.use(express.json()) // Parses incoming JSON requests and puts the parsed data in req.body 
app.use(cors())

// app.use("/api/payment",router);

app.get('/getData' , (req,res) => {
    res.send('hello');
})

app.get("/api/get",(req,res)=>{
    const sqlget = "select * from tansactiontb"
    db.query(sqlget,(err,data)=>{
        if(err)
        throw err;

        res.send(data)
    })
})

app.post("/api/post",(req,res)=>{
    const {Name,Email,Contact} = req.body;
    const qry = "INSERT INTO tansactiontb(Amount,Currency,UserId) VALUES(?,?,?)";
    db.query(qry,[Amount,Currency,UserId],(error,result) => {
        if(error)
        throw error
    })
    
})

const razorpay = new Razorpay({
    key_id: 'rzp_test_LvN42NBYlsy7Ig',
    key_secret: 'ie41MiokZsnhg6e18wIYZWlC'
})

app.get('/razorpay', async (req, res,next) => {

    // console.log(req.body); 
    var options = {
        amount: 2500 * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: "order_rcptid_11", 
    };
    try{
        const response = await razorpay.orders.create(options);
        console.log(response);
        res.json({
            id: response.id,
            currency : response.currency,
            amount: response.amount
        })
    }catch(error)
    {
        console.log(error)  
    }

})

app.listen(8001, console.log('app is listening on port 8001'));