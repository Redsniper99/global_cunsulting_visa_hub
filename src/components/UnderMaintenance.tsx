'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import BuildIcon from '@mui/icons-material/Build';
import EmailIcon from '@mui/icons-material/Email';

export default function UnderMaintenance() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.08) 0%, rgba(107, 141, 214, 0.12) 100%)',
                position: 'relative',
                overflow: 'hidden',
                px: 2
            }}
        >
            {/* Animated Background Elements */}
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
                        top: '-20%',
                        right: '-20%',
                        width: 500,
                        height: 500,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(59, 89, 152, 0.15) 0%, rgba(255,255,255,0) 70%)',
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
                        bottom: '-20%',
                        left: '-20%',
                        width: 400,
                        height: 400,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(107, 141, 214, 0.12) 0%, rgba(255,255,255,0) 70%)',
                    }}
                />
            </Box>

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <Box sx={{ textAlign: 'center' }}>
                        {/* Logo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                        >
                            <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
                                <Image
                                    src="/Global Consulting & Visa Hub-01.svg"
                                    alt="Global Consulting & Visa Hub"
                                    width={200}
                                    height={80}
                                    style={{ objectFit: 'contain' }}
                                />
                            </Box>
                        </motion.div>

                        {/* Maintenance Icon */}
                        <motion.div
                            animate={{ rotate: [0, 10, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        >
                            <BuildIcon sx={{ fontSize: { xs: 60, md: 80 }, color: 'primary.main', mb: 3 }} />
                        </motion.div>

                        {/* Title */}
                        <Typography
                            variant="h2"
                            sx={{
                                fontSize: { xs: '1.75rem', sm: '2.5rem', md: '3rem' },
                                fontWeight: 700,
                                mb: 2,
                                background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            We&apos;re Under Maintenance
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            variant="h5"
                            color="text.secondary"
                            sx={{
                                fontSize: { xs: '1rem', sm: '1.25rem' },
                                mb: 4,
                                maxWidth: 600,
                                mx: 'auto',
                                lineHeight: 1.6
                            }}
                        >
                            Our website is currently undergoing scheduled maintenance to serve you better.
                            We&apos;ll be back online shortly!
                        </Typography>

                        {/* Contact Info */}
                        <Box
                            sx={{
                                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                backdropFilter: 'blur(10px)',
                                borderRadius: 3,
                                p: { xs: 3, md: 4 },
                                mb: 4,
                                border: '1px solid rgba(59, 89, 152, 0.1)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                Need immediate assistance?
                            </Typography>

                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                                <Link href="https://wa.me/19367884084" passHref target="_blank">
                                    <Button
                                        variant="contained"
                                        size="large"
                                        startIcon={<WhatsAppIcon />}
                                        sx={{
                                            backgroundColor: '#25D366',
                                            '&:hover': { backgroundColor: '#128C7E' },
                                            px: 4,
                                            py: 1.5
                                        }}
                                    >
                                        WhatsApp Us
                                    </Button>
                                </Link>
                                <Link href="mailto:info@gcvisahub.com" passHref>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        startIcon={<EmailIcon />}
                                        sx={{ px: 4, py: 1.5 }}
                                    >
                                        Email Us
                                    </Button>
                                </Link>
                            </Box>
                        </Box>

                        {/* Additional Info */}
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            Thank you for your patience. We apologize for any inconvenience.
                        </Typography>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
