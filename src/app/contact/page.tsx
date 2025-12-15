'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const visaTypes = [
    'F-1 Student Visa',
    'J-1 Exchange Visitor',
    'B-1/B-2 Tourist/Business',
    'F-2 Dependent Visa',
    'K-1 Fiancé Visa',
    'Schengen Tourist',
    'Schengen Business',
    'Schengen Student',
    'Other',
];

const targetCountries = [
    'United States',
    'Germany',
    'France',
    'Italy',
    'Spain',
    'Netherlands',
    'Belgium',
    'Austria',
    'Switzerland',
    'Other Schengen Country',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        visaType: '',
        targetCountry: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', phone: '', visaType: '', targetCountry: '', message: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <>
            {/* Hero Section */}
            <Box
                component="section"
                sx={{
                    pt: { xs: 16, md: 20 },
                    pb: { xs: 8, md: 12 },
                    background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.05) 0%, rgba(107, 141, 214, 0.08) 100%)',
                }}
            >
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                sx={{ mb: 3, fontSize: { xs: '2rem', md: '3rem' } }}
                            >
                                Get In <Box component="span" sx={{ color: 'primary.main' }}>Touch</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
                            >
                                Ready to start your visa journey? Book a free consultation or reach out to us
                                with your questions. We&apos;re here to help you achieve your goals.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Contact Section */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6}>
                        {/* Contact Form */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <ScrollAnimation direction="left">
                                <GlassCard hover={false}>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>
                                        Book a Free Consultation
                                    </Typography>

                                    {submitStatus === 'success' ? (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                        >
                                            <Box textAlign="center" py={6}>
                                                <Box
                                                    sx={{
                                                        width: 64,
                                                        height: 64,
                                                        borderRadius: '50%',
                                                        bgcolor: 'success.light',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mx: 'auto',
                                                        mb: 2,
                                                    }}
                                                >
                                                    <CheckCircleIcon sx={{ fontSize: 32, color: 'success.main' }} />
                                                </Box>
                                                <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                    Thank You!
                                                </Typography>
                                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                                    We&apos;ve received your inquiry and will get back to you within 24 hours.
                                                </Typography>
                                                <Button variant="outlined" onClick={() => setSubmitStatus('idle')}>
                                                    Send Another Message
                                                </Button>
                                            </Box>
                                        </motion.div>
                                    ) : (
                                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                            <TextField
                                                fullWidth
                                                label="Full Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                            <Grid container spacing={2}>
                                                <Grid size={{ xs: 12, md: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="Email Address"
                                                        name="email"
                                                        type="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Grid>
                                                <Grid size={{ xs: 12, md: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        label="Phone / WhatsApp"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        required
                                                    />
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={2}>
                                                <Grid size={{ xs: 12, md: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        select
                                                        label="Visa Type"
                                                        name="visaType"
                                                        value={formData.visaType}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        {visaTypes.map(type => (
                                                            <MenuItem key={type} value={type}>{type}</MenuItem>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                                <Grid size={{ xs: 12, md: 6 }}>
                                                    <TextField
                                                        fullWidth
                                                        select
                                                        label="Target Country"
                                                        name="targetCountry"
                                                        value={formData.targetCountry}
                                                        onChange={handleChange}
                                                        required
                                                    >
                                                        {targetCountries.map(country => (
                                                            <MenuItem key={country} value={country}>{country}</MenuItem>
                                                        ))}
                                                    </TextField>
                                                </Grid>
                                            </Grid>
                                            <TextField
                                                fullWidth
                                                label="Your Message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                multiline
                                                rows={4}
                                            />
                                            <Button
                                                type="submit"
                                                variant="contained"
                                                size="large"
                                                disabled={isSubmitting}
                                                sx={{
                                                    py: 1.5,
                                                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                }}
                                            >
                                                {isSubmitting ? (
                                                    <CircularProgress size={24} color="inherit" />
                                                ) : (
                                                    'Send Message'
                                                )}
                                            </Button>
                                        </Box>
                                    )}
                                </GlassCard>
                            </ScrollAnimation>
                        </Grid>

                        {/* Contact Info */}
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <ScrollAnimation direction="right">
                                <Box>
                                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
                                        Contact Information
                                    </Typography>
                                    <Typography color="text.secondary" sx={{ mb: 4 }}>
                                        Prefer to reach out directly? We&apos;re available via multiple channels.
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <GlassCard>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(37, 211, 102, 0.1)' }}>
                                                    <WhatsAppIcon sx={{ color: '#25D366' }} />
                                                </Box>
                                                <Box>
                                                    <Typography fontWeight={600}>WhatsApp</Typography>
                                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                                        Fastest way to reach us
                                                    </Typography>
                                                    <Typography
                                                        component="a"
                                                        href="https://wa.me/19367884084"
                                                        target="_blank"
                                                        sx={{ color: '#25D366', fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                                    >
                                                        +1 936 788 4084
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </GlassCard>

                                        <GlassCard>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(59, 89, 152, 0.1)' }}>
                                                    <EmailIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography fontWeight={600}>Email</Typography>
                                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                                        For detailed inquiries
                                                    </Typography>
                                                    <Typography
                                                        component="a"
                                                        href="mailto:globalconsultingusa24@gmail.com"
                                                        sx={{ color: 'primary.main', fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                                    >
                                                        globalconsultingusa24@gmail.com
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </GlassCard>

                                        <GlassCard>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(59, 89, 152, 0.1)' }}>
                                                    <PhoneIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box>
                                                    <Typography fontWeight={600}>Phone</Typography>
                                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                                        Call us directly
                                                    </Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                        <Typography
                                                            component="a"
                                                            href="tel:+19367884084"
                                                            sx={{ color: 'primary.main', fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                                        >
                                                            +1 936 788 4084 (USA)
                                                        </Typography>
                                                        <Typography
                                                            component="a"
                                                            href="tel:+94777468806"
                                                            sx={{ color: 'primary.main', fontWeight: 500, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                                                        >
                                                            +94 777 468806 (Sri Lanka)
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </GlassCard>

                                        <GlassCard>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: 'rgba(59, 89, 152, 0.1)' }}>
                                                    <AccessTimeIcon sx={{ color: 'primary.main' }} />
                                                </Box>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography fontWeight={600} gutterBottom>Working Hours</Typography>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="body2" color="text.secondary">Monday - Friday</Typography>
                                                            <Typography variant="body2">9:00 AM - 6:00 PM</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="body2" color="text.secondary">Saturday</Typography>
                                                            <Typography variant="body2">10:00 AM - 4:00 PM</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                                            <Typography variant="body2" color="text.secondary">Sunday</Typography>
                                                            <Typography variant="body2">By Appointment</Typography>
                                                        </Box>
                                                    </Box>
                                                    <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                                                        * Times shown in Sri Lanka Standard Time (IST)
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </GlassCard>
                                    </Box>
                                </Box>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
