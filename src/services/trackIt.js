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

function getHabits(config) {
    const promise = axios.get(`${BASE_URL}/habits`, config);
    return promise;
}

function createHabit(body, config) {
    const promise = axios.post(`${BASE_URL}/habits`, body, config);
    return promise;
}

function getTodayHabits(config) {
    const promise = axios.get(`${BASE_URL}/habits/today`, config);
    return promise;
}

function deleteHabit(id, config) {
    const promise = axios.delete(`${BASE_URL}/habits/${id}`, config);
    return promise;
}

function checkHabit(id, config) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
    return promise;
}

function uncheckHabit(id, config) {
    const promise = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
    return promise;
}

export {
    login,
    register,
    getHabits,
    getTodayHabits,
    deleteHabit,
    createHabit,
    checkHabit,
    uncheckHabit
}