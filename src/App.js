import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementBy } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');


  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick = {() => dispatch(increment())}>+</button>
      <button onClick = {() => dispatch(decrement())}>-</button>
      <br />
      <input
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(incrementBy(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>

      {isLogged ? <h3>Valuable information I shouldn't see if not logged in.</h3> : <h3>Log in to see the neat stuff!</h3>}
    </div>
  );
}

export default App;
