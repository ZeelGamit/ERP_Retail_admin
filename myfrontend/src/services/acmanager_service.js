const url = "http://localhost:8000/api/accountManagers";

export async function getallaccountmanagers() {
    try {
        const response = await fetch(url + "/getAllAccountManagers", {
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

export async function addnewacmanager(data) {
    try {
        const response = await fetch(url + "/addAccountManager",{
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

export async function getacmanager(id) {
    try {
        const response = await fetch(url + "/getAccountManagerByid/" + id, {
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

export async function editacmanager(id, data) {
    try {
        const response = await fetch(url + "/editAccountManager/" + id, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return await response.json();
    } catch (error) {
        return { status: "FAILED", data: { error: error?.message || error } }
    }
}

export async function deactivemanager(id) {
    try {
        const response = await fetch(url + "/deactiveAccountManager/" + id, {
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