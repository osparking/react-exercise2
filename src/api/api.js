import axios from "axios";

const axi = axios.create({
  baseURL : "https://jsonplaceholder.typicode.com",
  headers : {
    "Authorization" : "Bearer <TOKEN>"
  }
});

axi.interceptors.request.use((request) => {
  console.log("request: ", request);
  return request;  
});

export default axi;