'use client';

import { motion } from 'framer-motion';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const testimonials = [
    {
        name: 'Ayeshma Fayaz',
        visaType: 'F-1 Student Visa',
        quote: 'I am writing this to give my highest recommendation for Global Consulting Visa Hub. I had the privilege of consulting Ms. Shamlee for my student visa process, and I successfully received my visa under her expert guidance! She not only helped me secure an $11,000 scholarship for my bachelor\'s program but also handled the entire process and documentation with great professionalism.',
        rating: 5,
    },
    {
        name: 'Chameera Keerthirathne',
        visaType: 'J-1 Exchange Visa',
        quote: 'I\'m excited to share that we received our visas! I consulted Ms. Shamlee at Global Consulting Visa Hub for my J-1 visa and our children\'s dependent visas. It was a stressful and complex process, but Ms. Shamlee managed everything perfectly — from documentation to interview preparation and guidance. Thanks to her expertise, all three visas were approved successfully.',
        rating: 5,
    },
    {
        name: 'Vindya Sakuni',
        visaType: 'F-1 & F-2 Visa',
        quote: 'It is my pleasure to strongly recommend Shamlee to get the correct guidance on F1 and F2 visa process. I have started to work with Shamlee within a very short period of time. However, I realized that she is an easy person to communicate with. She informs us of all the procedures A to Z in the visa process. She prepares us well with all the documents and nothing to worry about. I will highly recommend her. I will keep trust in her.',
        rating: 5,
    },
    {
        name: 'Tharinda Vimukthi',
        visaType: 'USA Immigration',
        quote: 'I highly recommend this page for everyone who is willing to migrate to Americas in the future. As a student, as an individual, as a tourist, as a family all these ways you can get all in details information and advices. The adviser Shamlee, is nice and friendly person you can ask any questions for any clarifications regarding immigration matters. She is the best person to get answers.',
        rating: 5,
    },
    {
        name: 'Lihinika Kristhorubaduge',
        visaType: 'F-2 Spouse Visa',
        quote: 'I consulted Ms Shamlee for Spouse visa for Student. I was in so many doubts, I didn\'t have much of an idea of spouse process but she explained me everything and how the documents need to be prepared for this Visa. She has good sound and knowledge about the USA Consultancy. I can recommend her to anyone for USA Visas and Consultations.',
        rating: 5,
    },
    {
        name: 'Aravinda Akurugoda',
        visaType: 'Canadian Visitor Visa',
        quote: 'I\'m a professional cricketer and I consulted Ms Shamlee for a Canadian Visitor Visa. Even though she doesn\'t do Canadian visas, she advised me regarding the documentation preparation and was willing enough to give me the consultation before starting the process. I highly recommend her 100%.',
        rating: 5,
    },
];

const stats = [
    { value: '50+', label: 'Successful Cases' },
    { value: '8+', label: 'Years Experience' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
];

export default function TestimonialsPage() {
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
                                Client <Box component="span" sx={{ color: 'primary.main' }}>Success Stories</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
                            >
                                Read what our clients have to say about their experience with Global Consulting & Visa Hub.
                                Real stories from real people who achieved their visa goals.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Stats Section */}
            <Box component="section" sx={{ py: { xs: 6, md: 8 } }}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        {stats.map((stat, index) => (
                            <Grid size={{ xs: 6, md: 3 }} key={index}>
                                <ScrollAnimation delay={index * 0.1}>
                                    <GlassCard>
                                        <Box textAlign="center">
                                            <Typography
                                                variant="h3"
                                                fontWeight="bold"
                                                sx={{
                                                    mb: 1,
                                                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                    WebkitBackgroundClip: 'text',
                                                    WebkitTextFillColor: 'transparent',
                                                }}
                                            >
                                                {stat.value}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {stat.label}
                                            </Typography>
                                        </Box>
                                    </GlassCard>
                                </ScrollAnimation>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Testimonials Grid */}
            <Box
                component="section"
                sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}
            >
                <Container maxWidth="lg">
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                What Our <Box component="span" sx={{ color: 'primary.main' }}>Clients Say</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                                Every success story motivates us to continue providing exceptional visa consulting services.
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Grid container spacing={3}>
                        {testimonials.map((testimonial, index) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                <TestimonialCard
                                    name={testimonial.name}
                                    visaType={testimonial.visaType}
                                    quote={testimonial.quote}
                                    rating={testimonial.rating}
                                    delay={index * 0.1}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTASection
                title="Ready to Write Your Success Story?"
                description="Join hundreds of satisfied clients who achieved their visa goals with our expert guidance."
                variant="gradient"
            />
        </>
    );
}
