import axios from "axios";

const API_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

const createHeaders = (token) => {
  return { headers: { Authorization: `Bearer ${token}` } };
};

const login = ({ body }) => axios.post(`${API_URL}/auth/login`, body);
const register = ({ body }) => axios.post(`${API_URL}/auth/sign-up`, body);
const getHabits = ({ token }) =>
  axios.get(`${API_URL}/habits`, createHeaders(token));
const createHabit = ({ token, body }) =>
  axios.post(`${API_URL}/habits`, body, createHeaders(token));
const deleteHabit = ({ token, id }) =>
  axios.post(`${API_URL}/habits/${id}`, createHeaders(token));
const getTodayHabits = ({ token }) =>
  axios.get(`${API_URL}/habits/today`, createHeaders(token));
const checkHabit = ({ token, id }) =>
  axios.post(`${API_URL}/habits/${id}/check`, {}, createHeaders(token));
const uncheckHabit = ({ token, id }) =>
  axios.post(`${API_URL}/habits/${id}/uncheck`, {}, createHeaders(token));
const getHistory = ({ token }) =>
  axios.get(`${API_URL}/habits/history/daily`, createHeaders(token));

export {
  login,
  register,
  getHabits,
  createHabit,
  deleteHabit,
  getTodayHabits,
  checkHabit,
  uncheckHabit,
  getHistory,
};
