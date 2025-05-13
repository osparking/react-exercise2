import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {register, handleSubmit, watch} = useForm();
  const onSubmit = (data) => console.log(data); 

  console.log(watch('name'));

  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름:
          <input {...register('name')} />
        </label>
        <br />
        <label>이메일:
          <input {...register('email')} />
        </label>
        <button type="submit">폼 제출</button>
      </form>
    </div>
  )
}

export default App
