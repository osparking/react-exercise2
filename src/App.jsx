import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

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
