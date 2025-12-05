'use client';

import { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

interface StepData {
    number: number;
    title: string;
    description: string;
    details: string[];
}

const steps: StepData[] = [
    {
        number: 1,
        title: 'Initial Inquiry & Eligibility Check',
        description: 'Start with a free consultation to assess your visa requirements and eligibility.',
        details: [
            'Share your travel or study goals with us',
            'We assess your eligibility for different visa categories',
            'Receive personalized recommendations for your situation',
            'Clear explanation of the process, timeline, and requirements',
        ],
    },
    {
        number: 2,
        title: 'Document Review & Preparation',
        description: 'We guide you through gathering and organizing all required documents.',
        details: [
            'Comprehensive checklist tailored to your visa type',
            'Review and verification of all submitted documents',
            'Guidance on financial documents and sponsor letters',
            'Assistance with DS-160 or other application forms',
        ],
    },
    {
        number: 3,
        title: 'Application Submission & Follow-up',
        description: 'Submit your application with confidence and track its progress.',
        details: [
            'Thorough review before final submission',
            'Embassy appointment scheduling assistance',
            'Application tracking and status updates',
            'Proactive communication on any additional requirements',
        ],
    },
    {
        number: 4,
        title: 'Interview Guidance & Final Steps',
        description: 'Prepare for your visa interview with expert coaching and support.',
        details: [
            'Mock interview sessions with real-world scenarios',
            'Tips for common questions and confident presentation',
            'Last-minute document verification',
            'Post-interview guidance and next steps',
        ],
    },
];

export default function ProcessStepper() {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        // Use Intersection Observer for smooth step detection
        const observers: IntersectionObserver[] = [];

        stepRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                            setActiveStep(index);
                        }
                    });
                },
                {
                    threshold: 0.5,
                    rootMargin: '-20% 0px -20% 0px',
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, []);

    return (
        <Box
            component="section"
            sx={{
                py: { xs: 8, md: 12 },
                background: 'linear-gradient(180deg, rgba(59, 89, 152, 0.03) 0%, rgba(107, 141, 214, 0.06) 100%)',
            }}
        >
            <Container maxWidth="lg">
                {/* Header */}
                <Box textAlign="center" sx={{ mb: 8 }}>
                    <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                        How It <Box component="span" sx={{ color: 'primary.main' }}>Works</Box>
                    </Typography>
                    <Typography variant="h6" color="text.secondary" fontWeight={400}>
                        Our streamlined process ensures a smooth visa application journey
                    </Typography>
                </Box>

                {/* Process Content - Side by side layout */}
                <Box
                    sx={{
                        display: 'flex',
                        gap: { xs: 3, md: 6 },
                        position: 'relative',
                    }}
                >
                    {/* Left Side: Sticky Progress Bar */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            width: 100,
                            flexShrink: 0,
                            position: 'relative',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'sticky',
                                top: 120,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            {/* Track */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 28,
                                    bottom: 28,
                                    width: 4,
                                    bgcolor: 'rgba(0,0,0,0.06)',
                                    borderRadius: 2,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            />

                            {/* Progress Fill */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 28,
                                    width: 4,
                                    height: `${(activeStep / (steps.length - 1)) * 100}%`,
                                    maxHeight: 'calc(100% - 56px)',
                                    background: 'linear-gradient(180deg, #3B5998 0%, #6B8DD6 100%)',
                                    borderRadius: 2,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: 1,
                                    transition: 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            />

                            {/* Step Circles */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 8,
                                    zIndex: 2,
                                }}
                            >
                                {steps.map((step, i) => (
                                    <Box
                                        key={i}
                                        sx={{
                                            width: 56,
                                            height: 56,
                                            borderRadius: '50%',
                                            bgcolor: activeStep >= i ? 'primary.main' : 'white',
                                            border: '3px solid',
                                            borderColor: activeStep >= i ? 'primary.main' : 'rgba(0,0,0,0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontWeight: 'bold',
                                            fontSize: '1.25rem',
                                            color: activeStep >= i ? 'white' : 'text.secondary',
                                            boxShadow: activeStep >= i
                                                ? '0 4px 20px rgba(59, 89, 152, 0.4)'
                                                : '0 4px 12px rgba(0,0,0,0.08)',
                                            transform: activeStep === i ? 'scale(1.15)' : 'scale(1)',
                                            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        }}
                                    >
                                        {step.number}
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Side: Step Cards */}
                    <Box sx={{ flex: 1 }}>
                        {steps.map((step, i) => (
                            <Box
                                key={i}
                                ref={(el: HTMLDivElement | null) => { stepRefs.current[i] = el; }}
                                sx={{
                                    mb: i < steps.length - 1 ? 6 : 0,
                                    opacity: activeStep === i ? 1 : 0.5,
                                    transform: activeStep === i ? 'scale(1)' : 'scale(0.98)',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 4, md: 6 },
                                        background: 'rgba(255, 255, 255, 0.85)',
                                        backdropFilter: 'blur(20px)',
                                        borderRadius: 4,
                                        border: activeStep === i
                                            ? '2px solid rgba(59, 89, 152, 0.2)'
                                            : '1px solid rgba(255, 255, 255, 0.6)',
                                        boxShadow: activeStep === i
                                            ? '0 16px 64px rgba(59, 89, 152, 0.15)'
                                            : '0 8px 32px rgba(59, 89, 152, 0.05)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    }}
                                >
                                    {/* Mobile Step Number */}
                                    <Box
                                        sx={{
                                            display: { xs: 'flex', md: 'none' },
                                            alignItems: 'center',
                                            gap: 2,
                                            mb: 3,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                bgcolor: 'primary.main',
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                            }}
                                        >
                                            {step.number}
                                        </Box>
                                        <Typography variant="overline" sx={{ color: 'primary.main', fontWeight: 700 }}>
                                            Step {step.number} of {steps.length}
                                        </Typography>
                                    </Box>

                                    {/* Desktop Step Label */}
                                    <Typography
                                        variant="overline"
                                        sx={{
                                            display: { xs: 'none', md: 'block' },
                                            color: 'primary.main',
                                            fontWeight: 700,
                                            letterSpacing: 2,
                                            fontSize: '0.75rem',
                                        }}
                                    >
                                        Step {step.number}
                                    </Typography>

                                    <Typography variant="h4" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.7, fontSize: '1.1rem', mb: 4 }}
                                    >
                                        {step.description}
                                    </Typography>

                                    <Box
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                            gap: 2.5,
                                        }}
                                    >
                                        {step.details.map((detail, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 1.5,
                                                }}
                                            >
                                                <CheckCircleOutlineIcon
                                                    sx={{ color: 'success.main', mt: 0.25, fontSize: '1.25rem' }}
                                                />
                                                <Typography variant="body2" fontWeight={500} sx={{ lineHeight: 1.5 }}>
                                                    {detail}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </Paper>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
