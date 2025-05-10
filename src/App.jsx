import './App.css';
import useCounter from './useCounter';

function App() {
  const {count, incCount, decCount} = useCounter();
  const counter = useCounter();

  return (
    <>
      <div>
        <h1>계수: {count}</h1>
        <button onClick={incCount}>증가</button>
        <button onClick={decCount}>감소</button>
        <h1>계수: {counter.count}</h1>
        <button onClick={counter.incCount}>증가</button>
        <button onClick={counter.decCount}>감소</button>
      </div>
    </>
  )
}

export default App
