import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export const useCounterEffect = ({ maxCount = 1 }) => {
  const [number, setNumber] = useState(5);

  const ElementAnimated = useRef<HTMLHeadingElement>(null);
  const tl = useRef(gsap.timeline());
  const handleClick = () => {
    setNumber((prev) => Math.min(prev + 1, maxCount));
  };

  useLayoutEffect(() => {
    if (!ElementAnimated.current) return;
    tl.current
      .to(ElementAnimated.current, {
        y: -10,
        duration: 0.2,
        ease: 'ease.out',
      })
      .to(ElementAnimated.current, {
        y: 0,
        duration: 0.2,
        ease: 'bounce.out',
      })
      .pause();
  }, []);

  useEffect(() => {
    tl.current.play(0);
  }, [number]);

  return {
    number,
    ElementAnimated,
    handleClick,
  };
};
