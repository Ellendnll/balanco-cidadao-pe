import { useEffect, useRef, useState } from 'react';

/**
 * Retorna um ref e um booleano que vira true (e fica true)
 * quando o elemento entra na tela.
 */
export default function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}
