const url = "http://localhost:8000/api/auth";

export async function login(data) {
    try {
        const response = await fetch(url + "/login",{
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

export async function checktoken(data) {
    try {
        const response = await fetch(url + "/checktoken",{
            method: "GET",
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