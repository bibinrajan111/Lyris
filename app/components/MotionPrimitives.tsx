'use client';

import { motion, type Variants } from 'framer-motion';
import type { ElementType, ReactNode } from 'react';

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 32, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function FadeIn({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'article' | 'aside';
}) {
  const Component = motion[as] as ElementType;

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

export function SplitWords({ text, className = '' }: { text: string; className?: string }) {
  return (
    <motion.span
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ staggerChildren: 0.045 }}
      className={className}
    >
      {text.split(' ').map((word, index) => (
        <motion.span key={`${word}-${index}`} variants={wordVariants} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mr-[0.22em] inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function WaterAura() {
  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl"
        animate={{ x: [0, 80, 20, 0], y: [0, 30, -20, 0], scale: [1, 1.12, 0.95, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-10 h-[34rem] w-[34rem] rounded-full bg-blue-300/20 blur-3xl"
        animate={{ x: [0, -70, 30, 0], y: [0, 60, -10, 0], scale: [1, 0.92, 1.08, 1] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-white/40 blur-3xl"
        animate={{ x: [0, 40, -40, 0], y: [0, -35, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
