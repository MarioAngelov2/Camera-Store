const adminURL = "http://localhost:3001/admin";

export async function loginAdmin(data: any) {
    try {
        const response = await fetch(`${adminURL}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function createListing(data: any) {
    try {
        const response = await fetch(`${adminURL}/create-listing`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}
