import React, { useCallback, useEffect, useId, useRef, useState } from 'react';
import { motion, useAnimationFrame, useInView, useMotionValue, useReducedMotion } from 'motion/react';
import { Activity, ArrowUpRight, Database, Pause, Play, Search, Sparkles, Target, TrendingUp, Zap, type LucideIcon } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { ScrollRevealText } from './ScrollRevealText';
import './BusinessAnalyticsJourney.css';

const stepIcons: LucideIcon[] = [Database, Sparkles, Search, TrendingUp, Target, Zap, Activity];
const stageDuration = 4000;
const hoverDelay = 650;
const ease = [0.22, 1, 0.36, 1] as const;

type JourneyStep = ServiceItem['deliverySteps'][number];

function getConnectorPath(from: DOMRect, to: DOMRect, wrap: DOMRect) {
  const scaleX = 1000 / wrap.width;
  const scaleY = 1000 / wrap.height;
  const center = (rect: DOMRect) => ({
    x: (rect.left + rect.width / 2 - wrap.left) * scaleX,
    y: (rect.top + rect.height / 2 - wrap.top) * scaleY,
  });
  const startCenter = center(from);
  const endCenter = center(to);
  const dx = endCenter.x - startCenter.x;
  const dy = endCenter.y - startCenter.y;
  const distance = Math.hypot(dx, dy) || 1;
  const directionX = dx / distance;
  const directionY = dy / distance;

  const edge = (rect: DOMRect, direction: { x: number; y: number }) => {
    const halfWidth = rect.width * scaleX / 2;
    const halfHeight = rect.height * scaleY / 2;
    const distanceToEdge = 1 / Math.max(Math.abs(direction.x) / halfWidth, Math.abs(direction.y) / halfHeight);
    const point = center(rect);
    return {
      x: point.x + direction.x * distanceToEdge,
      y: point.y + direction.y * distanceToEdge,
    };
  };

  const start = edge(from, { x: directionX, y: directionY });
  const end = edge(to, { x: -directionX, y: -directionY });
  const horizontalDistance = end.x - start.x;
  const verticalDistance = end.y - start.y;

  if (Math.abs(horizontalDistance) > Math.abs(verticalDistance)) {
    const handle = Math.min(Math.abs(horizontalDistance) * 0.46, 155) * Math.sign(horizontalDistance);
    return `M ${start.x} ${start.y} C ${start.x + handle} ${start.y + verticalDistance * 0.2}, ${end.x - handle} ${end.y - verticalDistance * 0.2}, ${end.x} ${end.y}`;
  }

  const side = (start.x + end.x) / 2 + (verticalDistance >= 0 ? 1 : -1) * 30;
  return `M ${start.x} ${start.y} C ${side} ${start.y + verticalDistance * 0.36}, ${side} ${end.y - verticalDistance * 0.36}, ${end.x} ${end.y}`;
}

interface BusinessAnalyticsJourneyProps {
  title: string;
  description: string;
  steps: JourneyStep[];
}

