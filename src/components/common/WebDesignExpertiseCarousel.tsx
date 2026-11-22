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
  ArrowLeft,
  ArrowRight,
  Gauge,
  LayoutGrid,
  Palette,
  ShoppingCart,
  Smartphone,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { SectionHeading } from './SectionHeading';
import './WebDesignExpertiseCarousel.css';

type WebDesignCapability = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const capabilities: WebDesignCapability[] = [
  {
    title: 'Custom Website Design',
    description: 'We craft unique, brand-aligned designs that capture your vision and resonate with your audience.',
    icon: Palette,
  },
  {
    title: 'Responsive & Mobile-First Development',
    description: 'With most users browsing on mobile, we ensure your website adapts flawlessly across all screen sizes for a smooth, immersive experience.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Optimization',
    description: 'A well-designed website isn’t just about looks, it’s about usability. We focus on intuitive navigation, clear call-to-actions, and seamless user flow to maximize engagement and conversions.',
    icon: Sparkles,
  },
  {
    title: 'SEO & Speed Optimization',
    description: 'A beautiful website won’t perform if it’s slow or hard to find. We implement the best SEO practices, fast-loading architecture, and technical enhancements to improve search rankings and user experience.',
    icon: Gauge,
  },
  {
    title: 'eCommerce Web Design',
    description: 'We build high-converting, secure, and scalable eCommerce websites for businesses selling online that offer a hassle-free shopping experience.',
    icon: ShoppingCart,
  },
  {
    title: 'CMS Development & Website Revamps',
    description: 'Whether you need a fresh start or a strategic redesign, we offer custom CMS solutions and modern revamps to keep your website dynamic and easy to manage.',
    icon: LayoutGrid,
  },
];

