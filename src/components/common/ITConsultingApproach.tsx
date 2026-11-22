import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'motion/react';
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Compass,
  Plug,
  Search,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import './ITConsultingApproach.css';

type ApproachStep = {
  title: string;
  description: string;
};

const approachSteps: ApproachStep[] = [
  {
    title: 'Assessment & Discovery',
    description: 'We evaluate current IT infrastructure, identifying gaps and opportunities.',
  },
  {
    title: 'Strategy Development',
    description: 'Our team designs a custom IT roadmap aligned with your business objectives.',
  },
  {
    title: 'Implementation & Integration',
    description: 'We deploy cutting-edge solutions with minimal disruption.',
  },
  {
    title: 'Optimization & Monitoring',
    description: 'We continuously refine IT operations for peak performance.',
  },
  {
    title: 'Security & Compliance',
    description: 'Our team of professionals ensures all IT systems meet security and regulatory requirements.',
  },
];

const approachIcons: LucideIcon[] = [Search, Compass, Plug, Activity, ShieldCheck];
const rotationSpeedPixelsPerSecond = 55;
const interactionIdlePeriod = 1500;
const cardTransitionSeconds = 0.6;

const ApproachArtwork: React.FC<{ variant: number }> = ({ variant }) => (
  <svg className="it-approach__artwork" viewBox="0 0 260 170" aria-hidden="true">
    <ellipse cx="130" cy="151" rx="76" ry="10" fill="#527391" opacity=".1" />
    <g className="it-approach__artwork-window">
      <rect x="53" y="24" width="154" height="112" rx="17" fill="#fff" fillOpacity=".94" stroke="#fff" strokeWidth="2" />
      <rect x="67" y="39" width="126" height="10" rx="5" fill="#f3f8fc" />
      <circle cx="76" cy="44" r="2" fill="#70bedc" />
      <circle cx="84" cy="44" r="2" fill="#f3b28e" />
      <circle cx="92" cy="44" r="2" fill="#a896d7" />
      {variant === 0 && (
        <>
          <path d="M82 112V98h12v14m8 0V86h12v26m8 0V94h12v18" fill="var(--it-card-art-light)" stroke="var(--it-card-accent)" strokeWidth="2" />
          <circle cx="153" cy="83" r="20" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="3" />
          <path d="m168 98 15 15M142 84l7 7 14-16" fill="none" stroke="var(--it-card-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {variant === 1 && (
        <>
          <path d="m92 105 27-27 25 20 24-29" fill="none" stroke="var(--it-card-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="92" cy="105" r="8" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="3" />
          <circle cx="119" cy="78" r="8" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="3" />
          <circle cx="144" cy="98" r="8" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="3" />
          <circle cx="168" cy="69" r="8" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="3" />
        </>
      )}
      {variant === 2 && (
        <>
          <rect x="80" y="69" width="35" height="42" rx="8" fill="var(--it-card-art-light)" stroke="var(--it-card-accent)" strokeWidth="2" />
          <rect x="123" y="60" width="35" height="51" rx="8" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="2" />
          <rect x="166" y="77" width="18" height="34" rx="7" fill="var(--it-card-art-light)" stroke="var(--it-card-accent)" strokeWidth="2" />
          <path d="M87 96h21m22-18h21m-21 12h14M87 84h12" stroke="var(--it-card-accent)" strokeWidth="3" strokeLinecap="round" />
          <path d="m115 85 7 7-7 7m43-7h8" fill="none" stroke="var(--it-card-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {variant === 3 && (
        <>
          <path d="M78 112V93h14v19m9 0V79h14v33m9 0V88h14v24m9 0V66h14v46m9 0V77h14v35" fill="var(--it-card-art-light)" stroke="var(--it-card-accent)" strokeWidth="2" />
          <path d="m80 85 24-11 20 9 23-19 27 9" fill="none" stroke="var(--it-card-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="104" cy="74" r="4" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="2" />
          <circle cx="147" cy="64" r="4" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="2" />
        </>
      )}
      {variant === 4 && (
        <>
          <path d="m130 61 34 15v23c0 20-15 33-34 40-19-7-34-20-34-40V76z" fill="var(--it-card-art-light)" stroke="var(--it-card-accent)" strokeWidth="3" strokeLinejoin="round" />
          <path d="m114 98 11 11 23-25" fill="none" stroke="var(--it-card-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="130" cy="61" r="5" fill="#fff" stroke="var(--it-card-accent)" strokeWidth="2" />
        </>
      )}
    </g>
    <g className="it-approach__artwork-floats">
      <circle cx="47" cy="77" r="14" fill="#fff" fillOpacity=".94" />
      <path d="m41 78 4 4 8-9" fill="none" stroke="var(--it-card-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="211" cy="111" r="12" fill="#fff" fillOpacity=".92" />
      <path d="M205 111h12M211 105v12" stroke="var(--it-card-accent)" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

const AnimatedApproachCard: React.FC<{
  step: ApproachStep;
  index: number;
  virtualPosition: number;
  activePosition: number;
  phase: MotionValue<number>;
  slotStep: number;
  reducedMotion: boolean;
  onSelect: (position: number) => void;
}> = ({ step, index, virtualPosition, activePosition, phase, slotStep, reducedMotion, onSelect }) => {
  const distance = useTransform(phase, value => virtualPosition - value);
  const x = useTransform(distance, value => `calc(-50% + ${value * slotStep}px)`);
  const scale = useTransform(distance, value => {
    const absoluteDistance = Math.abs(value);
    if (absoluteDistance <= 1) return 1 - absoluteDistance * 0.18;
    if (absoluteDistance <= 2) return 0.82 - (absoluteDistance - 1) * 0.16;
    return 0.66;
  });
  const opacity = useTransform(distance, value => {
    const absoluteDistance = Math.abs(value);
    if (absoluteDistance <= 1) return 1 - absoluteDistance * 0.08;
    if (absoluteDistance <= 2) return 0.92 - (absoluteDistance - 1) * 0.34;
    return 0;
  });
  const rotateY = useTransform(distance, value => Math.max(-5, Math.min(5, -value * 5)));
  const zIndex = useTransform(distance, value => 5 - Math.min(Math.round(Math.abs(value)), 5));
  const isActive = virtualPosition === activePosition;
  const isAccessible = Math.abs(virtualPosition - activePosition) <= 2;
  const Icon = approachIcons[index];

  return (
    <motion.button
      type="button"
      className={`it-approach__card it-approach__card--${index}${isActive ? ' is-active' : ''}`}
      aria-label={`${String(index + 1).padStart(2, '0')}: ${step.title}${isActive ? ', selected' : ', select step'}`}
      aria-pressed={isActive}
      aria-hidden={!isAccessible}
      tabIndex={isAccessible ? 0 : -1}
      onClick={() => onSelect(virtualPosition)}
      style={{ x, scale, opacity, rotateY, zIndex, pointerEvents: isAccessible ? 'auto' : 'none' }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <div className="it-approach__card-top">
        <span className="it-approach__card-icon">
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="it-approach__card-step">
          {String(index + 1).padStart(2, '0')} / 05
        </span>
      </div>
      <ApproachArtwork variant={index} />
      <span className="it-approach__card-title">{step.title}</span>
    </motion.button>
  );
};

export const ITConsultingApproach: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const phase = useMotionValue(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const [activePosition, setActivePosition] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const [stageWidth, setStageWidth] = useState(0);
  const activePositionRef = useRef(0);
  const manualAnimation = useRef<{ stop: () => void } | null>(null);
  const manualAnimationId = useRef(0);
  const isManuallyAnimating = useRef(false);
  const pauseUntil = useRef(0);
  const slotStep = stageWidth < 640
    ? stageWidth * 0.52
    : stageWidth < 900
      ? stageWidth * 0.34
      : Math.min(stageWidth * 0.29, 340);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => setStageWidth(entry.contentRect.width));
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useEffect(() => {
    return () => {
      manualAnimationId.current += 1;
      manualAnimation.current?.stop();
    };
  }, []);

  const syncActivePosition = (value: number) => {
    const nextPosition = Math.round(value);
    if (nextPosition === activePositionRef.current) return;
    activePositionRef.current = nextPosition;
    setActivePosition(nextPosition);
  };

  useAnimationFrame((time, delta) => {
    if (reducedMotion || !pageVisible || isManuallyAnimating.current || time < pauseUntil.current || slotStep <= 0) {
      syncActivePosition(phase.get());
      return;
    }
    const elapsed = Math.min(delta, 50);
    phase.set(phase.get() + (elapsed * rotationSpeedPixelsPerSecond) / (1000 * slotStep));
    syncActivePosition(phase.get());
  });

  const moveTo = (targetPosition: number) => {
    manualAnimationId.current += 1;
    const animationId = manualAnimationId.current;
    manualAnimation.current?.stop();
    const currentPosition = phase.get();

    if (reducedMotion || targetPosition === currentPosition) {
      isManuallyAnimating.current = false;
      phase.set(targetPosition);
      syncActivePosition(targetPosition);
      pauseUntil.current = performance.now() + interactionIdlePeriod;
      return;
    }

    isManuallyAnimating.current = true;
    manualAnimation.current = animate(phase, targetPosition, {
      duration: Math.max(cardTransitionSeconds, Math.abs(targetPosition - currentPosition) * cardTransitionSeconds),
      ease: [0.22, 1, 0.36, 1],
      onUpdate: syncActivePosition,
      onComplete: () => {
        if (animationId !== manualAnimationId.current) return;
        manualAnimation.current = null;
        isManuallyAnimating.current = false;
        pauseUntil.current = performance.now() + interactionIdlePeriod;
      },
    });
  };

  const navigate = (direction: number) => moveTo(Math.round(phase.get()) + direction);
  const selectCard = (position: number) => moveTo(position);
  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStart.current = { x: event.clientX, y: event.clientY };
    swiped.current = false;
    pauseUntil.current = Number.POSITIVE_INFINITY;
  };
  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      pauseUntil.current = performance.now() + interactionIdlePeriod;
      return;
    }
    swiped.current = true;
    navigate(deltaX < 0 ? 1 : -1);
  };
  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!swiped.current) return;
    event.preventDefault();
    event.stopPropagation();
    swiped.current = false;
  };

  const activeIndex = ((activePosition % approachSteps.length) + approachSteps.length) % approachSteps.length;
  const activeStep = approachSteps[activeIndex];
  const ActiveIcon = approachIcons[activeIndex];
  const baseCycle = Math.floor(activePosition / approachSteps.length);
  const cardCopies = Array.from({ length: approachSteps.length * 3 }, (_, copyIndex) => {
    const index = copyIndex % approachSteps.length;
    const cycle = baseCycle + Math.floor(copyIndex / approachSteps.length) - 1;
    return { index, virtualPosition: cycle * approachSteps.length + index };
  });

  return (
    <section
      id="capabilities"
      className="it-approach-section py-section bg-canvas"
      aria-label="CAPABILITIES: Our IT Consulting Approach"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our IT Consulting Approach"
          description="We offer comprehensive web development solutions tailored to your business needs"
          align="center"
          className="it-approach__heading"
          animateWords
          animateWordsOnce={false}
          revealOnScrollBothDirections
        />

        <div
          className="it-approach"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => {
            pointerStart.current = null;
            pauseUntil.current = performance.now() + interactionIdlePeriod;
          }}
          onClickCapture={handleClickCapture}
        >
          <div
            ref={stageRef}
            className="it-approach__stage"
            role="group"
            aria-roledescription="carousel"
            aria-label="IT Consulting approach steps"
          >
            {cardCopies.map(({ index, virtualPosition }) => (
              <AnimatedApproachCard
                key={virtualPosition}
                step={approachSteps[index]}
                index={index}
                virtualPosition={virtualPosition}
                activePosition={activePosition}
                phase={phase}
                slotStep={slotStep}
                reducedMotion={Boolean(reducedMotion)}
                onSelect={selectCard}
              />
            ))}
          </div>

          <div className="it-approach__info" aria-live="polite" aria-atomic="true">
            <div className="it-approach__info-main">
              <span className={`it-approach__info-icon it-approach__info-icon--${activeIndex}`}>
                <ActiveIcon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="it-approach__info-copy">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeStep.title}
                    initial={reducedMotion ? false : { opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
                    transition={{ duration: reducedMotion ? 0 : 0.24 }}
                  >
                    <h3 className="it-approach__info-title">{activeStep.title}</h3>
                    <p className="it-approach__info-description">{activeStep.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="it-approach__controls" aria-label="Carousel navigation">
              <span className="it-approach__count">
                <strong>{String(activeIndex + 1).padStart(2, '0')}</strong> / 05
              </span>
              <button
                type="button"
                className="it-approach__arrow"
                aria-label="Previous approach step"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                className="it-approach__arrow it-approach__arrow--next"
                aria-label="Next approach step"
                onClick={() => navigate(1)}
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
