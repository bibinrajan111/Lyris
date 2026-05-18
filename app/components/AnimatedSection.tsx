'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'section' | 'div' | 'article';
  id?: string;
};

const reveal = {
  hidden: { opacity: 0, y: 26, scale: 0.992 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function AnimatedSection({ children, className = '', delay = 0, as = 'section', id }: AnimatedSectionProps) {
  const MotionTag = as === 'article' ? motion.article : as === 'div' ? motion.div : motion.section;

  return (
    <MotionTag
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.16, margin: '0px 0px -8% 0px' }}
      variants={reveal}
      transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
