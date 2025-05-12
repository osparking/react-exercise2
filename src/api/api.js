import axios from "axios";

const axi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    'Content-Type': 'application/json'
  }
});

axi.interceptors.request.use((request) => {
  console.log("request: ", request);
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
});

export default axi;