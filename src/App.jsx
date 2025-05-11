import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json));
  }, []);
  
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
