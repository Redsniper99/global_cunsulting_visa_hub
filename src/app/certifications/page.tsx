'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/CTASection';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';

const achievements = [
    {
        title: 'Proud Moment for Global Consulting & Visa Hub!',
        badge: 'Immigration Adviser Course Completed',
        image: '/images/certifications/certificate_01.jpg',
        imageAlt: 'Immigration Adviser Course Certificate',
        intro: 'We are excited to share that we have successfully completed the Immigration Adviser Course, further strengthening our expertise in U.S. immigration and visa services.',
        services: [
            'U.S. Tourist & Student Visas',
            'Immigration Support',
            'U.S. Paralegal Services',
            'Visa Consultation & Documentation',
        ],
        closing: 'This achievement reflects our continuous dedication to excellence and professional development, so we can serve you better with confidence and credibility.',
        thanks: 'Thank you to all our clients and supporters for trusting us with your immigration journey.',
        cta: 'Get in touch today for expert guidance on your U.S. visa and immigration needs.',
        hashtags: [
            '#ImmigrationAdvisor',
            '#USVisa',
            '#VisaConsultant',
            '#ProfessionalDevelopment',
            '#GlobalConsultingVisaHub',
            '#ImmigrationServices',
            '#StudyInUSA',
            '#Travel',
        ],
    },
];

export default function CertificationsPage() {
    return (
        <>
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
                            <Typography variant="h2" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '2rem', md: '3rem' } }}>
                                Our <Box component="span" sx={{ color: 'primary.main' }}>Certifications</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, lineHeight: 1.7 }}>
                                Milestones that reflect our commitment to trusted, up-to-date immigration support.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    {achievements.map((achievement, index) => (
                        <ScrollAnimation key={achievement.title}>
                            <GlassCard delay={index * 0.08} hover={false}>
                                <Box sx={{ p: { xs: 2.5, md: 4 } }}>
                                    <Chip
                                        label={`Achievement ${index + 1}`}
                                        sx={{
                                            mb: 2,
                                            bgcolor: 'rgba(59, 89, 152, 0.12)',
                                            color: 'primary.main',
                                            fontWeight: 600,
                                        }}
                                    />
                                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 1.5 }}>
                                        🎓 {achievement.title} 🇺🇸✨
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary" sx={{ mb: 3, fontWeight: 600 }}>
                                        {achievement.badge}
                                    </Typography>

                                    <Box
                                        sx={{
                                            position: 'relative',
                                            width: '100%',
                                            minHeight: { xs: 260, md: 420 },
                                            borderRadius: 3,
                                            overflow: 'hidden',
                                            mb: 4,
                                            border: '1px solid rgba(59, 89, 152, 0.18)',
                                        }}
                                    >
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.imageAlt}
                                            fill
                                            sizes="(max-width: 900px) 100vw, 900px"
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </Box>

                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
                                        {achievement.intro}
                                    </Typography>

                                    <Box component="ul" sx={{ mt: 0, mb: 2.5, pl: 3 }}>
                                        {achievement.services.map((service) => (
                                            <Box component="li" key={service} sx={{ mb: 1 }}>
                                                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                                    {service}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
                                        {achievement.closing}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5, lineHeight: 1.8 }}>
                                        {achievement.thanks} 🌍✈️
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                                        📩 {achievement.cta}
                                    </Typography>

                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                        {achievement.hashtags.map((tag) => (
                                            <Chip
                                                key={tag}
                                                label={tag}
                                                size="small"
                                                sx={{
                                                    bgcolor: 'rgba(59, 89, 152, 0.08)',
                                                    color: 'primary.main',
                                                }}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            </GlassCard>
                        </ScrollAnimation>
                    ))}
                </Container>
            </Box>

            <CTASection
                title="Need Expert U.S. Visa Guidance?"
                description="Talk to our team for professional support with visa consultation, documentation, and immigration preparation."
                variant="gradient"
            />
        </>
    );
}
