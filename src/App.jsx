import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '(성명)'
  })

  const handleSubmit = () => {
    console.log("제출 폼 내용: ", formData);    
  }

  const handleChange = () => {
  }

  return (

    <div>
      <h1>리액트 폼</h1>
    </div>
  )
}

export default App
