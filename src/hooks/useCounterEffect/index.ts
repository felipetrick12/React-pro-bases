import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_VALUE = 10;

export const useCounterEffect = () => {
  const [number, setNumber] = useState(5);

  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = () => {
    setNumber((prev) => Math.min(prev + 1, MAXIMUM_VALUE));
  };

  useEffect(() => {
    console.log('%c El numero es 10', 'color:white; background-color:aqua');

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
  }, [number]);

  return {
    number,
    counterElement,
    handleClick,
  };
};
