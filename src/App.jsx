import { useState } from 'react';
import './App.css';

function App() {
  
  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit}>
        <label>이름:
        </label>
        <br />
        <label>이메일:
        </label>
        <button type="submit">폼 제출</button>
      </form>
    </div>
  )
}

export default App
