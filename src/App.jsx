import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [ data, setData ] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json));
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
