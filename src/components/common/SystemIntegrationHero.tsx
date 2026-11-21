import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../../types';
import { Breadcrumbs } from './Breadcrumbs';
import { ScrollRevealText } from './ScrollRevealText';
import { ServiceHeroMedia } from './ServiceHeroMedia';
import './SystemIntegrationHero.css';

export const SystemIntegrationHero: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    if (reducedMotion) {
      video.pause();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          void video.play().catch(() => {
            /* Keep poster frame if autoplay is prevented */
          });
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const entrance = (delay: number) => ({
    initial: reducedMotion ? false as const : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      delay: reducedMotion ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <section
      ref={containerRef}
      className="enterprise-hero service-video-hero integration-hero relative isolate overflow-hidden"
      aria-labelledby="integration-hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: service.title }]} />

        <div className="enterprise-hero-copy">
          <div className="enterprise-hero-label text-xs font-mono font-bold uppercase tracking-[0.2em]">
            {service.badge || 'ERP, CRM & API Integration'}
          </div>

          <motion.h1
            id="integration-hero-title"
            className="enterprise-hero-title font-display font-extrabold tracking-tight"
            {...entrance(0.05)}
          >
            <ScrollRevealText text={service.tagline} preserveLayout />
          </motion.h1>

          <motion.p
            className="enterprise-hero-description"
            {...entrance(0.19)}
          >
            {service.fullDesc}
          </motion.p>

          <div className="enterprise-hero-actions flex flex-wrap gap-3 sm:gap-4">
            <motion.div {...entrance(0.26)}>
              <Link to="/contact" className="btn-primary">
                <span>Schedule Consultation</span>
                <ArrowRight className="arrow-shift" aria-hidden="true" />
              </Link>
            </motion.div>
            <motion.div {...entrance(0.33)}>
              <a href="#capabilities" className="btn-secondary">
                <span>Explore Service Offerings</span>
              </a>
            </motion.div>
            <motion.div {...entrance(0.4)}>
              <a href="#integration-process" className="btn-secondary">Our Process</a>
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceHeroMedia videoRef={videoRef} autoPlay={!reducedMotion} poster="/assets/aistudio/system-integration-poster.webp" extendRightEdge>
        <source src="/assets/aistudio/system-integration-animation.webm" type="video/webm" />
        <source src="/assets/aistudio/system-integration-animation.mp4" type="video/mp4" />
      </ServiceHeroMedia>
    </section>
  );
};
