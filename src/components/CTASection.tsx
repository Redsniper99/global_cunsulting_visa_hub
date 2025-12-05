'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface CTASectionProps {
    title?: string;
    description?: string;
    primaryCTA?: {
        text: string;
        href: string;
    };
    secondaryCTA?: {
        text: string;
        href: string;
        isWhatsApp?: boolean;
    };
    variant?: 'default' | 'gradient';
}

export default function CTASection({
    title = "Ready to Start Your Visa Journey?",
    description = "Book a free consultation with our expert team and take the first step towards your American or European dream.",
    primaryCTA = { text: 'Book a Free Consultation', href: '/contact' },
    secondaryCTA = { text: 'WhatsApp Us', href: 'https://wa.me/19367884084', isWhatsApp: true },
    variant = 'default',
}: CTASectionProps) {
    const isGradient = variant === 'gradient';

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                position: 'relative',
                background: !isGradient ? 'linear-gradient(135deg, rgba(59, 89, 152, 0.05) 0%, rgba(107, 141, 214, 0.08) 100%)' : 'transparent'
            }}
        >
            <Container maxWidth="lg">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Box
                        sx={{
                            p: { xs: 4, md: 8 },
                            borderRadius: 4,
                            textAlign: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            background: isGradient
                                ? 'linear-gradient(135deg, #3B5998 0%, #2C4373 100%)'
                                : 'rgba(255, 255, 255, 0.85)',
                            backdropFilter: !isGradient ? 'blur(16px)' : 'none',
                            border: !isGradient ? '1px solid rgba(59, 89, 152, 0.15)' : 'none',
                            boxShadow: isGradient ? '0 20px 40px rgba(59, 89, 152, 0.2)' : '0 8px 32px rgba(59, 89, 152, 0.1)',
                            color: isGradient ? 'white' : 'text.primary'
                        }}
                    >
                        {/* Background pattern for gradient variant */}
                        {isGradient && (
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    opacity: 0.1,
                                    backgroundImage: 'radial-gradient(circle at 10% 20%, rgba(255,255,255,0.4) 0%, transparent 20%), radial-gradient(circle at 90% 80%, rgba(255,255,255,0.4) 0%, transparent 20%)',
                                    zIndex: 0
                                }}
                            />
                        )}

                        <Box sx={{ position: 'relative', zIndex: 1 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    sx={{
                                        mb: 2,
                                        fontSize: { xs: '2rem', md: '3rem' }
                                    }}
                                >
                                    {title}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 6,
                                        maxWidth: 'sm',
                                        mx: 'auto',
                                        fontWeight: 400,
                                        opacity: 0.9,
                                        color: isGradient ? 'rgba(255,255,255,0.9)' : 'text.secondary'
                                    }}
                                >
                                    {description}
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                                    <Link href={primaryCTA.href} passHref>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 50,
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                background: isGradient
                                                    ? 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)'
                                                    : 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                color: isGradient ? '#3B5998' : 'white',
                                                boxShadow: isGradient
                                                    ? '0 4px 20px rgba(255, 255, 255, 0.3)'
                                                    : '0 4px 14px rgba(59, 89, 152, 0.4)',
                                                '&:hover': {
                                                    background: isGradient
                                                        ? 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)'
                                                        : 'linear-gradient(135deg, #324b80 0%, #5a7bc4 100%)',
                                                    boxShadow: isGradient
                                                        ? '0 6px 24px rgba(255, 255, 255, 0.4)'
                                                        : '0 6px 20px rgba(59, 89, 152, 0.5)',
                                                },
                                            }}
                                        >
                                            {primaryCTA.text}
                                        </Button>
                                    </Link>

                                    <Link href={secondaryCTA.href} passHref target={secondaryCTA.isWhatsApp ? '_blank' : undefined}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            startIcon={secondaryCTA.isWhatsApp ? <WhatsAppIcon /> : null}
                                            sx={{
                                                px: 4,
                                                py: 1.5,
                                                borderRadius: 50,
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                borderWidth: 2,
                                                borderColor: isGradient ? 'white' : '#25D366',
                                                color: isGradient ? 'white' : '#25D366',
                                                bgcolor: 'transparent',
                                                '&:hover': {
                                                    borderWidth: 2,
                                                    borderColor: isGradient ? 'white' : '#128C7E',
                                                    bgcolor: isGradient ? 'rgba(255,255,255,0.15)' : 'rgba(37, 211, 102, 0.1)',
                                                    color: isGradient ? 'white' : '#128C7E',
                                                },
                                            }}
                                        >
                                            {secondaryCTA.text}
                                        </Button>
                                    </Link>
                                </Box>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}
