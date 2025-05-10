import './App.css';
import useCounter from './useCounter';

function App() {
  const {count, incCount, decCount} = useCounter();

  return (
    <>
      <div>
        <h1>계수: {count}</h1>
        <button onClick={incCount}>증가</button>
        <button onClick={decCount}>감소</button>
      </div>
    </>
  )
}

export default App
