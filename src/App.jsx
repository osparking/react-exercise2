import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, watch,
    formState: { errors }, reset } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  useEffect(() => {
    console.log("상태 변화로 인해 리렌더됨");
  });

  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름:
          <input {...register('name', 
            { required: '이름은 필수 입력 항목입니다.',
              minLength: { value: 2, 
                           message: '이름은 최소 두 자입니다'}})} />
        </label>
        {errors.name && <p>{errors.name.message}</p>}
        <br />
        <label>이메일:
          <input {...register('email', { required: true, pattern:
           /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
        </label>
        {errors.email && <p>이메일은 필수적 입니다.</p>}
        <button type="submit">폼 제출</button>
      </form>
    </div>
  )
}

export default App
