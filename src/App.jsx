import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const { register, handleSubmit, formState: { errors }, 
          reset, watch } = useForm();
  
  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  useEffect(() => {
    console.log("상태 변화로 인해 리렌더됨");
  });

  const registeredUsernames = ['admin', 'user', 'guest'];

const isUsernameTaken = async (username) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return registeredUsernames.includes(username);
}

  return (

    <div>
      <h1>리액트 폼</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>이름:
          <input {...register('name', 
            { required: true,
              minLength: 2,
              validate: {
                noAdmin:
                  (name) => name !== 'admin' || 'admin 은 불허됩니다.',
                noNumber:
                  (name) => isNaN(name) || '숫자 이름은 불허됩니다.',
                notTakenUsername : async (username) => {
                  const taken = await isUsernameTaken(username);
                  return !taken || '사용 중인 유저네임입니다.'
                }
              }
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
        <label>패스워드:
          <input type='password' {...register('password',
            {
              required: '패스워드는 필수 입력 항목입니다.',
              minLength: { value: 2, 
                    message: '패스워드는 최소 두 자입니다'},
            })} />
        </label>
        <br />
        {errors.password && <p>{errors.password.message}</p>}
        <label>패스워드 확인:
          <input type='password' {...register('confirmPassword',
            {
              required: '확인 패스워드는 필수 입력 항목입니다.',
              minLength: { value: 2, 
                    message: '확인 패스워드는 최소 두 자입니다'},
              validate: (value) => value === watch('password') ||
                '두 패스워드가 불일치합니다.'
            })} />
        </label>
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        <br />
        <button type="submit">폼 제출</button>
        <button type="button" onClick={() => reset()}>폼 리셋</button>
      </form>
    </div>
  )
}

export default App
