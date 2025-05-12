import { useState } from 'react';
import './App.css';

function App() {
  
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
