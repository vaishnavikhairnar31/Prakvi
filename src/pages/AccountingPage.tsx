import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  CreditCard,
  Database,
  Pause,
  Play,
  Receipt,
  Search,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { BusinessAnalyticsCarousel } from '../components/common/BusinessAnalyticsCarousel';
import { BusinessAnalyticsStackOrbit } from '../components/common/BusinessAnalyticsStackOrbit';
import { SectionHeading } from '../components/common/SectionHeading';
import { ScrollRevealText } from '../components/common/ScrollRevealText';
import { ServiceHeroMedia } from '../components/common/ServiceHeroMedia';
import { PageTransition } from '../components/layout/PageTransition';
import { servicesData } from '../data/servicesData';
import './DataAnalyticsHero.css';
import './ServicePageDesign.css';

const service = servicesData.find((item) => item.slug === 'accounting');

if (!service) {
  throw new Error('Accounting service data is missing.');
}

const accountingStackIcons = [BookOpen, Receipt, CreditCard, TrendingUp, Search];
const accountingTechnologyIcons = [
  [BookOpen, Receipt, CreditCard, Database],
  [Receipt, CheckCircle2, TrendingUp, Search],
  [Zap, CreditCard, Users, Receipt],
  [BookOpen, TrendingUp],
  [Search, Activity],
];
const accountingCardPositions = [
  { x: 18, y: 7 },
  { x: 72, y: 18 },
  { x: 18, y: 29 },
  { x: 72, y: 40 },
  { x: 18, y: 51 },
  { x: 72, y: 62 },
  { x: 18, y: 73 },
  { x: 72, y: 84 },
];
const accountingMobileCardPositions = [
  { x: 35, y: 5 },
  { x: 65, y: 16 },
  { x: 35, y: 27 },
  { x: 65, y: 38 },
  { x: 35, y: 49 },
  { x: 65, y: 60 },
  { x: 35, y: 71 },
  { x: 65, y: 82 },
];
const accountingStepIcons = [Search, Database, Activity, TrendingUp, Users, Search, CheckCircle2, Zap];
const accountingCardAccents = ['#48a8d4', '#9075c5', '#55a0c8', '#d08b5f', '#738ac0', '#49a2c2', '#67a78e', '#48a8d4'];
const accountingFeaturePoints = [
  ['Review financial workflows', 'Assess accounting systems', 'Review reporting structures'],
  ['Gather financial records', 'Configure accounting platforms', 'Organize payroll history'],
  ['Record sales and receipts', 'Post journal entries', 'Maintain up-to-date ledgers'],
  ['Match bank statements', 'Reconcile vendor invoices', 'Complete year-end adjustments'],
  ['Automate payroll cycles', 'Process salaries and deductions', 'Maintain statutory compliance'],
  ['Prepare financial statements', 'Analyze cash flow', 'Highlight financial trends'],
  ['Calculate tax obligations', 'Prepare required returns', 'Manage statutory deadlines'],
  ['Reassess accounting processes', 'Recommend efficiency gains', 'Implement process automation'],
];

