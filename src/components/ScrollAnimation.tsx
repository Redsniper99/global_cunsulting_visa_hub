'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Simplified ScrollAnimation - MUI has decent transitions but for scroll triggers on full sections we still can use this wrapper
// or we can remove it if we want to stick purely to MUI transitions, but framer motion + MUI is a good combo.

interface ScrollAnimationProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    delay?: number;
    className?: string; // Kept for compatibility
}

export default function ScrollAnimation({
    children,
    direction = 'up',
    delay = 0,
    className = '',
}: ScrollAnimationProps) {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
            x: direction === 'left' ? 30 : direction === 'right' ? -30 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 0.6,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1] as const, // easeOut curve
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    );
}
