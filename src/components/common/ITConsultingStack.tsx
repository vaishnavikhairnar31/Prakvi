import React, { useId, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Activity,
  Cloud,
  Code2,
  Database,
  Layers,
  Monitor,
  Network,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceStackTab } from '../../types';
import { BusinessAnalyticsStackOrbit } from './BusinessAnalyticsStackOrbit';
import './ITConsultingStack.css';

const categoryIcons: LucideIcon[] = [Monitor, Workflow, Database, Cloud];
const technologyIconSets: LucideIcon[][] = [
  [Code2, Monitor, Layers, Activity, Code2, Code2],
  [Workflow, Server, Wrench, Database, Layers, Code2],
  [Database, Database, Database, Activity, Cloud, Server],
  [Workflow, Server, Cloud, Cloud, Network, Wrench],
];
const tabTransition = { type: 'spring', stiffness: 440, damping: 32 } as const;

export const ITConsultingStack: React.FC<{ categories: ServiceStackTab[] }> = ({ categories }) => {
  const reducedMotion = useReducedMotion();
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeIndex = Math.min(selectedIndex, categories.length - 1);
  const activeCategory = categories[activeIndex];
  const tabId = (index: number) => `${id}-tab-${index}`;
  const panelId = `${id}-panel`;

  if (!activeCategory) return null;

  const selectTab = (index: number) => {
    setSelectedIndex(index);
    tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % categories.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + categories.length) % categories.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = categories.length - 1;
    else return;
    event.preventDefault();
    selectTab(nextIndex);
  };

  return (
    <div className="it-consulting-stack">
      <div className="it-consulting-stack__navigation">
        <div
          className="it-consulting-stack__tabs"
          role="tablist"
          aria-label="IT Consulting technology categories"
        >
          {categories.map((category, index) => {
            const Icon = categoryIcons[index] || Layers;
            const isActive = activeIndex === index;
            return (
              <button
                key={category.label}
                ref={element => { tabRefs.current[index] = element; }}
                type="button"
                id={tabId(index)}
                role="tab"
                aria-selected={isActive}
                aria-controls={panelId}
                tabIndex={isActive ? 0 : -1}
                className={`it-consulting-stack__tab${isActive ? ' is-active' : ''}`}
                onClick={() => setSelectedIndex(index)}
                onKeyDown={event => handleTabKeyDown(event, index)}
              >
                {isActive && (
                  <motion.span
                    layoutId={`${id}-active-tab`}
                    transition={reducedMotion ? { duration: 0 } : tabTransition}
                    className="it-consulting-stack__active-pill"
                    aria-hidden="true"
                  />
                )}
                <Icon className="it-consulting-stack__tab-icon" aria-hidden="true" />
                <span className="it-consulting-stack__tab-label">{category.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id={panelId}
        role="tabpanel"
        aria-labelledby={tabId(activeIndex)}
        aria-live="polite"
        aria-atomic="true"
        className="it-consulting-stack__panel"
      >
        <BusinessAnalyticsStackOrbit
          category={activeCategory}
          activeIndex={activeIndex}
          categoryIcons={categoryIcons}
          technologyIconSets={technologyIconSets}
          className="it-consulting-stack__orbit"
        />
      </div>
    </div>
  );
};
