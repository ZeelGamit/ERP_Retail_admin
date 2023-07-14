const conn = require('./db');
const PaymentService = require('./service');

   const addPayment = async (req, res) => {
    if (!req.body.TansferId || !req.body.Amount || !req.body.Currency || !req.body.UserId) {
        res
        .status(400)
        .json({ status: "FAILED", data: { error: "Parameters can not be empty" } });
        return;
    }
    console.log(req.body);
    const account_manager_data = {
        currency: req.body.Currency,
        userid: req.body.UserId,
        tansferid: req.body.TansferId,
        amount: req.body.Amount,
    }
    try {
        const added_result = await PaymentService.addPayment(account_manager_data);
        res.json(201).json({ status: "OK", data: added_result });
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } });
    }
}


   const getAllPayments = async (req, res) => {
    try {
        const allPayments = await PaymentService.getAllPayments();
        res
        .status(201)
        .json({ status: "OK", data: allPayments });
    } catch (error) {
        res
        .status(error?.status || 500)
        .json({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
  getAllPayments,
  addPayment
}
   