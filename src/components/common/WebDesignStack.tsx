import { useCallback, useEffect, useRef, useState } from 'react';
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from 'motion/react';
import {
  Atom,
  Blocks,
  BookOpen,
  Braces,
  CheckCircle2,
  Cloud,
  Coffee,
  Code2,
  Droplet,
  FileCode2,
  Flame,
  Figma,
  Gem,
  Globe,
  Grid2X2,
  Hexagon,
  LayoutDashboard,
  PanelsTopLeft,
  PencilRuler,
  PenTool,
  Puzzle,
  Ruler,
  Shield,
  SquareCode,
  SquareDashedMousePointer,
  Triangle,
  type LucideIcon,
} from 'lucide-react';
import { ServiceStackTab } from '../../types';
import { continuousOrbitStep, useOrbitAngle } from './orbitMotion';
import './WebDesignStack.css';

const categoryIcons: LucideIcon[] = [Braces, Puzzle, LayoutDashboard, PenTool];
const technologyIcons: Record<string, LucideIcon> = {
  React: Atom,
  'Vue.js': Triangle,
  Angular: Shield,
  JavaScript: SquareCode,
  HTML5: Code2,
  CSS3: Braces,
  'Node.js Integration': Hexagon,
  'Python APIs': Braces,
  'PHP Templates': FileCode2,
  'Java Backend': Coffee,
  'Ruby on Rails': Gem,
  '.NET Core': Grid2X2,
  WordPress: BookOpen,
  Drupal: Droplet,
  Joomla: Blocks,
  'Sanity.io': PenTool,
  'Firebase CMS': Flame,
  Contentful: Cloud,
  Figma,
  Sketch: PencilRuler,
  'Adobe XD': PanelsTopLeft,
  InVision: Globe,
  Zeplin: Ruler,
  Webflow: SquareDashedMousePointer,
};

const OrbitNode: React.FC<{
  label: string;
  icon: LucideIcon;
  index: number;
  count: number;
  phase: MotionValue<number>;
}> = ({ label, icon: Icon, index, count, phase }) => {
  const radians = useOrbitAngle(phase, index, count, 90);
  const x = useTransform(radians, (value) => `calc(var(--web-orbit-x) * ${Math.cos(value)})`);
  const y = useTransform(radians, (value) => `calc(var(--web-orbit-y) * ${Math.sin(value)})`);
  const z = useTransform(radians, (value) => Math.sin(value) * 36);
  const scale = useTransform(radians, (value) => 0.97 + Math.sin(value) * 0.03);
  const zIndex = useTransform(radians, (value) => Math.round((Math.sin(value) + 1) * 10) + 2);

  return (
    <motion.div
      role="listitem"
      className="web-orbit-node"
      style={{ x, y, z, scale, zIndex }}
    >
      <Icon aria-hidden="true" />
      <span>{label}</span>
    </motion.div>
  );
};

export const WebDesignStack: React.FC<{
  categories: ServiceStackTab[];
  activeIndex: number;
  onActiveIndexChange: (index: number) => void;
}> = ({ categories, activeIndex, onActiveIndexChange }) => {
  const reducedMotion = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const inView = useInView(stageRef, { amount: 0.15 });
  const phase = useMotionValue(0);
  const [hovered, setHovered] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const activeCategory = categories[Math.max(0, Math.min(activeIndex, categories.length - 1))];
  const HubIcon = categoryIcons[activeIndex] || CheckCircle2;

  useEffect(() => {
    const updateVisibility = () => setPageVisible(!document.hidden);
    updateVisibility();
    document.addEventListener('visibilitychange', updateVisibility);
    return () => document.removeEventListener('visibilitychange', updateVisibility);
  }, []);

  const canAnimate = inView && pageVisible && !reducedMotion && !hovered;
  useAnimationFrame(useCallback((_time, delta) => {
    if (canAnimate) phase.set((phase.get() + continuousOrbitStep(delta, 22000, 1)) % 360);
  }, [canAnimate, phase]));

  if (!activeCategory) return null;

  const selectCategory = (index: number) => {
    onActiveIndexChange(index);
  };

  return (
    <div
      className="web-design-stack"
      onPointerEnter={(event) => {
        if (event.pointerType !== 'touch') setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="web-category-navigation" role="tablist" aria-label="Web Design categories">
        {categories.map((category, index) => {
          const Icon = categoryIcons[index] || CheckCircle2;
          const active = index === activeIndex;
          return (
            <button
              key={category.label}
              type="button"
              role="tab"
              id={`web-design-stack-tab-${index}`}
              aria-selected={active}
              aria-controls="web-design-stack-panel"
              tabIndex={active ? 0 : -1}
              className={`web-category-tab${active ? ' is-active' : ''}`}
              onClick={() => selectCategory(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === 'ArrowRight') next = (index + 1) % categories.length;
                else if (event.key === 'ArrowLeft') next = (index - 1 + categories.length) % categories.length;
                else if (event.key === 'Home') next = 0;
                else if (event.key === 'End') next = categories.length - 1;
                else return;
                event.preventDefault();
                selectCategory(next);
                document.getElementById(`web-design-stack-tab-${next}`)?.focus();
              }}
            >
              <Icon aria-hidden="true" />
              <span>{category.label}</span>
            </button>
          );
        })}
      </div>

      <div
        ref={stageRef}
        id="web-design-stack-panel"
        role="tabpanel"
        aria-labelledby={`web-design-stack-tab-${activeIndex}`}
        aria-live="polite"
        aria-atomic="true"
        className={`web-orbit-stage${activeCategory.items.length > 4 ? ' web-orbit-stage--six-nodes' : ''}`}
      >
        <div className="web-orbit-guide" aria-hidden="true" />
        <motion.div
          key={activeCategory.label}
          className="web-orbit-hub"
          initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.32 }}
          aria-label={`Active category: ${activeCategory.label}`}
        >
          <HubIcon aria-hidden="true" />
          <span>{activeCategory.label}</span>
        </motion.div>

        {activeCategory.items.map((item, index) => {
          const Icon = technologyIcons[item] || Code2;
          return (
            <motion.div
              key={item}
              className="web-orbit-slot"
              initial={reducedMotion ? false : { opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: reducedMotion ? 0 : 0.28 }}
            >
              <OrbitNode
                label={item}
                icon={Icon}
                index={index}
                count={activeCategory.items.length}
                phase={phase}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
