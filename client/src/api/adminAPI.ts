const adminURL = "http://localhost:3001/admin";

type LoginData = {
    email: string;
    password: string;
};

type CreateListing = {
    name: string;
    price: string;
    discountPrice: string;
    cameraType: string;
    description: string;
    photos: string[];
};

// type UploadPhotos = {
//     photos: string[];
// };

const commonHeaders = {
    "Content-Type": "application/json",
};

export async function loginAdmin(data: LoginData) {
    try {
        const response = await fetch(`${adminURL}/login`, {
            method: "POST",
            credentials: "include",
            headers: commonHeaders,
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function createListing(data: CreateListing) {
    try {
        const response = await fetch(`${adminURL}/create-listing`, {
            method: "POST",
            credentials: "include",
            headers: commonHeaders,
            body: JSON.stringify(data),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function logoutAdmin() {
    try {
        await fetch(`${adminURL}/logout`, {
            credentials: "include",
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function uploadPhotoFromLink(link: any) {
    try {
        const response = await fetch(`${adminURL}/upload-by-link`, {
            method: "POST",
            headers: commonHeaders,
            body: JSON.stringify({ link }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export async function uploadPhotoFromDevice(data: any) {
    try {
        const response = await fetch(`${adminURL}/upload`, {
            method: "POST",
            headers: commonHeaders,
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
