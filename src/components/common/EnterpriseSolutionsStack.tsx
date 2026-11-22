import { useCallback, useEffect, useRef, useState } from 'react';
import {
  AnimatePresence,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'motion/react';
import {
  Atom,
  Braces,
  CheckCircle2,
  Cloud,
  Coffee,
  Code2,
  Container,
  Database,
  FileCode2,
  FileJson,
  Flame,
  Gem,
  GitBranch,
  Globe,
  Grid2x2,
  Hash,
  Hexagon,
  Layers,
  Leaf,
  Monitor,
  Server,
  Table2,
  Triangle,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import type { ServiceStackTab } from '../../types';
import { continuousOrbitStep, useOrbitAngle } from './orbitMotion';
import './EnterpriseSolutionsStack.css';

const categoryIcons: LucideIcon[] = [Monitor, Server, Database, Cloud];

const technologyIcons: LucideIcon[][] = [
  [Atom, Triangle, Hexagon, FileJson, FileCode2, Hash],
  [Hexagon, Braces, Braces, Coffee, Gem, Grid2x2],
  [Leaf, Database, Table2, Zap, Flame, Grid2x2],
  [GitBranch, Container, Cloud, Cloud, Globe, Server],
];

const ease = [0.22, 1, 0.36, 1] as const;

function OrbitTechnology({
  label,
  Icon,
  index,
  phase,
}: {
  label: string;
  Icon: LucideIcon;
  index: number;
  phase: MotionValue<number>;
}) {
  const angle = useOrbitAngle(phase, index, 6, 90);
  const x = useTransform(angle, value => `calc(var(--enterprise-orbit-x) * ${Math.cos(value)})`);
  const y = useTransform(angle, value => `calc(var(--enterprise-orbit-y) * ${Math.sin(value)})`);
  const z = useTransform(angle, value => Math.sin(value) * 40);
  const scale = useTransform(angle, value => 0.96 + Math.sin(value) * 0.04);
  const zIndex = useTransform(angle, value => Math.round((Math.sin(value) + 1) * 10) + 2);
  const transform = useMotionTemplate`translateX(${x}) translateY(${y}) translateZ(${z}px) scale(${scale})`;

  return (
    <motion.div
      role="listitem"
      className="enterprise-orbit-card"
      style={{ transform, zIndex }}
    >
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </motion.div>
  );
}

export function EnterpriseSolutionsStack({ categories }: { categories: ServiceStackTab[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stageRef = useRef<HTMLDivElement>(null);
  const phase = useMotionValue(0);
  const reducedMotion = useReducedMotion();
  const inView = useInView(stageRef, { amount: 0.15 });
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const canAnimate = inView && pageVisible && !reducedMotion && !hovered;

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  useAnimationFrame(useCallback((_time, delta) => {
    if (canAnimate) {
      phase.set((phase.get() + continuousOrbitStep(delta, 18000, 1)) % 360);
    }
  }, [canAnimate, phase]));

  const activeCategory = categories[Math.min(Math.max(activeIndex, 0), categories.length - 1)];
  if (!activeCategory) return null;

  const CategoryIcon = categoryIcons[activeIndex] || Layers;
  const displayedItems = activeCategory.items.slice(0, 6);

  return (
    <div className="enterprise-solutions-stack">
      <nav className="enterprise-stack-navigation" aria-label="Technology categories">
        <div className="enterprise-stack-tabs" role="tablist" aria-label="Enterprise Solution technologies">
          {categories.map((category, index) => {
            const Icon = categoryIcons[index] || CheckCircle2;
            const active = index === activeIndex;
            return (
              <button
                key={category.label}
                type="button"
                role="tab"
                id={`enterprise-stack-tab-${index}`}
                aria-selected={active}
                aria-controls="enterprise-stack-panel"
                tabIndex={active ? 0 : -1}
                className={`enterprise-stack-tab${active ? ' is-active' : ''}`}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  let next = index;
                  if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
                  else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
                  else if (event.key === 'Home') next = 0;
                  else if (event.key === 'End') next = categories.length - 1;
                  else return;
                  event.preventDefault();
                  setActiveIndex(next);
                  document.getElementById(`enterprise-stack-tab-${next}`)?.focus();
                }}
              >
                <Icon aria-hidden="true" />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div
        id="enterprise-stack-panel"
        role="tabpanel"
        aria-labelledby={`enterprise-stack-tab-${activeIndex}`}
        tabIndex={0}
        aria-live="polite"
        aria-atomic="true"
      >
        <div
          ref={stageRef}
          className="enterprise-stack-orbit"
          data-category={activeIndex}
          onPointerEnter={(event) => {
            if (event.pointerType !== 'touch') setHovered(true);
          }}
          onPointerLeave={() => setHovered(false)}
        >
          <div className="enterprise-orbit-guide" aria-hidden="true" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory.label}
              className="enterprise-orbit-hub"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
              transition={{ duration: reducedMotion ? 0 : 0.22, ease }}
            >
              <CategoryIcon aria-hidden="true" />
              <span>{activeCategory.label}</span>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="enterprise-orbit-items"
            role="list"
            aria-label={`${activeCategory.label} technologies`}
          >
            {displayedItems.map((item, index) => (
              <OrbitTechnology
                key={`${activeCategory.label}-${item}`}
                label={item}
                Icon={technologyIcons[activeIndex]?.[index] || CheckCircle2}
                index={index}
                phase={phase}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