export const AccountingPage: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const heroVideo = useRef<HTMLVideoElement>(null);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);
  const [isWorkflowAutoPlaying, setIsWorkflowAutoPlaying] = useState(!reducedMotion);
  const [isWorkflowHovered, setIsWorkflowHovered] = useState(false);
  const [activeStackTab, setActiveStackTab] = useState(0);
  const [isStackPointerOver, setIsStackPointerOver] = useState(false);

  const workflowSteps = service.deliverySteps;
  const stackTabs = service.stackTabs || [];
  const activeStackIndex = stackTabs.length
    ? Math.min(Math.max(activeStackTab, 0), stackTabs.length - 1)
    : 0;
  const currentStack = stackTabs[activeStackIndex];
  const ActiveStackIcon = accountingStackIcons[activeStackIndex] || CheckCircle2;
  const ActiveWorkflowIcon = accountingStepIcons[activeWorkflowStep] || Database;
  const stackPanelId = 'service-stack-panel-accounting';
  const stackTabId = (index: number) => `service-stack-tab-accounting-${index}`;

  useEffect(() => {
    const video = heroVideo.current;
    if (!video) return;
    void video.play().catch((error: unknown) => {
      if (error instanceof Error && (error.name === 'AbortError' || error.name === 'NotAllowedError')) return;
      console.error('Accounting hero video playback failed.', error);
    });
    return () => video.pause();
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setIsWorkflowAutoPlaying(false);
      return;
    }
    setIsWorkflowAutoPlaying(true);
  }, [reducedMotion]);

  useEffect(() => {
    if (!isWorkflowAutoPlaying || reducedMotion || isWorkflowHovered || workflowSteps.length === 0) return;
    const timer = window.setTimeout(() => {
      setActiveWorkflowStep((current) => (current + 1) % workflowSteps.length);
    }, 2800);
    return () => window.clearTimeout(timer);
  }, [activeWorkflowStep, isWorkflowAutoPlaying, isWorkflowHovered, reducedMotion, workflowSteps.length]);

  useEffect(() => {
    if (reducedMotion || isStackPointerOver || stackTabs.length < 2) return;
    const timer = window.setTimeout(() => {
      setActiveStackTab((current) => (current + 1) % stackTabs.length);
    }, 4000);
    return () => window.clearTimeout(timer);
  }, [activeStackTab, isStackPointerOver, reducedMotion, stackTabs.length]);

  const handleStackTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextTab = index;
    if (event.key === 'ArrowRight') nextTab = (index + 1) % stackTabs.length;
    else if (event.key === 'ArrowLeft') nextTab = (index - 1 + stackTabs.length) % stackTabs.length;
    else if (event.key === 'Home') nextTab = 0;
    else if (event.key === 'End') nextTab = stackTabs.length - 1;
    else return;

    event.preventDefault();
    setActiveStackTab(nextTab);
    document.getElementById(stackTabId(nextTab))?.focus();
  };

  return (
    <PageTransition revealServiceText>
      <div className="service-detail-page service-topic-accounting overflow-x-hidden pt-20 selection:bg-accent selection:text-white">
        <section className="hero-clay-canvas relative overflow-hidden accounting-video-hero service-video-hero isolate">
          <div className="accounting-video-hero__content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <Breadcrumbs
              items={[
                { label: 'Services', path: '/services' },
                { label: service.title },
              ]}
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="accounting-video-hero__copy md:col-span-6 lg:col-span-6"
              >
                <motion.h1
                  className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance"
                  initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{ duration: reducedMotion ? 0 : 0.63, ease: [0.32, 0.72, 0, 1] }}
                >
                  <ScrollRevealText text={service.tagline} preserveLayout />
                </motion.h1>
                <p className="text-base text-muted leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <a href="https://prakvi.com/accounting.html#services" className="btn-primary">
                    <span>Explore Services</span>
                    <ArrowRight className="arrow-shift" aria-hidden="true" />
                  </a>
                  <a href="https://prakvi.com/accounting.html#process" className="btn-secondary">
                    <span>Our Process</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <ServiceHeroMedia
            videoRef={heroVideo}
            autoPlay
            preload="auto"
            sampleEdges={false}
          >
            <source
              src={`${import.meta.env.BASE_URL}videos/accounting-hero.mp4`}
              type="video/mp4"
            />
          </ServiceHeroMedia>
        </section>

        <BusinessAnalyticsCarousel
          title={service.offeringsTitle || `${service.title} Offerings`}
          description={service.offeringsSubtitle || 'Comprehensive service modules engineered for reliability, compliance, and long-term performance.'}
          capabilities={service.capabilities}
          align="center"
          carouselLabel="Accounting services"
          animateHeadingWords
          updateInfoImmediately
          capabilityHighlights={[
            ['simplified ledgers', 'real-time reporting', 'clean journal records'],
            ['liability minimization', 'statutory compliance', 'timely filings'],
            ['accurate processing', 'salaries and deductions', 'payslips'],
            ['financial risk control', 'internal controls', 'forensic audits'],
            ['cash flow management', 'accounts payable', 'vendor reconciliations'],
          ]}
          capabilityIcons={[CheckCircle2, CheckCircle2, CheckCircle2, CheckCircle2, CheckCircle2]}
        />

        <section id="process" className="py-section bg-canvas business-analytics-process accounting-process-workflow">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="business-analytics-process__intro">
              <motion.h2
                className="business-analytics-process__heading"
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.35 }}
                transition={{ duration: reducedMotion ? 0 : 0.63, ease: [0.32, 0.72, 0, 1] }}
              >
                <ScrollRevealText
                  text={service.processTitle || `Why Choose Prakvi for ${service.title}?`}
                  preserveLayout
                />
              </motion.h2>
              <p className="business-analytics-process__subtitle">
                {service.processSubtitle || 'A proven methodology that ensures successful project delivery.'}
              </p>
            </div>

            <div className="business-analytics-process__layout">
              <div className="business-analytics-process__flow">
                <div className="business-analytics-process__cards-wrap">
                  <svg
                    className="business-analytics-process__connections"
                    viewBox="0 0 1000 1000"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient id="analytics-flow-gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#67b6e0" />
                        <stop offset="52%" stopColor="#4aabd1" />
                        <stop offset="100%" stopColor="#89c8d7" />
                      </linearGradient>
                      <filter id="analytics-flow-glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="1.5" result="blur" />
                        <feMerge>
                          <feMergeNode in="blur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>
                    {([
                      { className: 'is-desktop-flow', positions: accountingCardPositions },
                      { className: 'is-mobile-flow', positions: accountingMobileCardPositions },
                    ]).map(({ className, positions }) => (
                      <g className={className} key={className}>
                        {workflowSteps.slice(0, -1).map((_, index) => {
                          const from = positions[index];
                          const to = positions[index + 1];
                          const x1 = from.x * 10;
                          const y1 = from.y * 10;
                          const x2 = to.x * 10;
                          const y2 = to.y * 10;
                          const dx = x2 - x1;
                          const dy = y2 - y1;
                          const distance = Math.hypot(dx, dy) || 1;
                          const bend = (index % 2 === 0 ? 1 : -1) * 82;
                          const normalX = (-dy / distance) * bend;
                          const normalY = (dx / distance) * bend;
                          const path = `M ${x1} ${y1} C ${x1 + dx * 0.32 + normalX} ${y1 + dy * 0.32 + normalY}, ${x1 + dx * 0.68 + normalX} ${y1 + dy * 0.68 + normalY}, ${x2} ${y2}`;
                          const progress = index < activeWorkflowStep ? 1 : index === activeWorkflowStep ? 0.42 : 0;

                          return (
                            <g key={index}>
                              <path
                                d={path}
                                transform="translate(0 6)"
                                className="business-analytics-process__connection-secondary"
                              />
                              <motion.path
                                d={path}
                                pathLength={1}
                                strokeDasharray="1"
                                className="business-analytics-process__connection-base"
                                initial={reducedMotion ? false : { strokeDashoffset: 1 }}
                                animate={{ strokeDashoffset: 0 }}
                                transition={{ duration: reducedMotion ? 0 : 1.05, delay: reducedMotion ? 0 : index * 0.1, ease: 'easeInOut' }}
                              />
                              <motion.path
                                d={path}
                                pathLength={1}
                                strokeDasharray="1"
                                className={`business-analytics-process__connection-active${index === activeWorkflowStep ? ' is-current' : ''}`}
                                initial={reducedMotion ? false : { strokeDashoffset: 1, opacity: 0 }}
                                animate={{ strokeDashoffset: 1 - progress, opacity: progress ? 1 : 0 }}
                                transition={{ duration: reducedMotion ? 0 : 0.55, delay: reducedMotion ? 0 : index * 0.07, ease: 'easeInOut' }}
                              />
                              {!reducedMotion && (
                                <circle className="business-analytics-process__particle" r="3">
                                  <animateMotion
                                    dur={`${4 + (index % 3) * 0.6}s`}
                                    begin={`-${index * 0.53}s`}
                                    repeatCount="indefinite"
                                    path={path}
                                  />
                                </circle>
                              )}
                            </g>
                          );
                        })}
                      </g>
                    ))}
                  </svg>

                  <div
                    className="business-analytics-process__cards"
                    role="group"
                    aria-label="Accounting process steps"
                    onPointerEnter={(event) => {
                      if (event.pointerType !== 'touch') setIsWorkflowHovered(true);
                    }}
                    onPointerLeave={(event) => {
                      if (event.pointerType !== 'touch') setIsWorkflowHovered(false);
                    }}
                  >
                    {workflowSteps.map((step, index) => {
                      const isActive = activeWorkflowStep === index;
                      const StepIcon = accountingStepIcons[index] || Database;
                      const position = accountingCardPositions[index] || { x: 50, y: 50 };
                      const mobilePosition = accountingMobileCardPositions[index] || { x: 50, y: 50 };

                      return (
                        <motion.div
                          key={step.step}
                          className="business-analytics-process__card-slot"
                          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : index * 0.075, ease: 'easeOut' }}
                          style={{
                            '--desktop-x': `${position.x}%`,
                            '--desktop-y': `${position.y}%`,
                            '--mobile-x': `${mobilePosition.x}%`,
                            '--mobile-y': `${mobilePosition.y}%`,
                            '--card-accent': accountingCardAccents[index] || '#48a8d4',
                            '--card-index': index,
                          } as React.CSSProperties}
                        >
                          <motion.button
                            type="button"
                            aria-pressed={isActive}
                            aria-label={`Step ${step.step}: ${step.title}${isActive ? ', selected' : ''}`}
                            onMouseEnter={() => setActiveWorkflowStep(index)}
                            onFocus={() => setActiveWorkflowStep(index)}
                            onClick={() => setActiveWorkflowStep(index)}
                            className={`business-analytics-process__card${isActive ? ' is-active' : ''}`}
                            whileHover={reducedMotion ? undefined : { y: -3, scale: 1.015 }}
                            whileTap={reducedMotion ? undefined : { scale: 0.99 }}
                          >
                            <span className="business-analytics-process__card-top">
                              <span className="business-analytics-process__icon"><StepIcon size={18} strokeWidth={1.8} /></span>
                              <span className="business-analytics-process__badge">{step.step}</span>
                            </span>
                            <span className="business-analytics-process__card-bottom">
                              <span className="business-analytics-process__card-title">{step.title}</span>
                              <ArrowUpRight size={15} className="business-analytics-process__card-arrow" aria-hidden="true" />
                            </span>
                            <span className="business-analytics-process__active-dot" aria-hidden="true" />
                          </motion.button>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="business-analytics-process__panel"
                style={{ '--card-accent': accountingCardAccents[activeWorkflowStep] || '#48a8d4' } as React.CSSProperties}
              >
                <motion.div
                  key={activeWorkflowStep}
                  className="business-analytics-process__selected-step"
                  initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
                  aria-live="polite"
                >
                  <div className="business-analytics-process__panel-top">
                    <span className="business-analytics-process__panel-icon">
                      <ActiveWorkflowIcon size={27} strokeWidth={1.8} />
                    </span>
                    <span className="business-analytics-process__number">
                      {workflowSteps[activeWorkflowStep].step}
                    </span>
                  </div>
                  <h3 className="business-analytics-process__title">
                    {workflowSteps[activeWorkflowStep].title}
                  </h3>
                  <p className="business-analytics-process__description">
                    {workflowSteps[activeWorkflowStep].description}
                  </p>
                  <ul className="business-analytics-process__details">
                    {accountingFeaturePoints[activeWorkflowStep]?.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </motion.div>

                <div className="business-analytics-process__progress" role="group" aria-label={`Step ${activeWorkflowStep + 1} of ${workflowSteps.length}`}>
                  <div
                    className="business-analytics-process__progress-segments"
                    aria-hidden="true"
                    style={{ gridTemplateColumns: 'repeat(8, minmax(0, 1fr))' }}
                  >
                    {workflowSteps.map((step, index) => (
                      <span
                        key={step.step}
                        className={`business-analytics-process__progress-segment${index < activeWorkflowStep ? ' is-complete' : ''}${index === activeWorkflowStep ? ' is-current' : ''}`}
                      />
                    ))}
                  </div>
                  <div className="business-analytics-process__progress-footer">
                    <span>
                      STEP {workflowSteps[activeWorkflowStep].step}{' '}
                      <span className="business-analytics-process__progress-total">
                        / {String(workflowSteps.length).padStart(2, '0')}
                      </span>
                    </span>
                    <button
                      type="button"
                      className="business-analytics-process__play-toggle"
                      aria-label={isWorkflowAutoPlaying ? 'Pause automatic step progression' : 'Play automatic step progression'}
                      aria-pressed={isWorkflowAutoPlaying}
                      disabled={Boolean(reducedMotion)}
                      onClick={() => setIsWorkflowAutoPlaying((playing) => !playing)}
                    >
                      {isWorkflowAutoPlaying ? <Pause size={15} /> : <Play size={15} />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-section bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              title={service.stackTitle || service.title}
              description={service.stackSummary}
              align="center"
              animateWords
              animateWordsOnce={false}
              revealOnScrollBothDirections
            />

            <div
              className="accounting-stack-interaction"
              onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') setIsStackPointerOver(true);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType !== 'touch') setIsStackPointerOver(false);
              }}
            >
              <div className="accounting-stack-tab-list" role="tablist" aria-label="Accounting categories">
                {stackTabs.map((tab, index) => {
                  const active = activeStackTab === index;
                  return (
                    <button
                      key={tab.label}
                      type="button"
                      role="tab"
                      id={stackTabId(index)}
                      aria-selected={active}
                      aria-controls={stackPanelId}
                      tabIndex={active ? 0 : -1}
                      className={`accounting-stack-tab${active ? ' is-active' : ''}`}
                      onMouseEnter={() => setActiveStackTab(index)}
                      onFocus={() => setActiveStackTab(index)}
                      onClick={() => setActiveStackTab(index)}
                      onKeyDown={(event) => handleStackTabKeyDown(event, index)}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {currentStack && (
                <div
                  id={stackPanelId}
                  role="tabpanel"
                  aria-labelledby={stackTabId(activeStackIndex)}
                  tabIndex={0}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <motion.div
                    key={activeStackIndex}
                    className="accounting-stack-detail-panel"
                    initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
                  >
                    <ActiveStackIcon className="accounting-stack-detail-icon" aria-hidden="true" strokeWidth={1.8} />
                    <h3 className="accounting-stack-detail-title">{currentStack.title}</h3>
                    <p className="accounting-stack-detail-description">{currentStack.description}</p>
                  </motion.div>
                  <BusinessAnalyticsStackOrbit
                    category={currentStack}
                    activeIndex={activeStackIndex}
                    categoryIcons={accountingStackIcons}
                    technologyIconSets={accountingTechnologyIcons}
                    className="accounting-stack-orbit"
                  />
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
