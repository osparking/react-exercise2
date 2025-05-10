import './App.css';
import useCounter from './useCounter';

function App() {
  const {count, incCount, decCount, reset} = useCounter(100);
  const counter = useCounter();

  return (
    <>
      <div>
        <h1>계수: {count}</h1>
        <button onClick={incCount}>증가</button>
        <button onClick={decCount}>감소</button>
        <button onClick={reset}>초기화</button>
        <h1>계수: {counter.count}</h1>
        <button onClick={counter.incCount}>증가</button>
        <button onClick={counter.decCount}>감소</button>
        <button onClick={counter.reset}>초기화</button>
      </div>
    </>
  )
}

export default App
