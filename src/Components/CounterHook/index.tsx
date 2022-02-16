import { useCounterEffect } from '../../hooks/useCounterEffect';

export const CounterEffectHook = () => {
  const { number, counterElement, handleClick } = useCounterEffect();

  return (
    <>
      <h1>Counter Hook</h1>
      <h2 ref={counterElement}>{number}</h2>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
