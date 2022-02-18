import { useReducer } from 'react';
import { doIncreaseBy, doReset } from './actions';
import { CounterState } from './interfaces';
import { counterReducer } from './state';

const INITIAL_STATE: CounterState = {
  counter: 10,
  prev: 0,
  changes: 0,
};

export const CounterComponentReducer = () => {
  const [stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const handleIncrement = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer</h1>
      <pre>{JSON.stringify(stateCounter, null, 2)}</pre>
      <button onClick={() => handleIncrement(1)}>+1</button>
      <button onClick={() => handleIncrement(5)}>+5</button>
      <button onClick={() => handleIncrement(10)}>+10</button>

      <button onClick={() => handleReset()}>Reset</button>
    </>
  );
};
