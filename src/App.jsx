import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false)
      })
      .catch(error => {
        console.log("에러: ", error);
        setError(error);
        isLoading(false);        
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
