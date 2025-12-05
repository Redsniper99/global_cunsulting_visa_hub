'use client';

import { motion } from 'framer-motion';
import ProcessStepper from '@/components/ProcessStepper';
import CTASection from '@/components/CTASection';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const additionalInfo = [
    {
        title: 'What to Expect',
        items: [
            'Clear communication at every stage',
            'Regular updates on your application status',
            'Prompt responses to your questions',
            'Professional document handling',
        ],
    },
    {
        title: 'Our Commitment',
        items: [
            'No hidden fees or surprise charges',
            'Honest assessment of your case',
            'Personalized attention to your needs',
            'Continued support until visa decision',
        ],
    },
];

const timeline = [
    { time: 'Week 1', title: 'Initial Consultation', desc: 'Free assessment of your visa eligibility and requirements' },
    { time: 'Week 1-2', title: 'Document Collection', desc: 'Gather and organize all required documentation' },
    { time: 'Week 2-3', title: 'Application Preparation', desc: 'Form completion, document review, and submission' },
    { time: 'Week 3-4', title: 'Interview Preparation', desc: 'Mock interviews and coaching for visa interview' },
    { time: 'Interview Day', title: 'Visa Interview', desc: 'Final preparation and confidence building' },
];

export default function ProcessPage() {
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
                                Our <Box component="span" sx={{ color: 'primary.main' }}>Process</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
                            >
                                A streamlined, transparent approach to visa consulting.
                                We guide you through every step from initial inquiry to successful visa approval.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Process Stepper */}
            <ProcessStepper />

            {/* Additional Info */}
            <Box
                component="section"
                sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4}>
                        {additionalInfo.map((info, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <ScrollAnimation direction={index === 0 ? 'left' : 'right'}>
                                    <GlassCard hover={false}>
                                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
                                            {info.title}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                            {info.items.map((item, i) => (
                                                <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                                    <CheckCircleOutlineIcon color="success" fontSize="small" />
                                                    <Typography variant="body1">{item}</Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </GlassCard>
                                </ScrollAnimation>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Timeline */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="md">
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                Typical <Box component="span" sx={{ color: 'primary.main' }}>Timeline</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                                While every case is unique, here&apos;s a general overview of the expected timeline for visa processing.
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Box sx={{ position: 'relative' }}>
                        {/* Timeline Line */}
                        <Box
                            sx={{
                                position: 'absolute',
                                left: { xs: 16, md: '50%' },
                                top: 0,
                                bottom: 0,
                                width: 2,
                                bgcolor: 'rgba(59, 89, 152, 0.2)',
                                transform: { md: 'translateX(-50%)' },
                            }}
                        />

                        {/* Timeline Items */}
                        {timeline.map((item, index) => (
                            <ScrollAnimation key={index} delay={index * 0.1}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 4,
                                        mb: 4,
                                        flexDirection: { xs: 'row', md: index % 2 === 1 ? 'row-reverse' : 'row' },
                                    }}
                                >
                                    <Box sx={{ flex: 1, textAlign: { xs: 'left', md: index % 2 === 1 ? 'right' : 'left' } }}>
                                        <GlassCard>
                                            <Chip
                                                icon={<AccessTimeIcon />}
                                                label={item.time}
                                                size="small"
                                                color="primary"
                                                sx={{ mb: 1.5 }}
                                            />
                                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {item.desc}
                                            </Typography>
                                        </GlassCard>
                                    </Box>
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            left: { xs: 16, md: '50%' },
                                            transform: 'translate(-50%, 0)',
                                            width: 16,
                                            height: 16,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                            border: '4px solid white',
                                            boxShadow: 1,
                                        }}
                                    />
                                    <Box sx={{ flex: 1, display: { xs: 'none', md: 'block' } }} />
                                </Box>
                            </ScrollAnimation>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTASection variant="gradient" />
        </>
    );
}
