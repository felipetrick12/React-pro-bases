import { useCounterEffect } from '../../hooks/useCounterEffect';

export const CounterEffectHook = () => {
  const { number, ElementAnimated, handleClick } = useCounterEffect({
    maxCount: 15,
  });

  return (
    <>
      <h1>Counter Hook</h1>
      <h2 ref={ElementAnimated}>{number}</h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
