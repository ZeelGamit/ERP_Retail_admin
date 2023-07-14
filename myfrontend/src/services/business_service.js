const url = "http://localhost:8000/api/businesses";

export async function getallbusinesses(admin, role) {
    try {
        const response = await fetch(url + "/getAllBusinesses/" + admin + "&" + role, {
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

export async function addnewbusiness(data) {
    try {
        const response = await fetch(url + "/addNewBusiness", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        // console.log(await response.json());
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}

export async function getbusiness(id) {
    try {
        const response = await fetch(url + "/getBusinessByid/" + id, {
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

export async function deactivebusiness(id) {
    try {
        const response = await fetch(url + "/deactiveBusiness/" + id, {
            method: "PUT",
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

export async function activebusiness(id) {
    try {
        const response = await fetch(url + "/activeBusiness/" + id, {
            method: "PUT",
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

export async function getallpackages() {
    try {
        const response = await fetch(url + "/getAllPackages", {
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

export async function revenue(admin, role) {
    try {
        const response = await fetch(url + "/revenue/" + admin + "&" + role, {
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

export async function addpayment(data) {
    console.log(data)
    try {
        const response = await fetch(url + "/razorpay", {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data)
        })
        // console.log(await response.json());
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}
