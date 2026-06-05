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
