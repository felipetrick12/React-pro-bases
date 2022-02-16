import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

interface Props {
  initialValue?: number;
}

const MAXIMUM_VALUE = 10;
export const CounterEffect = ({ initialValue = 5 }: Props) => {
  const [number, setNumber] = useState(initialValue);
  const counterElement = useRef<HTMLHeadingElement>(null);
  const handleClick = () => {
    setNumber((prev) => Math.min(prev + 1, MAXIMUM_VALUE));
  };

  useEffect(() => {
    if (number === 10) {
      const tl = gsap.timeline();
      tl.to(counterElement.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      }).to(counterElement.current, {
        y: 0,
        duration: 0.2,
        ease: 'bounce.out',
      });
    }
  }, [number]);

  return (
    <>
      <h1 ref={counterElement}>Counter {number}</h1>
      <button onClick={() => handleClick()}>+1</button>
    </>
  );
};
