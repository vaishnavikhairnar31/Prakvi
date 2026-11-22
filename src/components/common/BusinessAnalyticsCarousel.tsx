import React, { useEffect, useRef, useState } from 'react';
import {
  AnimatePresence, animate, motion, useAnimationFrame, useMotionValue, useReducedMotion,
  useTransform, type MotionValue,
} from 'motion/react';
import {
  ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Monitor, Sparkles, Target, Zap,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import './BusinessAnalyticsCarousel.css';

type AnalyticsCapability = {
  title: string;
  description: string;
};

const capabilityIcons: LucideIcon[] = [BarChart3, Sparkles, Target, Zap, Monitor];
const capabilityHighlights = [
  ['historical data', 'trends', 'performance patterns'],
  ['AI', 'machine learning', 'forecast future outcomes'],
  ['data-backed strategies', 'optimal decision-making'],
  ['instant insights', 'agile business operations'],
  ['create and visualize data', 'interactive and dynamic analytics tools'],
];
const rotationSpeedPixelsPerSecond = 55;
const interactionIdlePeriod = 1500;
const cardTransitionSeconds = 0.6;

const ServiceArtwork: React.FC<{ variant: number; instanceId: string }> = ({ variant, instanceId }) => (
  <svg className="ba-carousel__artwork" viewBox="0 0 260 170" aria-hidden="true">
    <defs>
      <linearGradient id={`ba-art-panel-${instanceId}`} x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stopColor="#ffffff" stopOpacity=".96" />
        <stop offset="1" stopColor="#ffffff" stopOpacity=".58" />
      </linearGradient>
      <filter id={`ba-art-shadow-${instanceId}`} x="-30%" y="-30%" width="160%" height="170%">
        <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#41617c" floodOpacity=".15" />
      </filter>
    </defs>
    <ellipse cx="130" cy="151" rx="76" ry="10" fill="#527391" opacity=".1" />
    <g filter={`url(#ba-art-shadow-${instanceId})`}>
      <rect x="53" y="24" width="154" height="112" rx="17" fill={`url(#ba-art-panel-${instanceId})`} stroke="#ffffff" strokeWidth="2" />
      <rect x="67" y="39" width="126" height="10" rx="5" fill="#ffffff" opacity=".78" />
      <circle cx="76" cy="44" r="2" fill="#70bedc" />
      <circle cx="84" cy="44" r="2" fill="#f3b28e" />
      <circle cx="92" cy="44" r="2" fill="#a896d7" />
      {variant % 5 === 0 && (
        <>
          <path d="M75 111V93h14v18M98 111V79h14v32M121 111V87h14v24M144 111V66h14v45M167 111V76h14v35" fill="#7fcdb7" opacity=".82" />
          <path d="M73 119h111" stroke="#8eb6cb" strokeWidth="2" strokeLinecap="round" opacity=".45" />
        </>
      )}
      {variant % 5 === 1 && (
        <>
          <path d="M76 105c15-4 18-21 32-19s16 15 28 3 19-17 42-24" fill="none" stroke="#f1a47d" strokeWidth="4" strokeLinecap="round" />
          <path d="M76 112c15-4 18-15 32-13s16 10 28 2 19-12 42-17" fill="none" stroke="#f7c7ad" strokeWidth="3" strokeLinecap="round" />
          <circle cx="108" cy="86" r="5" fill="#fff" stroke="#ed9e78" strokeWidth="3" />
          <circle cx="136" cy="89" r="5" fill="#fff" stroke="#ed9e78" strokeWidth="3" />
          <circle cx="178" cy="65" r="5" fill="#fff" stroke="#ed9e78" strokeWidth="3" />
        </>
      )}
      {variant % 5 === 2 && (
        <>
          <path d="M130 65 164 83v29l-34 18-34-18V83z" fill="#d9edfb" stroke="#81bce0" strokeWidth="2" />
          <path d="m130 65 1 36m33-18-33 18-35-18m35 18v29" fill="none" stroke="#73aeda" strokeWidth="2" />
          <circle cx="130" cy="65" r="7" fill="#fff" stroke="#80b8de" strokeWidth="3" />
          <circle cx="164" cy="83" r="7" fill="#fff" stroke="#80b8de" strokeWidth="3" />
          <circle cx="96" cy="83" r="7" fill="#fff" stroke="#80b8de" strokeWidth="3" />
          <circle cx="130" cy="101" r="8" fill="#fff" stroke="#80b8de" strokeWidth="3" />
        </>
      )}
      {variant % 5 === 3 && (
        <>
          <circle cx="129" cy="88" r="29" fill="#e9e1fa" stroke="#a894d7" strokeWidth="2" />
          <circle cx="129" cy="88" r="18" fill="none" stroke="#b09bdf" strokeWidth="7" strokeDasharray="73 45" transform="rotate(-90 129 88)" />
          <circle cx="129" cy="88" r="5" fill="#9b84ce" />
          <circle cx="175" cy="67" r="9" fill="#fff" stroke="#c8b8e9" strokeWidth="3" />
          <circle cx="82" cy="105" r="7" fill="#fff" stroke="#c8b8e9" strokeWidth="3" />
        </>
      )}
      {variant % 5 === 4 && (
        <>
          <rect x="77" y="67" width="35" height="43" rx="8" fill="#d7f5f2" stroke="#75c8c0" strokeWidth="2" />
          <rect x="123" y="58" width="35" height="52" rx="8" fill="#c6efea" stroke="#75c8c0" strokeWidth="2" />
          <rect x="169" y="73" width="17" height="37" rx="7" fill="#e5faf7" stroke="#75c8c0" strokeWidth="2" />
          <path d="M84 98h20M130 97h20M84 85h13M130 82h20" stroke="#69b7af" strokeWidth="3" strokeLinecap="round" />
          <circle cx="95" cy="76" r="4" fill="#77c9c1" />
          <circle cx="141" cy="69" r="4" fill="#77c9c1" />
        </>
      )}
    </g>
    <g filter={`url(#ba-art-shadow-${instanceId})`}>
      <circle cx="47" cy="77" r="14" fill="#fff" opacity=".92" />
      <path d="m41 78 4 4 8-9" fill="none" stroke="#61b7cf" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="211" cy="111" r="12" fill="#fff" opacity=".9" />
      <path d="M205 111h12M211 105v12" stroke="#9c8bce" strokeWidth="2" strokeLinecap="round" />
    </g>
  </svg>
);

const AnimatedServiceCard: React.FC<{
  capability: AnalyticsCapability;
  index: number;
  count: number;
  virtualPosition: number;
  activePosition: number;
  phase: MotionValue<number>;
  slotStep: number;
  reducedMotion: boolean;
  capabilityIcon?: LucideIcon;
  onSelect: (position: number) => void;
}> = ({ capability, index, count, virtualPosition, activePosition, phase, slotStep, reducedMotion, capabilityIcon, onSelect }) => {
  const distance = useTransform(phase, (value) => virtualPosition - value);
  const x = useTransform(distance, (value) => `calc(-50% + ${value * slotStep}px)`);
  const scale = useTransform(distance, (value) => {
    const absoluteDistance = Math.abs(value);
    if (absoluteDistance <= 1) return 1 - absoluteDistance * 0.18;
    if (absoluteDistance <= 2) return 0.82 - (absoluteDistance - 1) * 0.16;
    return 0.66;
  });
  const opacity = useTransform(distance, (value) => {
    const absoluteDistance = Math.abs(value);
    if (absoluteDistance <= 1) return 1 - absoluteDistance * 0.08;
    if (absoluteDistance <= 2) return 0.92 - (absoluteDistance - 1) * 0.34;
    return 0;
  });
  const rotateY = useTransform(distance, (value) => Math.max(-5, Math.min(5, -value * 5)));
  const zIndex = useTransform(distance, (value) => 5 - Math.min(Math.round(Math.abs(value)), 5));
  const isActive = virtualPosition === activePosition;
  const isAccessible = Math.abs(virtualPosition - activePosition) <= 2;
  const Icon = capabilityIcon || capabilityIcons[index] || CheckCircle2;
  const instanceId = virtualPosition < 0 ? `n${Math.abs(virtualPosition)}` : `p${virtualPosition}`;

  return (
    <motion.button
      type="button"
      className={`ba-carousel__card ba-carousel__card--${index % 5}${isActive ? ' is-active' : ''}`}
      aria-label={`${capability.title}${isActive ? ', selected' : ', select service'}`}
      aria-pressed={isActive}
      aria-hidden={!isAccessible}
      tabIndex={isAccessible ? 0 : -1}
      onClick={() => onSelect(virtualPosition)}
      style={{ x, scale, opacity, rotateY, zIndex, pointerEvents: isAccessible ? 'auto' : 'none' }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <div className="ba-carousel__card-top">
        <span className="ba-carousel__icon"><Icon size={18} strokeWidth={1.8} aria-hidden="true" /></span>
        <span className="ba-carousel__step">{String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
      </div>
      <ServiceArtwork variant={index} instanceId={instanceId} />
      <span className="ba-carousel__card-title">{capability.title}</span>
    </motion.button>
  );
};

export const BusinessAnalyticsCarousel: React.FC<{
  title: string;
  description: string;
  capabilities: AnalyticsCapability[];
  badge?: string;
  align?: 'left' | 'center';
  sectionClassName?: string;
  carouselLabel?: string;
  capabilityHighlights?: string[][];
  capabilityIcons?: LucideIcon[];
  updateInfoImmediately?: boolean;
  animateHeadingWords?: boolean;
}> = ({
  title,
  description,
  capabilities,
  badge,
  align = 'left',
  sectionClassName = '',
  carouselLabel = 'Business analytics services',
  capabilityHighlights: customCapabilityHighlights,
  capabilityIcons: customCapabilityIcons,
  updateInfoImmediately = false,
  animateHeadingWords = false,
}) => {
  const reducedMotion = useReducedMotion();
  const phase = useMotionValue(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const [activePosition, setActivePosition] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const [stageWidth, setStageWidth] = useState(0);
  const slotStep = stageWidth < 640 ? stageWidth * 0.52
    : stageWidth < 900 ? stageWidth * 0.34
      : Math.min(stageWidth * 0.29, 340);
  const activePositionRef = useRef(0);
  const manualAnimation = useRef<{ stop: () => void } | null>(null);
  const manualAnimationId = useRef(0);
  const isManuallyAnimating = useRef(false);
  const pauseUntil = useRef(0);

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
  };
  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    const start = pointerStart.current;
    pointerStart.current = null;
    if (!start) return;
    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
    swiped.current = true;
    navigate(deltaX < 0 ? 1 : -1);
  };
  const handleClickCapture = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!swiped.current) return;
    event.preventDefault();
    event.stopPropagation();
    swiped.current = false;
  };
  const activeIndex = ((activePosition % capabilities.length) + capabilities.length) % capabilities.length;
  const activeCapability = capabilities[activeIndex];
  const ActiveIcon = (customCapabilityIcons?.[activeIndex] || capabilityIcons[activeIndex]) || CheckCircle2;
  const baseCycle = Math.floor(activePosition / capabilities.length);
  const cardCopies = Array.from({ length: capabilities.length * 3 }, (_, copyIndex) => {
    const index = copyIndex % capabilities.length;
    const cycle = baseCycle + Math.floor(copyIndex / capabilities.length) - 1;
    const virtualPosition = cycle * capabilities.length + index;
    return { index, virtualPosition };
  });
  if (!activeCapability) return null;

  const activeInfoContent = (
    <motion.div
      key={activeCapability.title}
      initial={reducedMotion ? false : { opacity: 0, y: 7 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
      transition={{ duration: reducedMotion ? 0 : 0.24 }}
    >
      <h3 className="ba-carousel__info-title">{activeCapability.title}</h3>
      <p className="ba-carousel__info-description">{activeCapability.description}</p>
      <ul className="ba-carousel__highlights" aria-label="Key features">
        {(customCapabilityHighlights?.[activeIndex] || capabilityHighlights[activeIndex] || []).map((highlight) => (
          <li key={highlight}><CheckCircle2 size={14} aria-hidden="true" />{highlight}</li>
        ))}
      </ul>
    </motion.div>
  );

  return (
    <section id="capabilities" className={`ba-carousel-section py-section bg-canvas${sectionClassName ? ` ${sectionClassName}` : ''}`}>
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          badge={badge}
          title={title}
          description={description}
          align={align}
          animateWords={animateHeadingWords}
          animateWordsOnce={false}
          revealOnScrollBothDirections={animateHeadingWords}
        />

        <div
          className="ba-carousel"
          style={{ touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { pointerStart.current = null; }}
          onClickCapture={handleClickCapture}
        >
          <div ref={stageRef} className="ba-carousel__stage" role="group" aria-roledescription="carousel" aria-label={carouselLabel}>
            {cardCopies.map(({ index, virtualPosition }) => {
              const capability = capabilities[index];
              return (
                <AnimatedServiceCard
                  key={virtualPosition}
                  capability={capability}
                  index={index}
                  count={capabilities.length}
                  virtualPosition={virtualPosition}
                  activePosition={activePosition}
                  phase={phase}
                  slotStep={slotStep}
                  reducedMotion={Boolean(reducedMotion)}
                  capabilityIcon={customCapabilityIcons?.[index]}
                  onSelect={selectCard}
                />
              );
            })}
          </div>

          <div className="ba-carousel__info" aria-live="polite" aria-atomic="true">
            <div className="ba-carousel__info-main">
              <span className="ba-carousel__info-icon"><ActiveIcon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
              <div className="ba-carousel__info-copy">
                {updateInfoImmediately ? activeInfoContent : (
                  <AnimatePresence mode="wait" initial={false}>
                    {activeInfoContent}
                  </AnimatePresence>
                )}
              </div>
            </div>
            <div className="ba-carousel__controls" aria-label="Carousel navigation">
              <span className="ba-carousel__count"><strong>{String(activeIndex + 1).padStart(2, '0')}</strong> / {String(capabilities.length).padStart(2, '0')}</span>
              <button type="button" className="ba-carousel__arrow" aria-label="Previous service" onClick={() => navigate(-1)}>
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className="ba-carousel__arrow ba-carousel__arrow--next" aria-label="Next service" onClick={() => navigate(1)}>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
