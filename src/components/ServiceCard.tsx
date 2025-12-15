'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    features?: string[];
    href?: string;
    delay?: number;
}

export default function ServiceCard({
    icon,
    title,
    description,
    features = [],
    href,
    delay = 0,
}: ServiceCardProps) {
    const CardContent = (
        <Card
            sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                cursor: href ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(59, 89, 152, 0.12)',
                    '& .icon-box': {
                        transform: 'scale(1.1)',
                    },
                    '& .card-title': {
                        color: 'primary.main',
                    },
                    '& .learn-more': {
                        opacity: 1,
                        transform: 'translateX(0)',
                    }
                }
            }}
        >
            {/* Icon */}
            <Box
                className="icon-box"
                sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 4,
                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mb: 3,
                    transition: 'transform 0.3s ease',
                    '& svg': { fontSize: 28 }
                }}
            >
                {icon}
            </Box>

            {/* Title */}
            <Typography
                className="card-title"
                variant="h6"
                fontWeight="bold"
                sx={{ mb: 1.5, transition: 'color 0.2s' }}
            >
                {title}
            </Typography>

            {/* Description */}
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, flexGrow: 1, lineHeight: 1.6 }}>
                {description}
            </Typography>

            {/* Features List */}
            {features.length > 0 && (
                <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none', mb: 2 }}>
                    {features.map((feature, index) => (
                        <Box component="li" key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CheckCircleOutlineIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                                {feature}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            )}


        </Card>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ height: '100%' }}
        >
            {href ? (
                <Link href={href} style={{ textDecoration: 'none', height: '100%', display: 'block' }}>
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </motion.div>
    );
}
