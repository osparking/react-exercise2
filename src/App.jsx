import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const handleSubmit = (e) => {

  }

  return (
    <>
      <div>
        <h1>API 사용하기</h1>
  <form onSubmit={handleSubmit}>
    <button type="submit">노트 추가</button>
  </form>
      </div>
    </>
  )
}

export default App
