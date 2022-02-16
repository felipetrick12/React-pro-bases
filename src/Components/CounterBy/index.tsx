import { useState } from 'react';

interface Props {
  initialValue?: number;
}

interface CounterProps {
  counter: number;
  clicks: number;
}

export const CounterBy = ({ initialValue = 5 }: Props) => {
  const [{ counter, clicks }, setNumber] = useState<CounterProps>({
    counter: initialValue,
    clicks: 0,
  });

  const incrementNumber = (number: number) => {
    setNumber(({ counter, clicks }) => ({
      counter: counter + number,
      clicks: clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter {counter}</h1>
      <h1>Clicks {clicks}</h1>
      <button onClick={() => incrementNumber(1)}>+1</button>
      <button onClick={() => incrementNumber(5)}>+5</button>
    </>
  );
};
