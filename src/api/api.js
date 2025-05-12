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
}, function(error){
  console.error("요청 오류: ", error);
  return Promise.reject(error);
});

axi.interceptors.response.use((response) => {
  return response;
},
(error) => {
  if (error.response && error.response.status === 401) {
    console.error("인증 실패!");    
  }
  if (error.response && error.response.status === 500) {
    console.error("서버 오류!");    
  }
  return Promise.reject(error);
});

export default axi;