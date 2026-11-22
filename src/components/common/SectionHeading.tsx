import React from 'react';
import { ScrollRevealText } from './ScrollRevealText';
import { motion, useReducedMotion } from 'motion/react';
import { ServiceTextRevealContext } from './useServiceTextReveal';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center';
  /** Retained for backwards compatibility across page callers */
  theme?: 'dark' | 'light';
  className?: string;
  animate?: boolean;
  animateWords?: boolean;
  animateWordsOnce?: boolean;
  revealOnScrollBothDirections?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  highlightWord,
  description,
  align = 'left',
  className = '',
  animate = true,
  animateWords = false,
  animateWordsOnce = false,
  revealOnScrollBothDirections = false,
}) => {
  const reducedMotion = useReducedMotion();
  const sharedReveal = React.useContext(ServiceTextRevealContext);
  /* Word-reveal headings keep a Journey-style entrance even under page-level service text reveal. */
  const motionReveal = animate && !reducedMotion && (!sharedReveal || animateWords);

  const renderTitle = () => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return title;
    }
    const idx = title.indexOf(highlightWord);
    const before = title.slice(0, idx);
    const after = title.slice(idx + highlightWord.length);
    return (
      <>
        {before}
        <span className="text-accent">{highlightWord}</span>
        {after}
      </>
    );
  };

  return (
    <motion.div
      initial={motionReveal ? { opacity: 0, y: animateWords ? 30 : 14 } : false}
      whileInView={motionReveal ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: !revealOnScrollBothDirections, amount: 0.35 }}
      transition={{ duration: motionReveal ? (animateWords ? 0.63 : 0.42) : 0, ease: [0.32, 0.72, 0, 1] }}
      className={`max-w-3xl ${
        align === 'center' ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          {badge}
        </div>
      )}
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-foreground text-balance" {...(animateWords ? { 'data-animate-words': '' } : {})}>
        {animateWords
          ? <ScrollRevealText text={title} highlight={highlightWord} preserveLayout once={animateWordsOnce} />
          : renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted">
          {description}
        </p>
      )}
    </motion.div>
  );
};
