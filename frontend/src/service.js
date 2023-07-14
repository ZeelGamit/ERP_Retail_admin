export async function getAllPayments() {
    try {
        const response = await fetch("http://localhost:8000/api/payment/getAllPayments");
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}

export async function addnewpayment(data) {    
    try {
        const response = await fetch("http://localhost:8000/api/payment/addPayment",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}