export function BusinessAnalyticsJourney({ title, description, steps }: BusinessAnalyticsJourneyProps) {
  const section = useRef<HTMLElement>(null);
  const route = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);
  const pointerInteraction = useRef(false);
  const progress = useMotionValue(0);
  const reducedMotion = Boolean(useReducedMotion());
  const inView = useInView(section, { amount: 0.08 });
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reading, setReading] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [connectorPaths, setConnectorPaths] = useState<string[]>([]);
  const instanceId = useId().replace(/:/g, '');
  const canAdvance = inView && pageVisible && playing && !hovering && !focused && !reading
    && !reducedMotion && steps.length > 1;

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      document.removeEventListener('visibilitychange', updateVisibility);
      if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    };
  }, []);

  useEffect(() => {
    const wrapper = route.current;
    if (!wrapper) return;

    let frame = 0;
    const updatePaths = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const bounds = wrapper.getBoundingClientRect();
        const paths = cards.current.slice(0, steps.length - 1).map((card, index) => {
          const next = cards.current[index + 1];
          return card && next
            ? getConnectorPath(card.getBoundingClientRect(), next.getBoundingClientRect(), bounds)
            : '';
        });
        setConnectorPaths(paths);
      });
    };

    const observer = new ResizeObserver(updatePaths);
    observer.observe(wrapper);
    cards.current.forEach(card => { if (card) observer.observe(card); });
    window.addEventListener('resize', updatePaths);
    updatePaths();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('resize', updatePaths);
    };
  }, [steps.length]);

  const tick = useCallback((_time: number, delta: number) => {
    if (!canAdvance) return;
    const next = progress.get() + Math.min(delta, 100) / stageDuration;
    if (next >= 1) {
      progress.set(0);
      const nextActive = (activeRef.current + 1) % steps.length;
      activeRef.current = nextActive;
      setActive(nextActive);
      return;
    }
    progress.set(next);
  }, [canAdvance, progress, steps.length]);

  useAnimationFrame(tick);

  const selectStep = (index: number) => {
    if (index === activeRef.current) return;
    activeRef.current = index;
    progress.set(0);
    setActive(index);
  };

  const previewStep = (index: number) => {
    if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    setHovering(true);
    selectStep(index);
  };

  const resume = () => {
    if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      resumeTimer.current = null;
      setHovering(false);
    }, hoverDelay);
  };

  const positions = steps.map((_, index) => {
    const vertical = steps.length === 1 ? 50 : 10 + index * (80 / (steps.length - 1));
    return { x: index % 2 === 0 ? 28 : 73, y: vertical };
  });
  const mobilePositions = steps.map((_, index) => ({
    x: 50,
    y: steps.length === 1 ? 50 : 7 + index * (86 / (steps.length - 1)),
  }));
  const selectedStep = steps[active];
  if (!selectedStep) return null;
  const routeHeight = Math.min(42, 20 + steps.length * 2.25);
  const mobileRouteHeight = Math.min(52, 22 + steps.length * 3.1);
  return (
    <section
      ref={section}
      id="process"
      className="ba-journey"
      aria-labelledby={`${instanceId}-title`}
      data-moving={inView && pageVisible && !reducedMotion}
      data-running={canAdvance}
      onPointerDownCapture={() => {
        pointerInteraction.current = true;
        setFocused(false);
      }}
      onKeyDownCapture={() => { pointerInteraction.current = false; }}
      onFocusCapture={event => {
        if (!pointerInteraction.current && event.target.matches(':focus-visible')) setFocused(true);
      }}
      onBlurCapture={event => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <div className="ba-journey__inner">
        <header className="ba-journey__heading">
          <motion.h2
            id={`${instanceId}-title`}
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: reducedMotion ? 0 : 0.63, ease }}
          >
            <ScrollRevealText text={title} preserveLayout />
          </motion.h2>
          <p>{description}</p>
        </header>

        <div className="ba-journey__workspace">
          <div
            ref={route}
            className="ba-journey__route"
            data-extended={steps.length >= 7 ? 'true' : undefined}
            style={{
              '--ba-route-height': `${routeHeight}rem`,
              '--ba-mobile-route-height': `${mobileRouteHeight}rem`,
            } as React.CSSProperties}
            role="group"
            aria-label="Business Analytics workflow"
          >
            <div className="ba-journey__atmosphere" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
            </div>
            <svg className="ba-journey__paths" viewBox="0 0 1000 1000" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id={`${instanceId}-route`} x2=".86" y2="1">
                  <stop stopColor="#7ab9d7" stopOpacity=".35" />
                  <stop offset=".32" stopColor="#6badd2" />
                  <stop offset=".68" stopColor="#8b96cf" />
                  <stop offset="1" stopColor="#cf9572" stopOpacity=".65" />
                </linearGradient>
                <linearGradient id={`${instanceId}-active`} x2="1" y2=".54">
                  <stop stopColor="#51a0ca" />
                  <stop offset=".62" stopColor="#438fcd" />
                  <stop offset="1" stopColor="#ce895e" />
                </linearGradient>
              </defs>
              {connectorPaths.map((path, index) => (
                path ? (
                  <g key={index}>
                    <path d={path} className="ba-journey__track-aura" />
                    <path d={path} className="ba-journey__track" stroke={`url(#${instanceId}-route)`} />
                    <motion.path
                      d={path}
                      className="ba-journey__track-active"
                      stroke={`url(#${instanceId}-active)`}
                      initial={false}
                      animate={{ opacity: index < active || index === active ? 1 : 0 }}
                      style={{
                        pathLength: index < active ? 1 : index === active ? progress : 0,
                      }}
                    />
                  </g>
                ) : null
              ))}
            </svg>

            <div className="ba-journey__nodes" role="group" aria-label="Business Analytics process steps">
              {steps.map((step, index) => {
                const Icon = stepIcons[index] ?? Activity;
                const position = positions[index];
                const mobilePosition = mobilePositions[index];
                const selected = index === active;
                return (
                  <div
                    className="ba-journey__node-position"
                    key={step.step}
                    style={{
                      '--ba-x': `${position.x}%`,
                      '--ba-y': `${position.y}%`,
                      '--ba-mobile-x': `${mobilePosition.x}%`,
                      '--ba-mobile-y': `${mobilePosition.y}%`,
                      '--ba-index': index,
                    } as React.CSSProperties}
                    onPointerEnter={event => {
                      if (event.pointerType === 'mouse') {
                        setFocused(false);
                        previewStep(index);
                      }
                    }}
                    onPointerLeave={event => { if (event.pointerType === 'mouse') resume(); }}
                  >
                    <div className="ba-journey__node-float">
                      <motion.button
                        ref={node => { cards.current[index] = node; }}
                        type="button"
                        className="ba-journey__node"
                        aria-pressed={selected}
                        aria-label={`Step ${step.step}: ${step.title}${selected ? ', selected' : ''}`}
                        onFocus={() => selectStep(index)}
                        onClick={() => selectStep(index)}
                        whileHover={reducedMotion ? undefined : { y: -4, scale: 1.026 }}
                        whileTap={reducedMotion ? undefined : { scale: .99 }}
                        initial={reducedMotion ? false : { opacity: 0, x: index % 2 ? 26 : -26 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: .2 }}
                        transition={{ duration: reducedMotion ? 0 : .68, delay: reducedMotion ? 0 : .12 + index * .09, ease }}
                      >
                        <span className="ba-journey__node-icon"><Icon aria-hidden="true" /></span>
                        <span className="ba-journey__node-number">{step.step}</span>
                        <span className="ba-journey__node-title">{step.title}</span>
                        <ArrowUpRight className="ba-journey__node-arrow" aria-hidden="true" />
                      </motion.button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.aside
            className="ba-journey__glass"
            initial={reducedMotion ? false : { opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: reducedMotion ? 0 : .72, delay: reducedMotion ? 0 : .24, ease }}
            onPointerEnter={event => {
              if (event.pointerType === 'mouse') {
                setFocused(false);
                setReading(true);
              }
            }}
            onPointerLeave={event => { if (event.pointerType === 'mouse') setReading(false); }}
          >
            <div className="ba-journey__details" aria-live="polite" aria-atomic="true">
              {steps.map((step, index) => {
                const Icon = stepIcons[index] ?? Activity;
                const selected = index === active;
                return (
                  <motion.div
                    key={step.step}
                    id={`${instanceId}-detail-${index}`}
                    className="ba-journey__detail"
                    aria-hidden={!selected}
                    inert={!selected}
                    initial={false}
                    animate={selected ? 'shown' : 'hidden'}
                    variants={{
                      shown: {
                        opacity: 1,
                        y: reducedMotion ? 0 : [14, 0],
                        visibility: 'visible',
                        transition: { duration: reducedMotion ? 0 : .39, delay: reducedMotion ? 0 : .05, ease },
                      },
                      hidden: {
                        opacity: 0,
                        y: reducedMotion ? 0 : -12,
                        transition: { duration: reducedMotion ? 0 : .16, ease },
                        transitionEnd: { visibility: 'hidden' },
                      },
                    }}
                  >
                    <div className="ba-journey__detail-meta">
                      <span className="ba-journey__detail-icon"><Icon aria-hidden="true" /></span>
                      <span className="ba-journey__detail-number">{step.step}</span>
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    {step.points?.length ? (
                      <ul>
                        {step.points.map(point => <li key={point}>{point}</li>)}
                      </ul>
                    ) : null}
                  </motion.div>
                );
              })}
            </div>

            <div className="ba-journey__status">
              <div className="ba-journey__progress" role="group" aria-label="Select a workflow step">
                {steps.map((step, index) => (
                  <button
                    key={step.step}
                    type="button"
                    aria-label={`Show step ${step.step}: ${step.title}`}
                    aria-pressed={index === active}
                    data-past={index < active}
                    data-current={index === active}
                    onClick={() => selectStep(index)}
                  >
                    <span>
                      {index === active && <motion.i style={{ scaleX: reducedMotion || !playing || hovering ? 1 : progress }} />}
                    </span>
                  </button>
                ))}
              </div>
              <span className="ba-journey__count">
                STEP {selectedStep.step} <span>/ {String(steps.length).padStart(2, '0')}</span>
              </span>
              {!reducedMotion && (
                <button
                  type="button"
                  className="ba-journey__playback"
                  aria-label={playing ? 'Pause automatic progression' : 'Resume automatic progression'}
                  aria-pressed={playing}
                  onClick={() => setPlaying(current => {
                    if (!current) {
                      setHovering(false);
                      setFocused(false);
                      setReading(false);
                    }
                    return !current;
                  })}
                >
                  {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                </button>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