const WebDesignArtwork: React.FC<{ index: number }> = ({ index }) => {
  if (index === 0) {
    return (
      <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
        <rect x="18" y="12" width="224" height="144" rx="13" fill="#fff" stroke="#d9e8f1" />
        <rect x="18" y="12" width="224" height="24" rx="13" fill="#edf7fb" />
        <circle cx="31" cy="24" r="3" fill="#efb394" />
        <circle cx="42" cy="24" r="3" fill="#c8b4ed" />
        <circle cx="53" cy="24" r="3" fill="#8cddc9" />
        <rect x="85" y="20" width="52" height="7" rx="3.5" fill="#a8c1d2" />
        <rect x="30" y="48" width="92" height="92" rx="8" fill="#f3edff" />
        <rect x="40" y="59" width="72" height="8" rx="4" fill="#b5a1df" className="web-art-reveal" />
        <rect x="40" y="76" width="58" height="5" rx="2.5" fill="#c7b9ea" className="web-art-reveal web-art-reveal--two" />
        <rect x="40" y="86" width="48" height="5" rx="2.5" fill="#d1c7ec" className="web-art-reveal web-art-reveal--three" />
        <rect x="40" y="101" width="34" height="16" rx="8" fill="#9e86d1" />
        <rect x="132" y="48" width="98" height="92" rx="8" fill="#f8fbfd" />
        <rect x="143" y="60" width="76" height="42" rx="7" fill="#d8edf7" />
        <circle cx="181" cy="81" r="13" fill="#fff" />
        <path d="M174 81l5 5 10-12" fill="none" stroke="#72b7d7" strokeWidth="3" strokeLinecap="round" />
        <rect x="143" y="112" width="34" height="17" rx="5" fill="#b9dfef" />
        <rect x="183" y="112" width="36" height="17" rx="5" fill="#e7def8" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
        <ellipse cx="130" cy="149" rx="82" ry="8" fill="#72b4bd" opacity=".12" />
        <g className="web-art-device web-art-device--desktop">
          <rect x="48" y="27" width="164" height="98" rx="9" fill="#fff" stroke="#87cad0" strokeWidth="2" />
          <rect x="58" y="37" width="144" height="76" rx="5" fill="#edfafd" />
          <rect x="68" y="48" width="54" height="7" rx="3.5" fill="#79c3c7" />
          <rect x="68" y="64" width="124" height="38" rx="6" fill="#d5f1f1" />
          <rect x="78" y="74" width="42" height="18" rx="5" fill="#fff" />
          <rect x="124" y="69" width="58" height="28" rx="6" fill="#abe1de" />
          <rect x="118" y="125" width="24" height="9" fill="#a8ccd2" />
          <rect x="99" y="134" width="62" height="5" rx="2.5" fill="#82bbc1" />
        </g>
        <g className="web-art-device web-art-device--tablet">
          <rect x="18" y="70" width="62" height="78" rx="8" fill="#fff" stroke="#91c7d2" strokeWidth="2" />
          <rect x="25" y="78" width="48" height="58" rx="4" fill="#eaf8f9" />
          <circle cx="49" cy="142" r="2.5" fill="#91c7d2" />
        </g>
        <g className="web-art-device web-art-device--phone">
          <rect x="194" y="72" width="42" height="77" rx="9" fill="#fff" stroke="#91c7d2" strokeWidth="2" />
          <rect x="201" y="82" width="28" height="55" rx="4" fill="#eaf8f9" />
          <circle cx="215" cy="142" r="2" fill="#91c7d2" />
        </g>
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
        <rect x="18" y="12" width="224" height="144" rx="13" fill="#fff" stroke="#dbe9e8" />
        <rect x="18" y="12" width="224" height="24" rx="13" fill="#eef9f7" />
        <rect x="30" y="44" width="50" height="100" rx="8" fill="#edf8f6" />
        <rect x="38" y="55" width="34" height="7" rx="3.5" fill="#79bdad" />
        <rect x="38" y="71" width="28" height="5" rx="2.5" fill="#add3ca" />
        <rect x="38" y="83" width="32" height="5" rx="2.5" fill="#add3ca" />
        <rect x="38" y="95" width="24" height="5" rx="2.5" fill="#add3ca" />
        <rect x="91" y="44" width="139" height="100" rx="8" fill="#fafdfc" />
        <rect x="103" y="56" width="115" height="20" rx="6" fill="#dff3ed" />
        <rect x="103" y="86" width="49" height="42" rx="7" fill="#cbece4" className="web-art-highlight" />
        <rect x="160" y="86" width="58" height="42" rx="7" fill="#edf8f6" />
        <rect x="112" y="96" width="31" height="7" rx="3.5" fill="#87c8b7" />
        <rect x="112" y="108" width="21" height="7" rx="3.5" fill="#a7d7cb" />
        <g className="web-art-cursor">
          <path d="M194 119l8 26 6-9 9-3z" fill="#fff" stroke="#65b7a4" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="194" cy="119" r="4" fill="#65b7a4" />
        </g>
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
        <rect x="18" y="12" width="224" height="144" rx="13" fill="#fff" stroke="#eee2da" />
        <circle cx="74" cy="76" r="38" fill="#fff5ef" stroke="#eac1a8" />
        <circle cx="74" cy="76" r="27" fill="none" stroke="#efb394" strokeWidth="10" strokeDasharray="98 72" transform="rotate(-90 74 76)" className="web-art-speed" />
        <path d="M74 76l19-17" stroke="#d98d67" strokeWidth="4" strokeLinecap="round" />
        <circle cx="74" cy="76" r="5" fill="#d98d67" />
        <g transform="translate(127 44)">
          <rect width="102" height="46" rx="10" fill="#fff4ed" stroke="#edc3aa" />
          <circle cx="18" cy="23" r="13" fill="#fff" stroke="#d99b76" strokeWidth="2" />
          <circle cx="18" cy="23" r="5" fill="none" stroke="#d99b76" strokeWidth="2" />
          <rect x="38" y="13" width="50" height="6" rx="3" fill="#dda17f" />
          <rect x="38" y="26" width="38" height="5" rx="2.5" fill="#edc2aa" />
        </g>
        <rect x="127" y="102" width="102" height="51" rx="10" fill="#fff9f5" stroke="#f0d4c3" />
        <path d="M137 139l17-13 15 7 18-18 31 4" fill="none" stroke="#e79d77" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="web-art-trend" />
        <circle cx="218" cy="119" r="4" fill="#e79d77" />
      </svg>
    );
  }

  if (index === 4) {
    return (
      <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
        <rect x="18" y="12" width="224" height="144" rx="13" fill="#fff" stroke="#d3e5f2" />
        <rect x="18" y="12" width="224" height="24" rx="13" fill="#edf7ff" />
        <rect x="30" y="20" width="54" height="7" rx="3.5" fill="#93bdd8" />
        <circle cx="222" cy="24" r="7" fill="#fff" stroke="#8bbad8" />
        <path d="M219 24h6M222 21v6" stroke="#81b9df" strokeWidth="1.5" />
        <g className="web-art-product">
          <rect x="30" y="48" width="58" height="92" rx="9" fill="#edf7ff" stroke="#b8d7ed" />
          <rect x="38" y="58" width="42" height="42" rx="7" fill="#d2e8f7" />
          <circle cx="59" cy="79" r="11" fill="#fff" />
          <rect x="38" y="108" width="42" height="6" rx="3" fill="#91bdd9" />
          <rect x="38" y="120" width="29" height="6" rx="3" fill="#bdd7e8" />
        </g>
        <g className="web-art-product web-art-product--two">
          <rect x="101" y="48" width="58" height="92" rx="9" fill="#edf7ff" stroke="#b8d7ed" />
          <rect x="109" y="58" width="42" height="42" rx="7" fill="#d9ecf8" />
          <path d="M130 64l12 24h-24z" fill="#fff" stroke="#91badd" strokeWidth="2" />
          <rect x="109" y="108" width="42" height="6" rx="3" fill="#91bdd9" />
          <rect x="109" y="120" width="29" height="6" rx="3" fill="#bdd7e8" />
        </g>
        <g className="web-art-cart">
          <rect x="172" y="48" width="58" height="92" rx="9" fill="#f8fbfd" stroke="#c8dce9" />
          <circle cx="187" cy="66" r="8" fill="#d7ebf7" />
          <path d="M181 66h12l4 30h-20z" fill="#fff" stroke="#81b9df" strokeWidth="2" />
          <circle cx="184" cy="102" r="3" fill="#81b9df" />
          <circle cx="193" cy="102" r="3" fill="#81b9df" />
          <rect x="181" y="112" width="40" height="14" rx="7" fill="#81b9df" />
          <rect x="188" y="117" width="26" height="4" rx="2" fill="#fff" />
        </g>
      </svg>
    );
  }

  return (
    <svg className="web-expertise-artwork" viewBox="0 0 260 168" aria-hidden="true">
      <rect x="18" y="12" width="224" height="144" rx="13" fill="#fff" stroke="#e2ddce" />
      <rect x="18" y="12" width="224" height="24" rx="13" fill="#f7f4ec" />
      <rect x="30" y="20" width="78" height="7" rx="3.5" fill="#bfb49a" />
      <rect x="18" y="36" width="48" height="120" rx="0" fill="#f3f1e8" />
      <rect x="29" y="49" width="26" height="7" rx="3.5" fill="#c7b98f" />
      <rect x="29" y="66" width="22" height="5" rx="2.5" fill="#ded6bc" />
      <rect x="29" y="78" width="27" height="5" rx="2.5" fill="#ded6bc" />
      <rect x="29" y="90" width="19" height="5" rx="2.5" fill="#ded6bc" />
      <rect x="78" y="48" width="152" height="96" rx="8" fill="#fbfaf7" stroke="#e7e1d3" />
      <rect x="88" y="58" width="132" height="22" rx="6" fill="#eee9dc" />
      <rect x="98" y="64" width="58" height="7" rx="3.5" fill="#b9ad8e" className="web-art-edit" />
      <rect x="88" y="89" width="58" height="43" rx="7" fill="#dceaf1" />
      <rect x="153" y="89" width="67" height="43" rx="7" fill="#f2eadb" />
      <rect x="98" y="99" width="38" height="6" rx="3" fill="#a9c7d5" />
      <rect x="98" y="112" width="28" height="6" rx="3" fill="#c4d7df" />
      <rect x="164" y="99" width="45" height="6" rx="3" fill="#d1c19a" />
      <rect x="164" y="112" width="34" height="6" rx="3" fill="#dfd5b8" />
    </svg>
  );
};

