import { useSprings, animated } from '@react-spring/web';
import { useEffect, useRef, useState } from 'react';

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; transform: string };
  animationTo?: { opacity: number; transform: string };
  easing?: (t: number) => number;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = '',
  className = '',
  delay = 100,
  animationFrom = { opacity: 0, transform: 'translate3d(0,40px,0)' },
  animationTo = { opacity: 1, transform: 'translate3d(0,0,0)' },
  easing = (t: number) => t,
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  onLetterAnimationComplete,
}) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const [inView, setInView] = useState(false);
  const animatedCount = useRef(0);

  const words = text.trim().split(' ').map(word => word.split(''));
  const letters = words.flat();

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  // Create springs for each letter
  const springs = useSprings(
    letters.length,
    letters.map((_, i) => ({
      from: animationFrom,
      to: inView ? animationTo : animationFrom,
      delay: i * delay,
      config: { easing },
      onRest: () => {
        animatedCount.current += 1;
        if (
          animatedCount.current === letters.length &&
          typeof onLetterAnimationComplete === 'function'
        ) {
          onLetterAnimationComplete();
        }
      },
    }))
  );

  const AnimatedSpan = animated('span');
  let globalIndex = 0;

  return (
    <p
      ref={ref}
      className={`split-text-parent ${className}`}
      style={{
        textAlign,
        overflow: 'hidden',
        display: 'inline',
        whiteSpace: 'normal',
        wordWrap: 'break-word',
      }}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          {word.map((letter, letterIndex) => {
            const currentIndex = globalIndex++;
            return (
              <AnimatedSpan
                key={`letter-${wordIndex}-${letterIndex}`}
                style={{
                  ...springs[currentIndex],
                  display: 'inline-block',
                  willChange: 'transform, opacity',
                }}
              >
                {letter}
              </AnimatedSpan>
            );
          })}
          {/* Space between words */}
          <span style={{ display: 'inline-block', width: '0.3em' }}>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};

export default SplitText;
