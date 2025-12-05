'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    hover?: boolean;
}

export default function GlassCard({
    children,
    className = '',
    delay = 0,
    hover = true,
}: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
            style={{ height: '100%' }}
        >
            <Card
                className={className}
                elevation={0}
                sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.85)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(0, 40, 104, 0.1)',
                    borderRadius: 3,
                    boxShadow: '0 8px 32px rgba(0, 40, 104, 0.08)',
                    transition: 'all 0.3s ease',
                    '&:hover': hover ? {
                        boxShadow: '0 12px 40px rgba(0, 40, 104, 0.12)',
                        borderColor: 'rgba(0, 40, 104, 0.2)',
                    } : {},
                }}
            >
                {children}
            </Card>
        </motion.div>
    );
}
