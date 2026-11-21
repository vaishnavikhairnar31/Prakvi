import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { EnterpriseArchitectureHero } from '../components/common/EnterpriseArchitectureHero';
import { EnterpriseArchitectureJourney } from '../components/common/EnterpriseArchitectureJourney';
import { ArchitectureCarousel } from '../components/common/ArchitectureCarousel';
import { ArchitectureOfferingsWorkflow } from '../components/common/ArchitectureOfferingsWorkflow';
import { MobilityPracticeHero } from '../components/common/MobilityPracticeHero';
import { MobilityPracticeSections } from '../components/common/MobilityPracticeSections';
import { SupplyChainHero } from '../components/common/SupplyChainHero';
import { SupplyChainSections } from '../components/common/SupplyChainSections';
import { SystemIntegrationSections } from '../components/common/SystemIntegrationSections';
import { SystemIntegrationHero } from '../components/common/SystemIntegrationHero';
import { ProjectManagementHero } from '../components/common/ProjectManagementHero';
import { ProjectManagementSections } from '../components/common/ProjectManagementSections';
import { InfrastructureManagementHero } from '../components/common/InfrastructureManagementHero';
import { InfrastructureManagementSections } from '../components/common/InfrastructureManagementSections';
import { ScrollRevealText } from '../components/common/ScrollRevealText';
import { ServiceHeroMedia } from '../components/common/ServiceHeroMedia';
import { SectionHeading } from '../components/common/SectionHeading';
import { BusinessAnalyticsCarousel } from '../components/common/BusinessAnalyticsCarousel';
import {
  BusinessAnalyticsStackOrbit,
  businessAnalyticsCategoryIcons,
} from '../components/common/BusinessAnalyticsStackOrbit';
import { CTASection } from '../components/common/CTASection';
import { CloudServicesSections } from '../components/common/CloudServicesSections';
import { DigitalMarketingSections } from '../components/common/DigitalMarketingSections';
import { MobileAppDevelopmentSections, mobileProcessId } from '../components/common/MobileAppDevelopmentSections';
import { PageTransition } from '../components/layout/PageTransition';
import { scrollToSection } from '../components/layout/SmoothScroll';
import { servicesData } from '../data/servicesData';
import { StaffingPage } from './StaffingPage';
import { WorkforceSolutionsPage } from './WorkforceSolutionsPage';
import { BusinessIntelligencePage } from './BusinessIntelligencePage';
import {
  AlertCircle,
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Database,
  FileText,
  Laptop,
  Layers,
  Lock,
  Pause,
  Play,
  Search,
  Server,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import './MobileAppDevelopmentHero.css';
import './DigitalMarketingHero.css';
import './CloudServicesHero.css';
import './ServicePageDesign.css';

const standardizedServiceSlugs = new Set([
  'enterprise-architecture',
  'project-management',
  'mobility-practice',
  'supply-chain-management',
  'system-integration',
  'digital-marketing',
  'mobile-app-development',
  'cloud-services',
  'infrastructure-management',
]);

const slugAliases: Record<string, string> = {
  'staffing-workforce-solutions': 'staffing',
  'cloud-infrastructure-management': 'cloud-services',
  'ai-data-analytics-bi': 'business-intelligence',
  'enterprise-architecture-integration': 'system-integration',
  'digital-engineering-web-development': 'enterprise-solution',
  'it-consulting-strategic-advisory': 'it-consulting',
};

function followSectionLink(event: React.MouseEvent<HTMLAnchorElement>) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const hash = event.currentTarget.hash;
  const target = document.getElementById(hash.slice(1));
  if (!target) return;
  event.preventDefault();
  event.stopPropagation();
  window.history.replaceState(window.history.state, '', hash);
  scrollToSection(target);
}
import './DataAnalyticsHero.css';

const analyticsStepIcons = [Database, Sparkles, Search, TrendingUp, Target, Zap, Activity];
const analyticsCardPositions = [
  { x: 22, y: 10 },
  { x: 72, y: 13 },
  { x: 73, y: 36 },
  { x: 22, y: 35 },
  { x: 22, y: 57 },
  { x: 73, y: 59 },
  { x: 42, y: 80 },
];
const analyticsMobileCardPositions = [
  { x: 35, y: 7 },
  { x: 65, y: 21 },
  { x: 35, y: 35 },
  { x: 65, y: 49 },
  { x: 35, y: 63 },
  { x: 65, y: 77 },
  { x: 35, y: 91 },
];
const analyticsCardAccents = ['#48a8d4', '#9075c5', '#55a0c8', '#d08b5f', '#738ac0', '#49a2c2', '#67a78e'];
const businessAnalyticsHeroTitle = 'Turning Data into Actionable Business Analytics';
const businessAnalyticsHeroDescription = 'In today’s data-driven world, raw information is abundant but only the right business analytics transforms it into a competitive advantage. Prakvi’s Business Analytics Services in India help organizations harness the power of advanced analytics, AI-driven insights, and industry expertise to improve decision-making, optimize operations, and accelerate growth. From predictive analytics and prescriptive analytics to real-time performance dashboards and data visualization, we deliver tailored, scalable solutions that turn data into measurable business value. With Prakvi, your data becomes your most powerful asset.';

