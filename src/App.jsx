import { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);
  
  return (
    <>
      <div>
        <h1>API 사용하기</h1>
      </div>
    </>
  )
}

export default App
