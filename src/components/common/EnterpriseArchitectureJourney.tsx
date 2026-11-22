import React, { useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from 'react';
import { AnimatePresence, motion, useAnimationFrame, useInView, useMotionValue, useScroll } from 'motion/react';
import { Activity, ArrowUpRight, Cable, ChartColumn, ClipboardList, FileChartColumn, Layers3, Megaphone, Network, Pause, PenLine, Play, Route, ScanSearch, Search, ShieldCheck, SlidersHorizontal, type LucideIcon } from 'lucide-react';
import { ScrollRevealText } from './ScrollRevealText';
import type { ServiceItem } from '../../types';
import './EnterpriseArchitectureJourney.css';

const stepIcons = [ScanSearch, Network, ShieldCheck, Route, Cable, Activity];
const campaignIcons = [ScanSearch, ClipboardList, PenLine, Megaphone, Search, ChartColumn, SlidersHorizontal, FileChartColumn];
const stageDuration = 4000;
const hoverDelay = 650;
const ease = [0.22, 1, 0.36, 1] as const;
const revealViewport = { once: true, amount: 0.2 } as const;
const compactQuery = '(max-width: 639px)';
const reducedQuery = '(prefers-reduced-motion: reduce)';

function subscribe(query: string, update: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener('change', update);
  return () => media.removeEventListener('change', update);
}

const subscribeCompact = (update: () => void) => subscribe(compactQuery, update);
const subscribeReduced = (update: () => void) => subscribe(reducedQuery, update);

interface JourneyLayout {
  width: number;
  height: number;
  start: string;
  stages: { x: number; y: number; curve: string }[];
  finish: string;
}

const landscape: JourneyLayout = {
  width: 800,
  height: 560,
  start: 'M12 145',
  stages: [
    { x: 168, y: 119, curve: 'C63 143 105 128 168 119' },
    { x: 571, y: 84, curve: 'C271 104 449 83 571 84' },
    { x: 608, y: 248, curve: 'C676 85 752 94 761 146 S707 231 608 248' },
    { x: 229, y: 291, curve: 'C498 267 373 279 229 291' },
    { x: 173, y: 454, curve: 'C129 299 56 337 61 388 S114 444 173 454' },
    { x: 592, y: 475, curve: 'C274 471 456 465 592 475' },
  ],
  finish: 'C690 482 750 495 786 524',
};

const portrait: JourneyLayout = {
  width: 400,
  height: 680,
  start: 'M65 5',
  stages: [
    { x: 167, y: 58, curve: 'C65 25 167 32 167 58' },
    { x: 229, y: 169, curve: 'C167 98 229 129 229 169' },
    { x: 167, y: 280, curve: 'C229 209 167 240 167 280' },
    { x: 229, y: 391, curve: 'C167 320 229 351 229 391' },
    { x: 167, y: 502, curve: 'C229 431 167 462 167 502' },
    { x: 229, y: 613, curve: 'C167 542 229 573 229 613' },
  ],
  finish: 'C229 639 159 659 159 677',
};

const landscapeSeven: JourneyLayout = {
  ...landscape,
  height: 720,
  stages: [
    ...landscape.stages,
    { x: 390, y: 626, curve: 'C760 486 746 627 390 626' },
  ],
  finish: 'C260 626 149 656 63 686',
};

const portraitSeven: JourneyLayout = {
  ...portrait,
  height: 795,
  stages: [
    ...portrait.stages,
    { x: 167, y: 724, curve: 'C229 653 167 684 167 724' },
  ],
  finish: 'C167 750 223 773 223 792',
};

function getJourneyLayout(compact: boolean, stepCount: number): JourneyLayout {
  if (stepCount < 7) return compact ? portrait : landscape;
  const base = compact ? portraitSeven : landscapeSeven;
  if (stepCount === 7) return base;

  const stages = [...base.stages];
  const spacing = compact ? 111 : 146;
  for (let index = stages.length; index < stepCount; index += 1) {
    const previous = stages[index - 1];
    const x = index % 2 ? (compact ? 229 : 575) : (compact ? 167 : 230);
    const y = previous.y + spacing;
    stages.push({ x, y, curve: `C${previous.x} ${previous.y + spacing / 2} ${x} ${y - spacing / 2} ${x} ${y}` });
  }
  const last = stages[stages.length - 1];
  return { ...base, height: base.height + spacing * (stepCount - 7), stages, finish: `L${last.x} ${last.y + spacing / 2}` };
}

function ScrollTrace({ path, target }: { path: string; target: React.RefObject<HTMLDivElement | null> }) {
  const { scrollYProgress } = useScroll({ target, offset: ['start end', 'end center'] });
  return <motion.path d={path} className="ea-journey-track-active" stroke="currentColor" style={{ pathLength: scrollYProgress }} />;
}

function JourneyPath({ layout, active, moving, revealed, reduced, traceTarget }: {
  layout: JourneyLayout;
  active: number;
  moving: boolean;
  revealed: boolean;
  reduced: boolean;
  traceTarget?: React.RefObject<HTMLDivElement | null>;
}) {
  const id = useId();
  const svg = useRef<SVGSVGElement>(null);
  const curves = layout.stages.map(stage => stage.curve);
  const path = [layout.start, ...curves, layout.finish].join(' ');
  const activePath = [layout.start, ...curves.slice(0, active + 1)].join(' ');

  useEffect(() => {
    if (moving) svg.current?.unpauseAnimations();
    else svg.current?.pauseAnimations();
  }, [moving, layout]);

  return (
    <svg ref={svg} className="ea-journey-paths" viewBox={`0 0 ${layout.width} ${layout.height}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <path id={`${id}-path`} d={path} pathLength={1} />
        <linearGradient id={`${id}-route`} x2="0.86" y2="1">
          <stop stopColor="#7ab9d7" stopOpacity="0.35" />
          <stop offset="0.32" stopColor="#6badd2" />
          <stop offset="0.68" stopColor="#8b96cf" />
          <stop offset="1" stopColor="#cf9572" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id={`${id}-active`} x2="1" y2="0.54">
          <stop stopColor="#51a0ca" />
          <stop offset="0.62" stopColor="#438fcd" />
          <stop offset="1" stopColor="#ce895e" />
        </linearGradient>
        <radialGradient id={`${id}-signal`}>
          <stop stopColor="#fff" offset="0.24" />
          <stop stopColor="#9eeaff" offset="0.43" />
          <stop stopColor="#52c6eb" stopOpacity="0" offset="1" />
        </radialGradient>
        <mask id={`${id}-reveal`} maskUnits="userSpaceOnUse" x="0" y="0" width={layout.width} height={layout.height}>
          <motion.path d={path} stroke="white" strokeWidth="50" fill="none" strokeLinecap="round"
            initial={reduced ? false : { pathLength: 0 }}
            animate={{ pathLength: reduced || revealed ? 1 : 0 }}
            transition={{ duration: reduced ? 0 : 1.32, ease }} />
        </mask>
      </defs>
      <g mask={`url(#${id}-reveal)`}>
        <path className="ea-journey-track-aura" d={path} />
        <path className="ea-journey-track" d={path} stroke={`url(#${id}-route)`} />
        {traceTarget && !reduced && <ScrollTrace path={path} target={traceTarget} />}
        <motion.path key={active} className="ea-journey-track-active" d={activePath} stroke={`url(#${id}-active)`}
          initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduced ? 0 : 0.42 }} />
        {!reduced && [0, -4, -8].map(start => (
          <g key={start} className="ea-journey-signal">
            <use href={`#${id}-path`} className="ea-journey-signal-trail" style={{ animationDelay: `${start}s` }} />
            {[0, 0.17, 0.32].map((offset, index) => (
              <circle key={offset} r={8 - index * 2} fill={`url(#${id}-signal)`} opacity="0">
                <animateMotion dur="12s" begin={`${start + offset}s`} repeatCount="indefinite"><mpath href={`#${id}-path`} /></animateMotion>
                <animate attributeName="opacity" values={`0;${1 - index * 0.22};${1 - index * 0.22};0`}
                  keyTimes="0;0.045;0.94;1" dur="12s" begin={`${start + offset}s`} repeatCount="indefinite" />
              </circle>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}

function StageClock({ tick }: { tick: (delta: number) => void }) {
  useAnimationFrame(useCallback((_time: number, delta: number) => tick(Math.min(delta, 100)), [tick]));
  return null;
}

interface EnterpriseArchitectureJourneyProps {
  sectionId?: string;
  className?: string;
  stageDuration?: number;
  stepsLabel?: string;
  icons?: LucideIcon[];
  traceOnScroll?: boolean;
  title: string;
  description: string;
  steps: Array<Omit<ServiceItem['deliverySteps'][number], 'description'> & { description?: string }>;
  ariaLabel?: string;
}

export function EnterpriseArchitectureJourney({ title, description, steps, ariaLabel = 'Enterprise Architecture', sectionId = 'enterprise-process', className, stageDuration: journeyStageDuration = stageDuration, stepsLabel, icons = stepIcons, traceOnScroll = false }: EnterpriseArchitectureJourneyProps) {
  const id = useId();
  const workspace = useRef<HTMLDivElement>(null);
  const route = useRef<HTMLDivElement>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progress = useMotionValue(0);
  const reduced = useSyncExternalStore(subscribeReduced, () => window.matchMedia(reducedQuery).matches, () => false);
  const compact = useSyncExternalStore(subscribeCompact, () => window.matchMedia(compactQuery).matches, () => false);
  const inView = useInView(workspace, { amount: 0.08 });
  const revealed = useInView(workspace, { ...revealViewport, amount: 0.13 });
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reading, setReading] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  const moving = inView && pageVisible && !reduced;
  const advancing = moving && playing && !hovering && !focused && !reading && steps.length > 1;
  const extended = steps.length >= 7;
  const layout = getJourneyLayout(compact, steps.length);

  useEffect(() => {
    const update = () => setPageVisible(!document.hidden);
    update();
    document.addEventListener('visibilitychange', update);
    return () => {
      document.removeEventListener('visibilitychange', update);
      if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    };
  }, []);

  const tick = useCallback((delta: number) => {
    const next = progress.get() + delta / journeyStageDuration;
    progress.set(next % 1);
    if (next >= 1) setActive(current => (current + 1) % steps.length);
  }, [progress, steps.length]);

  const select = (index: number) => {
    if (active === index) return;
    progress.set(0);
    setActive(index);
  };

  const preview = (index: number) => {
    if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    setHovering(true);
    select(index);
  };

  const resume = () => {
    if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      resumeTimer.current = null;
      setHovering(false);
    }, hoverDelay);
  };

  const handleKeys = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const next = {
      ArrowLeft: (index - 1 + steps.length) % steps.length,
      ArrowUp: (index - 1 + steps.length) % steps.length,
      ArrowRight: (index + 1) % steps.length,
      ArrowDown: (index + 1) % steps.length,
      Home: 0,
      End: steps.length - 1,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id={sectionId} className={`ea-journey${className ? ` ${className}` : ''}`} aria-labelledby={`${id}-title`} tabIndex={sectionId !== 'enterprise-process' ? -1 : undefined}
      data-moving={moving} data-extended={extended || undefined}>
      {/* Scroll reveals run independently from the route entrance on direct visits. */}
      <AnimatePresence>
        <div className="ea-journey-inner">
          <header className="ea-journey-heading">
            <motion.h2 id={`${id}-title`} data-animate-words="" initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ duration: reduced ? 0 : 0.63, ease }}><ScrollRevealText text={title} preserveLayout /></motion.h2>
            <motion.p initial={reduced ? false : { opacity: 0, y: 13 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={revealViewport} transition={{ duration: reduced ? 0 : 0.62, delay: reduced ? 0 : 0.14, ease }}>{description}</motion.p>
          </header>
          <div ref={workspace} className="ea-journey-workspace" data-revealed={revealed}
            onFocusCapture={event => setFocused(event.target.matches(':focus-visible'))}
            onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
            {advancing && <StageClock tick={tick} />}
            <div ref={route} className="ea-journey-route" data-extended={extended}
              style={steps.length > 7 ? { minHeight: `${(compact ? 40.75 : 38) + (steps.length - 7) * 6}rem` } : undefined}>
              <div className="ea-journey-atmosphere" aria-hidden="true"><i /><i /><i /><i /><i /></div>
              <JourneyPath layout={layout} active={active} moving={moving} reduced={reduced} revealed={revealed} traceTarget={traceOnScroll ? route : undefined} />
              <div role="tablist" aria-label={stepsLabel || `${ariaLabel} stages`} aria-orientation={compact ? 'vertical' : 'horizontal'} className="ea-journey-nodes">
                {steps.map((step, index) => {
                  const Icon = icons[index] ?? Layers3;
                  const position = layout.stages[index];
                  return (
                    <div className="ea-journey-node-position" key={step.step}
                      style={{ left: `${position.x / layout.width * 100}%`, top: `${position.y / layout.height * 100}%` }}
                      onPointerEnter={event => { if (event.pointerType === 'mouse') preview(index); }}
                      onPointerLeave={event => { if (event.pointerType === 'mouse') resume(); }}>
                      <motion.div
                        initial={reduced ? false : { opacity: 0, x: index % 2 ? 26 : -26 }}
                        whileInView={{ opacity: 1, x: 0 }} viewport={revealViewport}
                        transition={{ duration: reduced ? 0 : 0.68, delay: reduced ? 0 : 0.12 + index * 0.09, ease }}>
                        <div className="ea-journey-node-float">
                          <button ref={node => { tabs.current[index] = node; }} id={`${id}-step-${index}`}
                            type="button" role="tab" className="ea-journey-node" tabIndex={active === index ? 0 : -1}
                            aria-selected={active === index} aria-controls={`${id}-detail-${index}`}
                            onClick={() => select(index)} onKeyDown={event => handleKeys(event, index)}>
                            <span className="ea-journey-node-icon"><Icon aria-hidden="true" /></span>
                            <span className="ea-journey-node-number" aria-hidden="true">{step.step}</span>
                            <span className="ea-journey-node-title">{step.title}</span>
                            <ArrowUpRight className="ea-journey-node-arrow" aria-hidden="true" />
                          </button>
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
            <motion.div className="ea-journey-glass" initial={reduced ? false : { opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }} viewport={revealViewport}
              transition={{ duration: reduced ? 0 : 0.75, delay: reduced ? 0 : 0.26, ease }}
              onPointerEnter={event => { if (event.pointerType === 'mouse') setReading(true); }}
              onPointerLeave={event => { if (event.pointerType === 'mouse') setReading(false); }}>
              <div className="ea-journey-details">
                {steps.map((step, index) => {
                  const selected = index === active;
                  const Icon = icons[index] ?? Layers3;
                  return (
                    <motion.div key={step.step} id={`${id}-detail-${index}`} className="ea-journey-detail" role="tabpanel"
                      aria-labelledby={`${id}-step-${index}`} aria-hidden={!selected} tabIndex={selected ? 0 : -1} inert={!selected}
                      initial={false} animate={selected ? 'shown' : 'hidden'}
                      variants={{
                        shown: { opacity: 1, y: reduced ? 0 : [14, 0], visibility: 'visible',
                          transition: { duration: reduced ? 0 : 0.39, delay: reduced ? 0 : 0.10, ease, staggerChildren: reduced ? 0 : 0.05, delayChildren: reduced ? 0 : 0.13 } },
                        hidden: { opacity: 0, y: reduced ? 0 : -12, transitionEnd: { visibility: 'hidden' }, transition: { duration: reduced ? 0 : 0.16 } },
                      }}>
                      <div className="ea-journey-detail-meta">
                        <span className="ea-journey-detail-icon"><Icon aria-hidden="true" /></span>
                        <motion.span className="ea-journey-detail-number"
                          variants={{ shown: { opacity: 1, y: reduced ? 0 : [9, 0] }, hidden: { opacity: 0, y: reduced ? 0 : -6 } }}>{step.step}</motion.span>
                      </div>
                      <h3><ScrollRevealText text={step.title} preserveLayout /></h3>
                      {step.description && <p>{step.description}</p>}
                      {step.points?.length ? <ul>{step.points.map(point => (
                        <motion.li key={point} variants={{ shown: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: reduced ? 0 : 6 } }}
                          transition={{ duration: reduced ? 0 : 0.24, ease }}>{point}</motion.li>
                      ))}</ul> : null}
                    </motion.div>
                  );
                })}
              </div>
              <div className="ea-journey-status">
                <div className="ea-journey-progress" role="group" aria-label="Select a workflow step">
                  {steps.map((step, index) => (
                    <button type="button" key={step.step} data-past={index < active} data-current={index === active}
                      aria-label={step.title} aria-pressed={index === active} onClick={() => select(index)}>
                      <span>{index === active && <motion.i style={{ scaleX: reduced || !playing || hovering ? 1 : progress }} />}</span>
                    </button>
                  ))}
                </div>
                {!reduced && (
                  <button type="button" className="ea-journey-playback"
                    aria-label={playing ? 'Pause automatic progression' : 'Resume automatic progression'}
                    onClick={() => setPlaying(current => !current)}>
                    {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatePresence>
    </section>
  );
}

