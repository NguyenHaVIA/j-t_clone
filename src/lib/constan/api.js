
export async function apiRequest(url, method = "GET", body = null) {
    try {
        const headers = {
            "accept": "text/plain",
            "Content-Type": "application/json"
        };
        const options = {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        }
        const response = await fetch(url, options);
        const responseText = await response.text();
        if(!response.ok){
            throw new Error(responseText);
        }
        return {success:true, data: responseText };
    } catch (error) {
        return {
            success: false,
            message: error.message
        };
    }
}