const CarouselCard: React.FC<{
  capability: WebDesignCapability;
  index: number;
  count: number;
  virtualPosition: number;
  activePosition: number;
  phase: MotionValue<number>;
  slotStep: number;
  reducedMotion: boolean;
  onSelect: (position: number) => void;
}> = ({
  capability,
  index,
  count,
  virtualPosition,
  activePosition,
  phase,
  slotStep,
  reducedMotion,
  onSelect,
}) => {
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
  const Icon = capability.icon;

  return (
    <motion.button
      type="button"
      className={`web-expertise-card web-expertise-card--${index}${isActive ? ' is-active' : ''}`}
      aria-label={`${capability.title}${isActive ? ', selected' : ', select service'}`}
      aria-pressed={isActive}
      aria-hidden={!isAccessible}
      tabIndex={isAccessible ? 0 : -1}
      onClick={() => onSelect(virtualPosition)}
      style={{ x, scale, opacity, rotateY, zIndex, pointerEvents: isAccessible ? 'auto' : 'none' }}
      whileHover={reducedMotion ? undefined : { y: -6 }}
    >
      <div className="web-expertise-card__top">
        <span className="web-expertise-card__icon">
          <Icon size={19} strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="web-expertise-card__step">
          {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
        </span>
      </div>
      <div className="web-expertise-card__art" aria-hidden="true">
        <WebDesignArtwork index={index} />
      </div>
      <span className="web-expertise-card__title">{capability.title}</span>
    </motion.button>
  );
};

export const WebDesignExpertiseCarousel: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const phase = useMotionValue(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const swiped = useRef(false);
  const [activePosition, setActivePosition] = useState(0);
  const [pageVisible, setPageVisible] = useState(true);
  const [stageWidth, setStageWidth] = useState(0);
  const [hovered, setHovered] = useState(false);
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

  useEffect(() => () => {
    manualAnimationId.current += 1;
    manualAnimation.current?.stop();
  }, []);

  const syncActivePosition = (value: number) => {
    const nextPosition = Math.round(value);
    if (nextPosition === activePositionRef.current) return;
    activePositionRef.current = nextPosition;
    setActivePosition(nextPosition);
  };

  useAnimationFrame((time, delta) => {
    if (
      reducedMotion
      || !pageVisible
      || hovered
      || isManuallyAnimating.current
      || time < pauseUntil.current
      || slotStep <= 0
    ) {
      syncActivePosition(phase.get());
      return;
    }
    const elapsed = Math.min(delta, 50);
    phase.set(phase.get() + (elapsed * 55) / (1000 * slotStep));
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
      pauseUntil.current = performance.now() + 1500;
      return;
    }

    isManuallyAnimating.current = true;
    manualAnimation.current = animate(phase, targetPosition, {
      duration: Math.max(0.6, Math.abs(targetPosition - currentPosition) * 0.6),
      ease: [0.22, 1, 0.36, 1],
      onUpdate: syncActivePosition,
      onComplete: () => {
        if (animationId !== manualAnimationId.current) return;
        manualAnimation.current = null;
        isManuallyAnimating.current = false;
        pauseUntil.current = performance.now() + 1500;
      },
    });
  };

  const navigate = (direction: number) => moveTo(Math.round(phase.get()) + direction);
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
  const ActiveIcon = activeCapability.icon;
  const baseCycle = Math.floor(activePosition / capabilities.length);
  const cardCopies = Array.from({ length: capabilities.length * 3 }, (_, copyIndex) => {
    const index = copyIndex % capabilities.length;
    const cycle = baseCycle + Math.floor(copyIndex / capabilities.length) - 1;
    return { index, virtualPosition: cycle * capabilities.length + index };
  });

  return (
    <section id="capabilities" className="web-expertise-section py-section bg-canvas">
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <SectionHeading
          title="Our Web Design Expertise"
          description="We offer comprehensive web development solutions tailored to your business needs"
          align="center"
          animateWords
          animateWordsOnce={false}
          revealOnScrollBothDirections
        />

        <div
          className="web-expertise-carousel"
          style={{ touchAction: 'pan-y' }}
          onPointerEnter={(event) => {
            if (event.pointerType !== 'touch') setHovered(true);
          }}
          onPointerLeave={() => setHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={() => { pointerStart.current = null; }}
          onClickCapture={handleClickCapture}
        >
          <div
            ref={stageRef}
            className="web-expertise-stage"
            role="group"
            aria-roledescription="carousel"
            aria-label="Web Design services"
          >
            {cardCopies.map(({ index, virtualPosition }) => (
              <CarouselCard
                key={virtualPosition}
                capability={capabilities[index]}
                index={index}
                count={capabilities.length}
                virtualPosition={virtualPosition}
                activePosition={activePosition}
                phase={phase}
                slotStep={slotStep}
                reducedMotion={Boolean(reducedMotion)}
                onSelect={moveTo}
              />
            ))}
          </div>

          <div className="web-expertise-info" aria-live="polite" aria-atomic="true">
            <div className="web-expertise-info__main">
              <span className="web-expertise-info__icon">
                <ActiveIcon size={20} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <div className="web-expertise-info__copy">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={activeCapability.title}
                    initial={reducedMotion ? false : { opacity: 0, y: 7 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reducedMotion ? undefined : { opacity: 0, y: -5 }}
                    transition={{ duration: reducedMotion ? 0 : 0.24 }}
                  >
                    <h3>{activeCapability.title}</h3>
                    <p>{activeCapability.description}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div className="web-expertise-info__controls" aria-label="Carousel navigation">
              <span className="web-expertise-info__count">
                <strong>{String(activeIndex + 1).padStart(2, '0')}</strong> / {String(capabilities.length).padStart(2, '0')}
              </span>
              <button type="button" aria-label="Previous service" onClick={() => navigate(-1)}>
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" className="is-next" aria-label="Next service" onClick={() => navigate(1)}>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
