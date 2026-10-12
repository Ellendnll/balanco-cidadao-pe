import { useEffect, useState } from 'react';

/**
 * Anima um número de 0 até `target` quando `trigger` vira true.
 * Suporta casas decimais (ex.: 52,4).
 */
export default function useCountUp(target, { duration = 2000, decimals = 0, trigger = false } = {}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return undefined;

    let frameId;
    const start = Date.now();
    const factor = 10 ** decimals;

    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cúbico
      setValue(Math.round(eased * target * factor) / factor);
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, decimals, trigger]);

  return value;
}
