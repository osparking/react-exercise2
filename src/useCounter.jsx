import React, { useState } from 'react'

const useCounter = (initVal = 0) => {
  const [count, setCount] = useState(initVal);
  const incCount = () => setCount(count + 1);
  const decCount = () => setCount(count - 1);
  const reset = () => setCount(initVal);

  return (
    {count, incCount, decCount, reset}
  )
}

export default useCounter