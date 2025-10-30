import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
    delay = 0,
    duration = 600,
  } = options;

  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
    rootMargin,
  });

  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (inView && !isRevealed) {
      const timer = setTimeout(() => {
        setIsRevealed(true);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [inView, isRevealed, delay]);

  const style = {
    opacity: isRevealed ? 1 : 0,
    transform: isRevealed ? 'translateY(0)' : 'translateY(30px)',
    transition: `all ${duration}ms ease-out`,
  };

  return { ref, style, isRevealed };
};

// Hook for staggered animations
export const useStaggerReveal = (itemCount, options = {}) => {
  const {
    staggerDelay = 100,
    ...otherOptions
  } = options;

  const items = Array.from({ length: itemCount }, (_, index) => {
    return useScrollReveal({
      ...otherOptions,
      delay: index * staggerDelay,
    });
  });

  return items;
};