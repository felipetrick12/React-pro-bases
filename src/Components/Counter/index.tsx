import React, { useState } from 'react';

interface Props {
  initialValue?: number;
}
export const Counter = ({ initialValue = 10 }: Props) => {
  const [number, setNumber] = useState(initialValue);

  const incrementNumber = () => {
    setNumber((prev) => prev + 1);
  };

  return (
    <>
      <h1>Counter {number}</h1>
      <button onClick={() => incrementNumber()}>+1</button>
    </>
  );
};
