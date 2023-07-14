const PaymentData = require('./PaymentData');

const getAllPayments = async () => {
    try {
        const allPayment = await PaymentData.getAllPayments();
        return allPayment;    
    } catch (error) {
        throw error;
    }
}

const addPayment = async (Paymentdata) => {
    // const dataToInsert = {
    //     Paymentdata
    // }
    try {

        const creatPayment = await PaymentData.addPayment(Paymentdata);
        return creatPayment;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getAllPayments,
    addPayment
}