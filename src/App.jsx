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
      <form onSubmit={handleSubmit}>
        <input 
          type='text' name='name' 
          value={formData.name}
          onChange={handleChange}/>
        <button type="submit">폼 제출</button>
      </form>
    </div>
  )
}

export default App
