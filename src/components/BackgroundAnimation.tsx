'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface Shape {
    width: number;
    height: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
    background: string;
}

export default function BackgroundAnimation() {
    const theme = useTheme();
    const [shapes, setShapes] = useState<Shape[]>([]);

    useEffect(() => {
        // Generate random shapes only on client-side to prevent hydration mismatch
        const newShapes = Array.from({ length: 6 }).map((_, i) => ({
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: i * 2,
            duration: Math.random() * 10 + 20,
            background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(59,89,152,0.08) 0%, rgba(255,255,255,0) 70%)'
                : 'radial-gradient(circle, rgba(201,76,76,0.06) 0%, rgba(255,255,255,0) 70%)',
        }));
        setShapes(newShapes);
    }, []);

    return (
        <Box
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
                overflow: 'hidden',
                pointerEvents: 'none',
                background: '#FAFBFF'
            }}
        >
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    animate={{
                        x: [0, 100, -100, 0],
                        y: [0, -100, 100, 0],
                        scale: [1, 1.2, 0.9, 1],
                        rotate: [0, 45, -45, 0],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: shape.delay,
                    }}
                    style={{
                        position: 'absolute',
                        left: shape.left,
                        top: shape.top,
                        width: shape.width,
                        height: shape.height,
                        borderRadius: '50%',
                        background: shape.background,
                        filter: 'blur(40px)',
                        opacity: 0.6,
                    }}
                />
            ))}

            {/* Subtle texture overlay for "premium" feel */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.4,
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233b5998\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
                }}
            />
        </Box>
    );
}
