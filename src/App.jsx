import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios.all([
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/users')]
    ).then(axios.spread((posts, users) => {
      console.log(posts);
      console.log(users);
      setData(posts.data);
      setIsLoading(false);
      // throw new Error("포스트 자료 적재 오류 발생!");
    })
    ).catch(error => {
        console.error("에러: ", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>자료 적재 중...</p>
  }

  if (error) {
    return <p>자료 적재 오류 발생</p>
  }

  return (
    <>
      <div>
        <h1>API 사용하기</h1>
        <ul>
          {data.map((post) =>
            <li key={post.id}>
              <p><strong>제목: {post.title}</strong></p>
              <p>내용: {post.body}</p>
            </li>)}
        </ul>
      </div>
    </>
  )
}

export default App
