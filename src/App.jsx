import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    if (formData.name.trim().length === 0) {
      setErrors({ ...errors, name: '이름이 누락되었습니다!' });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    if (Object.keys(errors).length === 0) {
      console.log("제출 폼 내용: ", formData);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (errors[name] && value) {
      const modified = { ...errors };
      delete modified[name];
      setErrors(modified);
    }

    console.log("name: ", e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit}>
        <label>이름:
          <input
            type='text' name='name'
            value={formData.name}
            onChange={handleChange} />
          {errors.name &&
            <><br /><span style={{ color: 'red' }}>
              {errors.name}</span></>}
        </label>
        <br />
        <label>이메일:
          <input
            type='email' name='email'
            value={formData.email}
            onChange={handleChange} />
        </label>
        <button type="submit">폼 제출</button>
      </form>
    </div>
  )
}

export default App
