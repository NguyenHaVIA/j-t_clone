import Cookies from "universal-cookie";
import { apiRequest } from "$lib/constan/api";
import { redirect } from "@sveltejs/kit";
import { emailStore } from "$lib/constan/store";
const BASE_URL = "https://dev-fe-exam.viajsc.com/ExamUser";

const cookie = new Cookies(null, { path: '/' });
export async function registerUser(useData) {
    return apiRequest(`${BASE_URL}/register-user`, "POST", useData);
}

export async function lognInUser(userName, password) {
    const response = await apiRequest(`${BASE_URL}/login`, "POST", { userName, password });

    if (response.success) {
        cookie.set("user", JSON.stringify(response.data), {
            path: "/", 
            expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // Thêm 7 ngày
            sameSite: "None",
            secure: true,
        })
        window.location.href = "/home";

    }
    return response;
}

export function getSession() {
    return cookie.getSession("user") || null;
}
export function logOut() {
    cookie.remove("user");
    window.location.href = "/";
}
export function getUserFromSession() {
    const session = cookie.get("user");
    
    if (!session) return null; 

    try {
        const parsedSession = JSON.parse(session);
        console.log(parsedSession);
        
        return parsedSession.content || null;
    } catch (error) {
        console.error( error);
        return null;
    }
}
export async function checkUser(email) {
    const url = `${BASE_URL}/get-otp-change-password?userName=${email}`;
    const response = await apiRequest(url,"GET");
    return response;
}
export async function checkOTP(email,otp) {
    const url = `${BASE_URL}/validate-otp-change-password?userName=${email}&otpCode=${otp}`;
    const response = await apiRequest(url,"GET");
    return response;
}

export function changePassword(data){
    return apiRequest(`${BASE_URL}/change-password`,"POST",data)
}
