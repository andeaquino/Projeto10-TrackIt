import axios from 'axios';

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function login(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

function register(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

export {
    login,
    register
}