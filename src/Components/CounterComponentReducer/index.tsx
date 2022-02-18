import { useReducer } from 'react';

interface CounterState {
  counter: number;
  prev: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 10,
  prev: 0,
  changes: 0,
};

type CounterAction =
  | { type: 'increaseBy'; payload: { value: number } }
  | { type: 'reset' };

const counterReducer = (
  state: CounterState,
  action: CounterAction,
): CounterState => {
  switch (action.type) {
    case 'reset':
      return {
        counter: 0,
        prev: 0,
        changes: 0,
      };
    case 'increaseBy':
      return {
        counter: state.counter + action.payload.value,
        changes: state.changes + 1,
        prev: state.counter,
      };
    default:
      return state;
  }
};

export const CounterComponentReducer = () => {
  const [stateCounter, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  const handleIncrement = (value: number) => {
    dispatch({
      type: 'increaseBy',
      payload: {
        value,
      },
    });
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
