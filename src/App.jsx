import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice'
import styled from 'styled-components'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  const Button = styled.button({
    background: 'red',
  });

  return (
    <div>
      <h1>Counter App</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
    </div>
  )
}

export default App
