import React, { useState } from 'react'

const useCounter = () => {
  const [count, setCount] = useState(0);
  const incCount = () => setCount(count + 1);
  const decCount = () => setCount(count - 1);

  return (
    {count, incCount, decCount}
  )
}

export default useCounter