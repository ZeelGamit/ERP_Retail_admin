const url = "http://localhost:8000/api/coupons";

export async function getallcoupons(admin, role) {
    try {
        const response = await fetch(url + "/getAllCoupons/" + admin + "&" + role, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        });
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}

export async function addnewcoupon(data) {
    try {
        const response = await fetch(url + "/addNewCoupon",{
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}