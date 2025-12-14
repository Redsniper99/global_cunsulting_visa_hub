'use client';


import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import VerifiedIcon from '@mui/icons-material/Verified';
import Divider from '@mui/material/Divider';
import FlagSlider from './FlagSlider';

interface HeroProps {
    title?: string;
    subtitle?: string;
    description?: string;
    mobileDescription?: string;
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
    mobileDescription = 'Expert visa guidance for students, families & professionals. 5+ years experience with high approval rates.',
    primaryCTA = { text: 'Book a Free Consultation', href: '/contact' },
    secondaryCTA = { text: 'WhatsApp Us', href: 'https://wa.me/19367884084' },
    showBadge = true,
}: HeroProps) {


    return (
        <Box

            sx={{
                position: 'relative',
                minHeight: { xs: 'auto', md: '100vh' },
                display: 'flex',
                alignItems: 'center',
                background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.05) 0%, rgba(107, 141, 214, 0.08) 100%)',
                overflow: 'hidden',
                pt: { xs: 10, md: 12 },
                pb: { xs: 12, md: 8 },
                width: '100%',
                maxWidth: '100vw'
            }}
        >

            {/* Animated Background Elements */}
            <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
                {/* Gradient Circles */}
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

            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 3, md: 4 } }}>
                {/* Mobile Layout: Title/Subtitle at Top */}
                <Box sx={{ display: { xs: 'block', md: 'none' }, textAlign: 'center', mb: 2 }}>
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
                                    px: 1.5,
                                    py: 0.75,
                                    borderRadius: 50,
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(8px)',
                                    border: '1px solid rgba(59, 89, 152, 0.15)',
                                    mb: 2,
                                    boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
                                }}
                            >
                                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#4caf50', animation: 'pulse 2s infinite' }} />
                                <Typography variant="body2" fontWeight="500" color="text.primary" sx={{ fontSize: '0.75rem' }}>
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
                        <Typography variant="h1" sx={{
                            fontSize: '1.6rem',
                            mb: 1,
                            lineHeight: 1.2
                        }}>
                            Global Consulting & <Box component="span" sx={{ color: 'primary.main' }}>Visa Hub</Box>
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Typography variant="h5" color="primary" sx={{ mb: 0, fontWeight: 600, fontSize: '0.95rem' }}>
                            {subtitle}
                        </Typography>
                    </motion.div>
                </Box>

                {/* Main Flex Container */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'center',
                    gap: { xs: 2, md: 0 }
                }}>
                    {/* Left Content - Desktop Only for title/subtitle, Both for description/buttons/stats */}
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, pl: { md: 8, lg: 14 }, order: { xs: 2, md: 1 } }}>
                        {/* Desktop Badge */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
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
                        </Box>

                        {/* Desktop Title */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                            >
                                <Typography variant="h1" sx={{
                                    fontSize: { md: '3.5rem', lg: '4rem' },
                                    mb: 2,
                                    lineHeight: 1.2,
                                    whiteSpace: 'nowrap'
                                }}>
                                    Global Consulting & <Box component="span" sx={{ color: 'primary.main' }}>Visa Hub</Box>
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <Typography variant="h5" color="primary" sx={{ mb: 4, fontWeight: 600, fontSize: '1.25rem' }}>
                                    {subtitle}
                                </Typography>
                            </motion.div>
                        </Box>

                        {/* Desktop Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <Typography variant="body1" color="text.secondary" sx={{ display: { xs: 'none', md: 'block' }, mb: 6, fontSize: '1.125rem', maxWidth: '42rem' }}>
                                {description}
                            </Typography>
                        </motion.div>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: { xs: 'center', md: 'flex-start' }, alignItems: 'center', width: { xs: '100%', sm: 'auto' } }}>
                                <Link href={primaryCTA.href} passHref style={{ width: '100%', maxWidth: '280px' }}>
                                    <Button variant="contained" size="large" sx={{ px: 4, py: 1.5, fontSize: { xs: '1rem', sm: '1.1rem' }, width: { xs: '100%', sm: 'auto' } }}>
                                        {primaryCTA.text}
                                    </Button>
                                </Link>
                                <Link href={secondaryCTA.href} passHref target="_blank" style={{ width: '100%', maxWidth: '280px' }}>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<WhatsAppIcon />}
                                        sx={{
                                            px: 4,
                                            py: 1.5,
                                            fontSize: { xs: '1rem', sm: '1.1rem' },
                                            width: { xs: '100%', sm: 'auto' },
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

                        {/* Stats - Mobile */}
                        <Box sx={{ display: { xs: 'block', md: 'none' }, mt: 3 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 2
                                }}>
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: '1.25rem' }}>5+</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Years</Typography>
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ height: 30, alignSelf: 'center' }} />
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: '1.25rem' }}>500+</Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Cases</Typography>
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ height: 30, alignSelf: 'center' }} />
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, fontSize: '1.25rem' }}>
                                            USA <VerifiedIcon color="primary" sx={{ fontSize: 14 }} />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.7rem' }}>Licensed</Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Box>

                        {/* Stats - Desktop Only */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                            >
                                <Box sx={{
                                    mt: 6,
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center',
                                    gap: 4
                                }}>
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: '2.125rem' }}>5+</Typography>
                                        <Typography variant="body2" color="text.secondary">Years Experience</Typography>
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center' }} />
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ fontSize: '2.125rem' }}>500+</Typography>
                                        <Typography variant="body2" color="text.secondary">Successful Cases</Typography>
                                    </Box>
                                    <Divider orientation="vertical" flexItem sx={{ height: 40, alignSelf: 'center' }} />
                                    <Box textAlign="center">
                                        <Typography variant="h4" color="primary" fontWeight="bold" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.5, fontSize: '2.125rem' }}>
                                            USA <VerifiedIcon color="primary" sx={{ fontSize: 20 }} />
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">Licensed Consultant</Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Box>
                    </Box>

                    {/* Right Image - Visual in middle on mobile */}
                    <Box sx={{
                        flex: { xs: 1, md: '0 0 45%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        order: { xs: 1, md: 2 },
                        maxWidth: { xs: '100%', md: '45%' },
                        overflow: 'visible',
                        pr: { md: 2, lg: 4 }
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    width: { xs: 300, sm: 360, md: '100%' },
                                    maxWidth: { md: 420, lg: 500, xl: 550 },
                                    height: { xs: 380, sm: 450, md: 550, lg: 620, xl: 700 },
                                    mb: { xs: 0, md: 0 }
                                }}
                            >
                                {/* Girl Image - positioned at top */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: '70%',
                                        zIndex: 1
                                    }}
                                >
                                    <Image
                                        src="/images/visa_girl.png"
                                        alt="Visa consultant helping clients"
                                        fill
                                        style={{ objectFit: 'contain', objectPosition: 'center top' }}
                                        priority
                                    />
                                </Box>

                                {/* Passport SVG - positioned at bottom, overlapping with girl */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: '5%',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        width: { xs: '90%', sm: '85%', md: '80%' },
                                        height: '60%',
                                        zIndex: 2
                                    }}
                                >
                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: 'easeInOut'
                                        }}
                                        style={{ width: '100%', height: '100%', position: 'relative' }}
                                    >
                                        <Image
                                            src="/images/passport-01.svg"
                                            alt="Passport decoration"
                                            fill
                                            style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
                                        />
                                    </motion.div>
                                </Box>
                            </Box>
                        </motion.div>
                    </Box>
                </Box>
            </Container>

            {/* Flag Slider at Bottom */}
            <Box sx={{ position: 'absolute', bottom: { xs: 0, md: 0 }, left: 0, right: 0 }}>
                <FlagSlider />
            </Box>
        </Box>
    );
}

