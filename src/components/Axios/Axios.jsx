import axios from 'axios';
const token = localStorage.getItem("token")
const port = process.env.REACT_APP_SERVER_PORT;

const mainAxios = axios.create({
    baseURL: `http://localhost:${port}`,
    headers: { authorization: `Bearer ${token}` }
});

export { mainAxios };