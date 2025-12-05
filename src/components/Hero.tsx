'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import Divider from '@mui/material/Divider';
import FlagSlider from './FlagSlider';

interface HeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
    };
    showBadge?: boolean;
}

export default function Hero({
    title = 'Global Consulting & Visa Hub',
    subtitle = 'Your Trusted Partner for US & Schengen Visa Success',
    description = 'Expert guidance, transparent process, and personalized support for students, families, and professionals. Over 5 years of experience helping clients achieve their visa goals with high approval outcomes.',
    primaryCTA = { text: 'Book a Free Consultation', href: '/contact' },
    secondaryCTA = { text: 'WhatsApp Us', href: 'https://wa.me/19367884084' },
    showBadge = true,
}: HeroProps) {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.05) 0%, rgba(107, 141, 214, 0.08) 100%)',
                overflow: 'hidden',
                pt: 12,
                pb: 8
            }}
        >
            {/* Animated Background Elements - kept framer motion for subtle background effects */}
            <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    style={{
                        position: 'absolute',
                        top: '-25%',
                        right: '-25%',
                        width: 600,
                        height: 600,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 89, 152, 0.1) 0%, rgba(255,255,255,0) 70%)',
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                    }}
                    style={{
                        position: 'absolute',
                        bottom: '-25%',
                        left: '-25%',
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(107, 141, 214, 0.08) 0%, rgba(255,255,255,0) 70%)',
                    }}
                />
            </Box>

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                {showBadge && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 1,
                                px: 2,
                                py: 1,
                                borderRadius: 50,
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(8px)',
                                border: '1px solid rgba(59, 89, 152, 0.15)',
                                mb: 4,
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50', animation: 'pulse 2s infinite' }} />
                            <Typography variant="body2" fontWeight="500" color="text.primary">
                                Now accepting consultation bookings
                            </Typography>
                        </Box>
                    </motion.div>
                )}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' }, mb: 2, lineHeight: 1.1 }}>
                        Global Consulting & <Box component="span" sx={{ color: 'primary.main' }}>Visa Hub</Box>
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Typography variant="h5" color="primary" sx={{ mb: 4, fontWeight: 600 }}>
                        {subtitle}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 6, fontSize: '1.125rem', maxWidth: '42rem', mx: 'auto' }}>
                        {description}
                    </Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center', alignItems: 'center' }}>
                        <Link href={primaryCTA.href} passHref>
                            <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: '1.1rem' }}>
                                {primaryCTA.text}
                            </Button>
                        </Link>
                        <Link href={secondaryCTA.href} passHref target="_blank">
                            <Button
                                variant="outlined"
                                size="large"
                                startIcon={<WhatsAppIcon />}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    fontSize: '1.1rem',
                                    borderColor: '#25D366',
                                    color: '#25D366',
                                    '&:hover': {
                                        borderColor: '#128C7E',
                                        backgroundColor: 'rgba(37, 211, 102, 0.04)'
                                    }
                                }}
                            >
                                {secondaryCTA.text}
                            </Button>
                        </Link>
                    </Box>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Box sx={{ mt: 8, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: { xs: 3, md: 4 } }}>
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>5+</Typography>
                            <Typography variant="body2" color="text.secondary">Years Experience</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', display: { xs: 'none', sm: 'block' } }} />
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}>500+</Typography>
                            <Typography variant="body2" color="text.secondary">Successful Cases</Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center', display: { xs: 'none', sm: 'block' } }} />
                        <Box textAlign="center">
                            <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                                USA <VerifiedIcon color="primary" sx={{ fontSize: { xs: 16, md: 20 } }} />
                            </Typography>
                            <Typography variant="body2" color="text.secondary">Licensed Consultant</Typography>
                        </Box>
                    </Box>
                </motion.div>
            </Container>

            {/* Flag Slider at Bottom */}
            <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <FlagSlider />
            </Box>
        </Box>
    );
}
