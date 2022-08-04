import axios from 'axios';
import { logout } from './shared/Utils/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000
});
apiClient.interceptors.request.use((config) => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (err) => {
    return Promise.reject(err);
});
export const login = async (data) => {
    try {
        return await apiClient.post('/auth/login', data);
    }
    catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }
}
export const register = async (data) => {
    try {
        return await apiClient.post('/auth/register', data);
    }
    catch (exception) {
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }
}


export const sendFrindInvitation = async (data) => {
    try {
        return await apiClient.post('/friend-invitation/invite', data)

    }
    catch (exception) {
        checkResponseCode();
        return {
            error: true,
            exception
        }
    }

}
export const acceptFrindInvitation = async (data) => {
    try {
        return await apiClient.post('/friend-invitation/accept', data)

    }
    catch (exception) {
        checkResponseCode();
        return {
            error: true,
            exception
        }
    }

}
export const rejectFrindInvitation = async (data) => {
    try {
        return await apiClient.post('/friend-invitation/reject', data)

    }
    catch (exception) {
        checkResponseCode();
        return {
            error: true,
            exception
        }
    }

}

const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;
    if (responseCode) {
        (responseCode === 4001 || responseCode === 4003) && logout();

    }
}