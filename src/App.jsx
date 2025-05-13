import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {register, handleSubmit} = useForm();
    
  return (

    <div>
      <h1>리액트 폼</h1>
      <form>
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