export const ServiceDetailPage: React.FC = () => {
  const reducedMotion = useReducedMotion();
  const { slug } = useParams<{ slug: string }>();
  const resolvedSlug = slug ? slugAliases[slug] || slug : '';
  const cloudServicesHero = resolvedSlug === 'cloud-services';
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeStackTab, setActiveStackTab] = useState(0);
  const digitalMarketingHero = slug === 'digital-marketing';
  const mobileAppHero = slug === 'mobile-app-development';
  const hasSectionLinks = digitalMarketingHero || mobileAppHero;
  const heroStyle = digitalMarketingHero ? 'digital-marketing-hero' : mobileAppHero ? 'mobile-app-hero' : cloudServicesHero ? 'cloud-services-hero' : null;
  const heroVideo = useRef<HTMLVideoElement>(null);
  const [activeAnalyticsStep, setActiveAnalyticsStep] = useState(0);
  const [isAnalyticsAutoPlaying, setIsAnalyticsAutoPlaying] = useState(true);

  useEffect(() => {
    const video = heroVideo.current;
    if (!heroStyle || !video) return;
    const play = () => {
      void video.play().catch((error: unknown) => {
        if (error instanceof Error && (error.name === 'AbortError' || error.name === 'NotAllowedError')) return;
        console.error('Service hero video playback failed.', error);
      });
    };
    setActiveStackTab(0);
    setOpenFaqIndex(0);
    setActiveAnalyticsStep(0);
    setIsAnalyticsAutoPlaying(!reducedMotion);
  }, [slug, reducedMotion]);

  useEffect(() => {
    const video = heroVideo.current;
    if ((!heroStyle && slug !== 'business-analytics') || !video) return;
    const play = () => { void video.play().catch(() => { /* Keep the poster visible if autoplay is blocked. */ }); };

    if (reducedMotion) {
      video.pause();
      return;
    }

    if (!digitalMarketingHero) {
      play();
      const resume = () => {
        if (document.visibilityState === 'visible' && video.paused) {
          play();
        }
      };
      document.addEventListener('visibilitychange', resume);
      video.addEventListener('loadeddata', resume);
      return () => {
        document.removeEventListener('visibilitychange', resume);
        video.removeEventListener('loadeddata', resume);
        video.pause();
      };
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.12) play();
      else video.pause();
    }, { threshold: 0.12 });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [digitalMarketingHero, heroStyle, reducedMotion, slug]);

  const service = servicesData.find(
    (s) => s.slug === resolvedSlug || s.id === resolvedSlug || s.slug === slug || s.id === slug
  );
  const isBusinessAnalyticsPage = service?.slug === 'business-analytics';
  const analyticsStepCount = service?.deliverySteps.length ?? 7;

  useEffect(() => {
    if (!isBusinessAnalyticsPage || !isAnalyticsAutoPlaying || reducedMotion) return;

    const timer = window.setTimeout(() => {
      setActiveAnalyticsStep((current) => (current + 1) % analyticsStepCount);
    }, 5600);
    return () => window.clearTimeout(timer);
  }, [
    activeAnalyticsStep,
    analyticsStepCount,
    isAnalyticsAutoPlaying,
    isBusinessAnalyticsPage,
    reducedMotion,
  ]);

  useEffect(() => {
    setActiveStackTab(0);
    setOpenFaqIndex(0);
    setIsAnalyticsAutoPlaying(!reducedMotion);
    const stepCount = service?.deliverySteps.length ?? 0;
    setActiveAnalyticsStep(
      service?.slug === 'business-analytics' && stepCount > 0
        ? Math.min(6, stepCount - 1)
        : 0
    );
  }, [slug, service, reducedMotion]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  if (service.slug === 'staffing') {
    return <StaffingPage service={service} />;
  }
  if (service.slug === 'workforce-solution') {
    return <WorkforceSolutionsPage service={service} />;
  }
  if (service.slug === 'business-intelligence') {
    return <BusinessIntelligencePage service={service} />;
  }
  const isMobilityPage = service.slug === 'mobility-practice';
  const isEnterpriseArchitecturePage = service.slug === 'enterprise-architecture';
  const isInfrastructurePage = service.slug === 'infrastructure-management';
  const animateServiceHeadings = cloudServicesHero || isInfrastructurePage;
  const hasDedicatedServiceSections = standardizedServiceSlugs.has(service.slug)
    && !isEnterpriseArchitecturePage
    && !cloudServicesHero
    && !isInfrastructurePage;
  const showStandardServiceSections = !hasDedicatedServiceSections
    && !isEnterpriseArchitecturePage
    && !cloudServicesHero
    && !isInfrastructurePage;
  const isTargetSectionRemovalPage =
    service.slug === 'it-consulting'
    || service.slug === 'web-design'
    || service.slug === 'enterprise-solution';
  const offeringsTitle = service.offeringsTitle || `${service.title} Offerings`;
  const offeringsDescription = service.offeringsSubtitle ||
    'Comprehensive service modules engineered for reliability, compliance, and long-term performance.';
  const processTitle = service.processTitle || `Why Choose Prakvi for ${service.title}?`;
  const processDescription = service.processSubtitle ||
    'A proven methodology that ensures successful project delivery.';
  const servicePageClass = isEnterpriseArchitecturePage
    ? 'ea-service-page'
    : `service-detail-page service-topic-${service.slug}`;

  const toggleFaq = (index: number) => setOpenFaqIndex(current => current === index ? null : index);

  const stackTabs = service.stackTabs || [];
  const activeStackIndex = stackTabs.length
    ? Math.min(Math.max(activeStackTab, 0), stackTabs.length - 1)
    : 0;
  const currentStack = stackTabs[activeStackIndex];

  const analyticsStepIndex = service.deliverySteps.length
    ? Math.min(Math.max(activeAnalyticsStep, 0), service.deliverySteps.length - 1)
    : -1;
  const selectedAnalyticsStep = analyticsStepIndex >= 0
    ? service.deliverySteps[analyticsStepIndex]
    : undefined;
  const stackPanelId = `service-stack-panel-${service.slug}`;
  const stackTabId = (index: number) => `service-stack-tab-${service.slug}-${index}`;
  const ArchitectureStackIcon = [Target, Layers, Database, Server][activeStackTab] || Layers;
  const ActiveAnalyticsIcon = analyticsStepIcons[activeAnalyticsStep] || Database;

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


  const serviceCta = (
    <CTASection
      title={`Let's Discuss Your ${service.title} Goals`}
      subtitle="Connect with Prakvi’s specialists to plan your implementation roadmap, staffing requirements, or managed support SLA."
      animateHeading={animateServiceHeadings || standardizedServiceSlugs.has(service.slug)}
    />
  );
  return (

<PageTransition revealServiceText>
  <div
    className={`overflow-x-hidden pt-20 selection:bg-accent selection:text-white ${servicePageClass}${
      standardizedServiceSlugs.has(service.slug) ? ' service-design' : ''
    }${cloudServicesHero ? ' cloud-services-page' : ''}${
      isInfrastructurePage ? ' infrastructure-services-page' : ''
    }`}
  >

        {/* 1. SERVICE HERO */}
        {isEnterpriseArchitecturePage ? (
          <EnterpriseArchitectureHero service={service} />
        ) : isMobilityPage ? (
          <MobilityPracticeHero service={service} />
        ) : service.slug === 'supply-chain-management' ? (
          <SupplyChainHero service={service} />
        ) : service.slug === 'project-management' ? (
          <ProjectManagementHero service={service} />
        ) : service.slug === 'system-integration' ? (
          <SystemIntegrationHero service={service} />
        ) : isInfrastructurePage ? (
          <InfrastructureManagementHero service={service} onSectionLink={followSectionLink} />
        ) : (
          <section
            className={`hero-clay-canvas py-section relative overflow-hidden${heroStyle ? ` ${heroStyle} isolate` : ''}${isBusinessAnalyticsPage ? ' business-analytics-hero business-analytics-video-hero service-video-hero isolate' : ''}`}
          >
            <div
              className={`${isBusinessAnalyticsPage ? 'business-analytics-hero__content max-w-7xl' : 'max-w-7xl'} mx-auto px-4 sm:px-6 lg:px-8 relative z-10${heroStyle ? ` ${heroStyle}-content` : ''}`}
            >
              <Breadcrumbs
                items={[
                  { label: 'Services', path: '/services' },
                  { label: service.title },
                ]}
              />

              <div
                className={`${heroStyle ? `${heroStyle}-copy ` : ''}mt-8 grid grid-cols-1 ${
                  isBusinessAnalyticsPage ? 'md:grid-cols-12' : 'lg:grid-cols-12'
                } gap-10 items-center`}
              >
                {isBusinessAnalyticsPage ? (
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="business-analytics-hero__copy md:col-span-6 lg:col-span-6"
                  >
                    <h1 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-balance">
                      {businessAnalyticsHeroTitle}
                    </h1>
                    <p className="text-base text-muted leading-relaxed">
                      {businessAnalyticsHeroDescription}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4">
                      <a href="https://prakvi.com/business-analytics.html#services" className="btn-primary">
                        <span>Explore Services</span>
                        <ArrowRight className="arrow-shift" aria-hidden="true" />
                      </a>
                      <a href="https://prakvi.com/business-analytics.html#process" className="btn-secondary">
                        <span>Our Process</span>
                      </a>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-5 lg:col-span-7"
                  >
                    <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-accent">
                      {service.badge || 'Prakvi Service'}
                    </div>
                    <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-foreground tracking-tight leading-[1.1] text-balance">
                      <ScrollRevealText text={service.title} highlight={service.title} />
                    </h1>
                    {!hasSectionLinks && (
                      <p className="text-lg sm:text-xl font-semibold text-accent">
                        {service.tagline}
                      </p>
                    )}
                    <p className="text-base text-muted leading-relaxed">
                      {service.fullDesc}
                    </p>
                    <div className="pt-2 flex flex-wrap gap-4">
                      {hasSectionLinks ? (
                        <>
                          <a href="#capabilities" onClick={followSectionLink} className="btn-primary">Explore Services</a>
                          <a
                            href={`#${mobileAppHero ? mobileProcessId : 'digital-marketing-process'}`}
                            onClick={followSectionLink}
                            className="btn-secondary"
                          >
                            Our Process
                          </a>
                        </>
                      ) : (
                        <>
                          <Link to="/contact" className="btn-primary">
                            <span>Schedule Consultation</span>
                            <ArrowRight className="arrow-shift" aria-hidden="true" />
                          </Link>
                          <a href="#capabilities" className="btn-secondary">
                            <span>Explore Service Offerings</span>
                          </a>
                        </>
                      )}
                    </div>
                  </motion.div>
                )}

                {!isBusinessAnalyticsPage && (
                  <motion.div
                    initial={reducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.6, delay: reducedMotion ? 0 : 0.16, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5"
                  >
                    <div className="clay-card p-3">
                      <img
                        src={service.featuredImage}
                        alt={service.title}
                        className="service-hero-image w-full h-72 sm:h-80 object-cover rounded-2xl"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
            {(heroStyle || isBusinessAnalyticsPage) && (
              <ServiceHeroMedia
                key={heroStyle || 'business-analytics'}
                videoRef={heroVideo}
                autoPlay={!reducedMotion && !digitalMarketingHero}
                extendRightEdge={Boolean(heroStyle)}
                sampleEdges={!isBusinessAnalyticsPage}
                poster={isBusinessAnalyticsPage
                  ? `${import.meta.env.BASE_URL}videos/data-analytics-poster.webp`
                  : `${import.meta.env.BASE_URL}videos/${service.slug}-poster.webp`}
                preload={reducedMotion ? 'none' : 'metadata'}
              >
                {!reducedMotion && (
                  <source
                    src={isBusinessAnalyticsPage
                      ? `${import.meta.env.BASE_URL}assets/aistudio/business-analytics-hero.mp4`
                      : `${import.meta.env.BASE_URL}videos/${service.slug}.mp4`}
                    type="video/mp4"
                  />
                )}
              </ServiceHeroMedia>
            )}
          </section>
        )}

        {/* 2. CHALLENGE & APPROACH */}
        {!isEnterpriseArchitecturePage && (
        isMobilityPage ? <MobilityPracticeSections /> : service.slug === 'supply-chain-management' ? <SupplyChainSections /> : service.slug === 'system-integration' ? <SystemIntegrationSections /> : service.slug === 'project-management' ? <ProjectManagementSections /> : (
        <>
        {!isEnterpriseArchitecturePage && !isBusinessAnalyticsPage && !isTargetSectionRemovalPage && (
        <section className="py-section bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="clay-card p-8 sm:p-9">
                <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold uppercase tracking-wider mb-3">
                  <AlertCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Business Challenge</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Addressing Operational Bottlenecks
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {service.businessChallenge}
                </p>
              </div>

              <div className="clay-pastel p-8 sm:p-9">
                <div className="flex items-center gap-2 text-accent text-xs font-mono font-bold uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  <span>How Prakvi Helps</span>
                </div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                  Tailored, Scalable Execution
                </h2>
                <p className="text-sm sm:text-base text-muted leading-relaxed">
                  {service.howWeHelp}
                </p>
              </div>
            </div>
          </div>
        </section>
        )}

        {hasDedicatedServiceSections && !cloudServicesHero && !isInfrastructurePage && (
          digitalMarketingHero ? (
            <DigitalMarketingSections service={service} />
          ) : mobileAppHero ? (
            <MobileAppDevelopmentSections service={service} />
          ) : isMobilityPage ? (
            <MobilityPracticeSections />
          ) : service.slug === 'supply-chain-management' ? (
            <SupplyChainSections />
          ) : service.slug === 'system-integration' ? (
            <SystemIntegrationSections />
          ) : (
            <ProjectManagementSections />
          )
        )}
        </>))}

        {/* 3. CORE SERVICE OFFERINGS */}
        {isEnterpriseArchitecturePage ? (
          <ArchitectureOfferingsWorkflow
            title={offeringsTitle}
            description={offeringsDescription}
            services={service.capabilities}
          />
        ) : isBusinessAnalyticsPage ? (
          <BusinessAnalyticsCarousel
            title={offeringsTitle}
            description={offeringsDescription}
            capabilities={service.capabilities}
            align="center"
          />
        ) : (
          !hasDedicatedServiceSections && (
            <section id="capabilities" className="py-section bg-canvas">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
              <SectionHeading
                badge="Capabilities"
                title={offeringsTitle}
                description={offeringsDescription}
              />
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.capabilities.map((cap, idx) => (
                  <div key={idx} className="clay-card clay-card-interactive p-7">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="clay-icon-box w-10 h-10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <h3 className="font-display text-base font-bold text-foreground">
                        {cap.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
              </div>
            </section>
          )
        )}



        {/* 5. METHODOLOGY / DELIVERY PROCESS */}
        {isEnterpriseArchitecturePage ? (
          <EnterpriseArchitectureJourney title={processTitle} description={processDescription} steps={service.deliverySteps} />
        ) : (isBusinessAnalyticsPage || !hasDedicatedServiceSections) && (
        <section id={isEnterpriseArchitecturePage ? 'enterprise-process' : isBusinessAnalyticsPage ? 'process' : undefined} className={`py-section ${isMobilityPage ? 'bg-surface/75' : 'bg-canvas'}${isBusinessAnalyticsPage ? ' business-analytics-process' : ''}`}>
          <div className={`${isBusinessAnalyticsPage ? 'max-w-[1380px]' : 'max-w-7xl'} mx-auto px-4 sm:px-6 lg:px-8`}>
            {isBusinessAnalyticsPage ? (
              <div className="business-analytics-process__intro">
                <h2 className="business-analytics-process__heading">{processTitle}</h2>
                <p className="business-analytics-process__subtitle">{processDescription}</p>
              </div>
            ) : (
              <SectionHeading
                badge="Our Process"
                title={processTitle}
                description={processDescription}
                align="center"
              />
            )}

            {isBusinessAnalyticsPage ? (
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
                      {
                        className: 'is-desktop-flow',
                        positions: analyticsCardPositions,
                      },
                      {
                        className: 'is-mobile-flow',
                        positions: analyticsMobileCardPositions,
                      },
                    ]).map(({ className, positions }) => (
                      <g className={className} key={className}>
                        {service.deliverySteps.slice(0, -1).map((_, index) => {
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
                          const progress = index < activeAnalyticsStep ? 1 : index === activeAnalyticsStep ? 0.42 : 0;
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
                                className={`business-analytics-process__connection-active${index === activeAnalyticsStep ? ' is-current' : ''}`}
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
                    aria-label="Business analytics process steps"
                  >
                    {service.deliverySteps.map((step, idx) => {
                      const isActive = activeAnalyticsStep === idx;
                      const StepIcon = analyticsStepIcons[idx] || Database;
                      const position = analyticsCardPositions[idx] || { x: 50, y: 50 };
                      const mobilePosition = analyticsMobileCardPositions[idx] || { x: 50, y: 50 };
                      return (
                        <motion.div
                          key={step.step}
                          className="business-analytics-process__card-slot"
                          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: reducedMotion ? 0 : 0.48, delay: reducedMotion ? 0 : idx * 0.075, ease: 'easeOut' }}
                          style={{
                            '--desktop-x': `${position.x}%`,
                            '--desktop-y': `${position.y}%`,
                            '--mobile-x': `${mobilePosition.x}%`,
                            '--mobile-y': `${mobilePosition.y}%`,
                            '--card-accent': analyticsCardAccents[idx] || '#48a8d4',
                            '--card-index': idx,
                          } as React.CSSProperties}
                        >
                          <motion.button
                            type="button"
                            aria-pressed={isActive}
                            aria-label={`Step ${step.step}: ${step.title}${isActive ? ', selected' : ''}`}
                            onMouseEnter={() => setActiveAnalyticsStep(idx)}
                            onFocus={() => setActiveAnalyticsStep(idx)}
                            onClick={() => setActiveAnalyticsStep(idx)}
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
                  style={{ '--card-accent': analyticsCardAccents[activeAnalyticsStep] || '#48a8d4' } as React.CSSProperties}
                >
                  <motion.div
                    key={activeAnalyticsStep}
                    className="business-analytics-process__selected-step"
                    initial={reducedMotion ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
                    aria-live="polite"
                  >
                      <div className="business-analytics-process__panel-top">
                        <span className="business-analytics-process__panel-icon"><ActiveAnalyticsIcon size={27} strokeWidth={1.8} /></span>
                        <span className="business-analytics-process__number">
                          {service.deliverySteps[activeAnalyticsStep].step}
                        </span>
                      </div>
                      <h3 className="business-analytics-process__title">
                        {service.deliverySteps[activeAnalyticsStep].title}
                      </h3>
                      <p className="business-analytics-process__description">
                        {service.deliverySteps[activeAnalyticsStep].description}
                      </p>
                      <ul className="business-analytics-process__details">
                        {service.deliverySteps[activeAnalyticsStep].points?.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                  </motion.div>
                  <div className="business-analytics-process__progress" role="group" aria-label={`Step ${activeAnalyticsStep + 1} of ${service.deliverySteps.length}`}>
                    <div
                      className="business-analytics-process__progress-segments"
                      aria-hidden="true"
                    >
                      {service.deliverySteps.map((step, idx) => (
                        <span
                          key={step.step}
                          className={`business-analytics-process__progress-segment${idx < activeAnalyticsStep ? ' is-complete' : ''}${idx === activeAnalyticsStep ? ' is-current' : ''}`}
                        />
                      ))}
                    </div>
                    <div className="business-analytics-process__progress-footer">
                      <span>
                        STEP {service.deliverySteps[activeAnalyticsStep].step}{' '}
                        <span className="business-analytics-process__progress-total">
                          / {String(service.deliverySteps.length).padStart(2, '0')}
                        </span>
                      </span>
                      {isBusinessAnalyticsPage && (
                        <button
                          type="button"
                          className="business-analytics-process__play-toggle"
                          aria-label={isAnalyticsAutoPlaying ? 'Pause automatic step progression' : 'Play automatic step progression'}
                          aria-pressed={isAnalyticsAutoPlaying}
                          onClick={() => setIsAnalyticsAutoPlaying((playing) => !playing)}
                        >
                          {isAnalyticsAutoPlaying ? <Pause size={15} /> : <Play size={15} />}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ) : <div
              className={`mt-12 grid grid-cols-1 gap-5 ${
                service.deliverySteps.length <= 5
                  ? 'md:grid-cols-2 lg:grid-cols-5'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              }`}
            >
              {service.deliverySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="clay-card p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="clay-icon-box w-10 h-10 font-mono font-extrabold text-sm flex items-center justify-center mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-line text-[11px] font-mono text-accent font-semibold">
                    Step {step.step}
                  </div>
                </div>
              ))}
            </div>}

          </div>
        </section>
        )}

        {/* 6. INTERACTIVE STACK & CAPABILITY MATRIX */}
        {isEnterpriseArchitecturePage ? (
          <ArchitectureCarousel title={service.stackTitle || service.title} description={service.stackSummary} categories={stackTabs} />
        ) : showStandardServiceSections && stackTabs.length > 0 && (
          <section className="py-section bg-canvas">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <SectionHeading
                badge="Capabilities & Stack"
                title={service.stackTitle || service.title}
                description={service.stackSummary}
                align="center"
              />

              <div className={isBusinessAnalyticsPage ? '' : 'mt-10 clay-card p-6 sm:p-10'}>
                {!isBusinessAnalyticsPage && (
                  <>
                <div className="flex justify-center pb-6 border-b border-line">
                  <div
                    className="inline-flex flex-wrap justify-center gap-1.5 rounded-full bg-surface/80 p-1.5 border border-line"
                    role="tablist"
                    aria-label={`${service.stackTitle || service.title} stack`}
                  >
                    {stackTabs.map((tab, idx) => {
                      const active = activeStackIndex === idx;
                      return (
                        <button
                          key={tab.label}
                          type="button"
                          id={stackTabId(idx)}
                          role="tab"
                          aria-selected={active}
                          aria-controls={stackPanelId}
                          tabIndex={active ? 0 : -1}
                          onKeyDown={event => handleStackTabKeyDown(event, idx)}
                          onClick={() => setActiveStackTab(idx)}
                          className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors active:scale-95 ${
                            active
                              ? 'text-white'
                              : 'text-muted hover:text-foreground'
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="service-stack-pill"
                              transition={
                                reducedMotion
                                  ? { duration: 0 }
                                  : { type: 'spring', stiffness: 440, damping: 32 }
                              }
                              className="absolute inset-0 rounded-full bg-accent shadow-sm"
                              aria-hidden="true"
                            />
                          )}
                          <span className="relative z-10">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  {currentStack && (
                    <motion.div
                      key={activeStackIndex}
                      id={stackPanelId}
                      role="tabpanel"
                      aria-labelledby={stackTabId(activeStackIndex)}
                      tabIndex={0}
                      initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                      transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.32, 0.72, 0, 1] }}
                      className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                      {currentStack.items.map((item) => (
                        <div
                          key={item}
                          className="clay-soft px-5 py-4 flex items-center gap-3 text-sm font-semibold text-foreground"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
                  </>
                )}
              <div
                className={isBusinessAnalyticsPage ? 'ea-carousel-interaction' : 'mt-10 clay-card p-6 sm:p-10'}
              >
                {isBusinessAnalyticsPage ? (
                  <>
                    <div className="ea-category-navigation">
                      <div
                        className="ea-category-tabs"
                        role="tablist"
                        aria-label="Business Analytics categories"
                      >
                        {stackTabs.map((tab, idx) => {
                          const Icon = businessAnalyticsCategoryIcons[idx] || Layers;
                          const active = activeStackTab === idx;
                          return (
                            <button
                              key={tab.label}
                              type="button"
                              role="tab"
                              id={`business-analytics-tab-${idx}`}
                              aria-selected={active}
                              aria-controls="business-analytics-tab-panel"
                              tabIndex={active ? 0 : -1}
                              className={`ea-category-tab${active ? ' is-active' : ''}`}
                              onClick={() => setActiveStackTab(idx)}
                              onKeyDown={(event) => {
                                let nextTab = idx;
                                if (event.key === 'ArrowRight') nextTab = (idx + 1) % stackTabs.length;
                                else if (event.key === 'ArrowLeft') nextTab = (idx - 1 + stackTabs.length) % stackTabs.length;
                                else if (event.key === 'Home') nextTab = 0;
                                else if (event.key === 'End') nextTab = stackTabs.length - 1;
                                else return;
                                event.preventDefault();
                                setActiveStackTab(nextTab);
                                document.getElementById(`business-analytics-tab-${nextTab}`)?.focus();
                              }}
                            >
                              <Icon aria-hidden="true" />
                              <span>{tab.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    {currentStack && (
                      <div
                        id="business-analytics-tab-panel"
                        role="tabpanel"
                        aria-labelledby={`business-analytics-tab-${activeStackTab}`}
                        tabIndex={0}
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        <BusinessAnalyticsStackOrbit
                          category={currentStack}
                          activeIndex={activeStackTab}
                        />
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    <div className={`flex pb-6 border-b border-line ${isEnterpriseArchitecturePage ? 'overflow-x-auto sm:justify-center' : 'justify-center'}`}>
                      <div className={`inline-flex justify-center gap-1.5 rounded-full bg-surface/80 p-1.5 border border-line ${isEnterpriseArchitecturePage ? 'shrink-0' : 'flex-wrap'}`} role={isEnterpriseArchitecturePage ? 'tablist' : undefined} aria-label={isEnterpriseArchitecturePage ? 'Enterprise Architecture' : undefined}>
                        {stackTabs.map((tab, idx) => {
                          const active = activeStackTab === idx;
                          return (
                            <button
                              key={tab.label}
                              type="button"
                              role={isEnterpriseArchitecturePage ? 'tab' : undefined}
                              id={isEnterpriseArchitecturePage ? `enterprise-tab-${idx}` : undefined}
                              aria-selected={isEnterpriseArchitecturePage ? active : undefined}
                              aria-controls={isEnterpriseArchitecturePage ? 'enterprise-tab-panel' : undefined}
                              onKeyDown={isEnterpriseArchitecturePage ? (event) => {
                                let nextTab = idx;
                                if (event.key === 'ArrowRight') nextTab = (idx + 1) % stackTabs.length;
                                else if (event.key === 'ArrowLeft') nextTab = (idx - 1 + stackTabs.length) % stackTabs.length;
                                else if (event.key === 'Home') nextTab = 0;
                                else if (event.key === 'End') nextTab = stackTabs.length - 1;
                                else return;
                                event.preventDefault();
                                setActiveStackTab(nextTab);
                                document.getElementById(`enterprise-tab-${nextTab}`)?.focus();
                              } : undefined}
                              onClick={() => setActiveStackTab(idx)}
                              className={`relative px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors active:scale-95 ${
                                active
                                  ? 'text-white'
                                  : 'text-muted hover:text-foreground'
                              }`}
                            >
                              {active && (
                                <motion.span
                                  layoutId="service-stack-pill"
                                  transition={
                                    reducedMotion
                                      ? { duration: 0 }
                                      : { type: 'spring', stiffness: 440, damping: 32 }
                                  }
                                  className="absolute inset-0 rounded-full bg-accent shadow-sm"
                                  aria-hidden="true"
                                />
                              )}
                              <span className="relative z-10">{tab.label}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                      {currentStack && (
                        <motion.div
                          key={activeStackTab}
                          id={isEnterpriseArchitecturePage ? 'enterprise-tab-panel' : undefined}
                          role={isEnterpriseArchitecturePage ? 'tabpanel' : undefined}
                          aria-labelledby={isEnterpriseArchitecturePage ? `enterprise-tab-${activeStackTab}` : undefined}
                          initial={reducedMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
                          transition={{ duration: reducedMotion ? 0 : 0.22, ease: [0.32, 0.72, 0, 1] }}
                          className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                        >
                          {currentStack.items.map((item) => (
                            <div
                              key={item}
                              className="clay-soft px-5 py-4 flex items-center gap-3 text-sm font-semibold text-foreground"
                            >
                              {isEnterpriseArchitecturePage ? (
                                <ArchitectureStackIcon className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                              ) : (
                                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                              )}
                              <span>{item}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                )}
              </div>
            </div>
          </div>
          </section>
        )}

        {/* 7. BUSINESS BENEFITS */}
        {!standardizedServiceSlugs.has(service.slug) && (
        <>
        <section className="py-section bg-canvas">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Business Value"
              title="Key Operational Outcomes"
              description="How Prakvi translates technical execution into reliable performance and long-term business value."
              animateWords={animateServiceHeadings}
              animateWordsOnce={animateServiceHeadings}
              align="center"
            />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.businessBenefits.map((b, idx) => (
                <div
                  key={idx}
                  className={`${idx === 1 ? 'clay-pastel' : 'clay-card'} p-8 text-center`}
                >
                  {b.metric && (
                    <div className="text-2xl sm:text-3xl font-extrabold font-display text-accent mb-3">
                      {b.metric}
                    </div>
                  )}
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{b.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FAQ */}
        <section className="py-section bg-canvas">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              badge="Frequently Asked Questions"
              title="Common Questions"
              animateWords={animateServiceHeadings}
              animateWordsOnce={animateServiceHeadings}
              align="center"
            />

            <div className="mt-10 space-y-4">
              {service.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="clay-card overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-bold text-sm sm:text-base text-foreground hover:text-accent active:scale-[0.995] transition-all"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-accent transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] shrink-0 ml-4 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={reducedMotion ? false : { opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={reducedMotion ? undefined : { opacity: 0, height: 0 }}
                          transition={{
                            duration: reducedMotion ? 0 : 0.28,
                            ease: [0.32, 0.72, 0, 1],
                          }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 sm:px-6 pb-6 pt-3 text-sm text-muted leading-relaxed border-t border-line">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        {service.slug !== 'accounting' && serviceCta}
        </>
        )}
      </div>
    </PageTransition>
  );
};
