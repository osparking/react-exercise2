import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, watch,
    formState: { errors } } = useForm();
  const onSubmit = (data) => console.log(data);

  const currName = watch('name');

  useEffect(() => {
    console.log("이름 현재 값: ", currName);
  }, [currName]);

  const currEmail = watch('email');

  useEffect(() => {
    console.log("이메일 현재 값: ", currEmail);
  }, [currEmail]);

  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름:
          <input {...register('name', { required: true, minLength: 2})} />
        </label>
        {errors.name && <p>이름은 두 자 이상입니다.</p>}
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
