import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors }, 
          reset } = useForm();
  
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
            { required: true,
              minLength: 2,
              validate: (name) => 
                         name !== 'admin' || 'admin 은 불허됩니다.'
              })} />
        </label>
        {errors.name && <p>{errors.name.message || 
                            "이름으로 최소한 두 글자를 입력하세요."}</p>}
        <br />
        <label>이메일:
          <input {...register('email', { required: true, pattern:
           /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ })} />
        </label>
        {errors.email && <p>이메일은 필수적 입니다.</p>}
        <br />
        <button type="submit">폼 제출</button>
        <button type="button" onClick={() => reset()}>폼 리셋</button>
      </form>
    </div>
  )
}

export default App
