'use client';

import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
  type SpringOptions,
  AnimatePresence,
} from 'framer-motion';
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '../../lib/utils';

const DOCK_HEIGHT = 128;
const DEFAULT_MAGNIFICATION = 80;
const DEFAULT_DISTANCE = 150;
const DEFAULT_PANEL_HEIGHT = 64;

type DockProps = {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  panelHeight?: number;
  magnification?: number;
  spring?: SpringOptions;
};
type DockItemProps = {
  className?: string;
  children: React.ReactNode;
};
type DockLabelProps = {
  className?: string;
  children: React.ReactNode;
};
type DockIconProps = {
  className?: string;
  children: React.ReactNode;
};

type DocContextType = {
  mouseX: MotionValue;
  spring: SpringOptions;
  magnification: number;
  distance: number;
};

const DockContext = createContext<DocContextType | undefined>(undefined);

function useDock() {
  const context = useContext(DockContext);
  if (!context) {
    throw new Error('useDock must be used within an DockProvider');
  }
  return context;
}

type DockItemContextType = {
  width: MotionValue<number>;
  isHovered: MotionValue<number>;
};

const DockItemContext = createContext<DockItemContextType | undefined>(undefined);

function useDockItem() {
  const context = useContext(DockItemContext);
  if (!context) {
    throw new Error('Dock sub-components must be used within a DockItem');
  }
  return context;
}

function Dock({
  children,
  className,
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  panelHeight = DEFAULT_PANEL_HEIGHT,
}: DockProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  return (
    <div className="flex items-center justify-center">
      <motion.div
        onMouseMove={({ pageX }) => {
          isHovered.set(1);
          mouseX.set(pageX);
        }}
        onMouseLeave={() => {
          isHovered.set(0);
          mouseX.set(Infinity);
        }}
        className={cn(
          'mx-auto flex w-fit gap-4 rounded-[2.5rem] items-center px-4 relative',
          className
        )}
        style={{ height: panelHeight }}
        role='toolbar'
        aria-label='Application dock'
      >
        <DockContext.Provider value={{ mouseX, spring, distance, magnification }}>
          {children}
        </DockContext.Provider>
      </motion.div>
    </div>
  );
}

function DockItem({ children, className }: DockItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { distance, magnification, mouseX, spring } = useDock();
  const isHovered = useMotionValue(0);

  const mouseDistance = useTransform(mouseX, (val) => {
    const domRect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - domRect.x - domRect.width / 2;
  });

  const sizeTransform = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [44, magnification, 44]
  );

  const size = useSpring(sizeTransform, spring);

  return (
    <DockItemContext.Provider value={{ width: size, isHovered }}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onHoverStart={() => isHovered.set(1)}
        onHoverEnd={() => isHovered.set(0)}
        onFocus={() => isHovered.set(1)}
        onBlur={() => isHovered.set(0)}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full transition-colors duration-200',
          className
        )}
        tabIndex={0}
        role='button'
        aria-haspopup='true'
      >
        {children}
      </motion.div>
    </DockItemContext.Provider>
  );
}

function DockLabel({ children, className }: DockLabelProps) {
  const { isHovered } = useDockItem();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on('change', (latest) => {
      setIsVisible(latest === 1);
    });

    return () => unsubscribe();
  }, [isHovered]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: -20 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute -top-12 left-1/2 w-fit whitespace-pre rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-[11px] text-gray-900 font-black uppercase tracking-widest shadow-xl',
            className
          )}
          role='tooltip'
          style={{ x: '-50%' }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function DockIcon({ children, className }: DockIconProps) {
  const { width } = useDockItem();
  const iconSize = useTransform(width, (val) => val * 0.5);

  return (
    <motion.div
      style={{ width: iconSize, height: iconSize }}
      className={cn('flex items-center justify-center', className)}
    >
      {children}
    </motion.div>
  );
}

export { Dock, DockIcon, DockItem, DockLabel };
