
import React, { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import type { ServiceItem } from '../../types';
import { Breadcrumbs } from './Breadcrumbs';
import { ServiceHeroMedia } from './ServiceHeroMedia';
import { ScrollRevealText } from './ScrollRevealText';

export const CloudServicesHero: React.FC<{ service: ServiceItem }> = ({
  service,
}) => {
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (reducedMotion) {
      video.pause();
    } else {
      void video.play().catch(() => {
        // Keep the poster visible if autoplay is blocked.
      });
    }

    return () => video.pause();
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
      className="enterprise-hero service-video-hero project-hero cloud-services-hero relative isolate overflow-hidden"
      aria-labelledby="cloud-hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs
          variant="dark"
          items={[
            { label: 'Services', path: '/services' },
            { label: 'Cloud Services' },
          ]}
        />

        <div className="enterprise-hero-copy">
          <div className="enterprise-hero-label text-xs font-mono font-bold uppercase tracking-[0.2em]">
            {service.badge || 'Cloud Migration & Management'}
          </div>

          <motion.h1
            id="cloud-hero-title"
            className="enterprise-hero-title font-display font-extrabold tracking-tight"
            {...entrance(0.05)}
          >
            <ScrollRevealText
              text={service.title}
              preserveLayout
              once
            />
          </motion.h1>

          <motion.p
            className="enterprise-hero-tagline"
            {...entrance(0.12)}
          >
            {service.tagline}
          </motion.p>

          <motion.p
            className="enterprise-hero-description"
            {...entrance(0.19)}
          >
            {service.fullDesc}
          </motion.p>

          <div className="enterprise-hero-actions flex flex-wrap gap-3 sm:gap-4">
            <motion.div {...entrance(0.26)}>
              <a href="#capabilities" className="btn-primary">
                <span>Explore Services</span>
                <ArrowRight
                  className="arrow-shift"
                  aria-hidden="true"
                />
              </a>
            </motion.div>

            <motion.div {...entrance(0.33)}>
              <a href="#cloud-services-process" className="btn-secondary">
                <span>Our Process</span>
                <ArrowRight
                  className="arrow-shift"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <ServiceHeroMedia
        videoRef={videoRef}
        autoPlay={!reducedMotion}
        poster={`${import.meta.env.BASE_URL}videos/cloud-services-poster.webp`}
        preload="auto"
        extendRightEdge
      >
        {!reducedMotion && (
          <source
            src={`${import.meta.env.BASE_URL}videos/cloud-services.mp4`}
            type="video/mp4"
          />
        )}
      </ServiceHeroMedia>
    </section>
  );
};
