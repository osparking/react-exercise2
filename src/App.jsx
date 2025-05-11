import axios from 'axios';
import { useState } from 'react';
import './App.css';

axios.interceptors.request.use(request => {
  console.log("요청 전송 직전");
  console.log("요청: ", request);
  return request;
});

axios.interceptors.response.use(response => {
  console.log("반응 접수 직후: ", response);
  return response;
});

function App() {
  const [data, setData] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    axios.post(
      "https://jsonplaceholder.typicode.com/posts", 
      newPost)
    .then(response => {
      console.log("추가된 노트: ", response.data);
      setData([response.data]);
    }).catch((e) => {
      console.error("오류: ", e);
    })
  }
  
  return (
    <>
      <div>
        <h1>API 사용하기</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit">노트 추가</button>
        </form>
      </div>
    </>
  )
}

export default App
