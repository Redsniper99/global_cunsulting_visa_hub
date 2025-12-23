'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/CTASection';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Head from 'next/head';

// Icons
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const values = [
    {
        title: 'Integrity',
        description: 'We believe in honest, transparent communication. No false promises, just realistic guidance based on your situation.',
        icon: <GppGoodOutlinedIcon fontSize="large" />,
    },
    {
        title: 'Expertise',
        description: 'With deep knowledge of US immigration laws and Schengen regulations, we provide informed, up-to-date guidance.',
        icon: <SchoolOutlinedIcon fontSize="large" />,
    },
    {
        title: 'Personalized Care',
        description: 'Every client is unique. We take time to understand your goals and craft a strategy tailored to your needs.',
        icon: <HandshakeOutlinedIcon fontSize="large" />,
    },
    {
        title: 'Accessibility',
        description: 'We are always available—via phone, email, or WhatsApp—to answer your questions and address your concerns.',
        icon: <SupportAgentOutlinedIcon fontSize="large" />,
    },
];

const expertise = [
    'F-1 Student Visa Applications',
    'J-1 Exchange Visitor Programs',
    'B-1/B-2 Business & Tourist Visas',
    'Dependent Visa Processing (F-2, J-2)',
    'K-1 Fiancé(e) Visa Guidance',
    'Schengen Visa Applications',
    'Rejected Visa Case Handling',
    'Interview Preparation & Coaching',
];

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <Box sx={{ pt: 20, pb: 10, background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.05) 0%, rgba(107, 141, 214, 0.08) 100%)' }}>
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center' }}
                    >
                        <Typography variant="h2" fontWeight="bold" sx={{ mb: 3 }}>
                            About <Box component="span" sx={{ color: 'primary.main' }}>Our Company</Box>
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400, maxWidth: '800px', mx: 'auto' }}>
                            Global Consulting & Visa Hub is your premier gateway to international education
                            and travel, founded on the principles of integrity, expertise, and personalized client care.
                        </Typography>
                    </motion.div>
                </Container>
            </Box>

            {/* Founder Section - Moved to top */}
            <Box component="section" sx={{ py: 12, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}>
                <Container>
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                Meet Our <Box component="span" sx={{ color: 'primary.main' }}>Founder</Box>
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Container maxWidth="md">
                        <GlassCard hover={false}>
                            <Box sx={{ p: { xs: 2, md: 4 } }}>
                                <Grid container spacing={6} alignItems="flex-start">
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Image
                                                src="/AboutPic2.png.webp"
                                                alt="Shamlee Marambe Bandara"
                                                width={200}
                                                height={200}
                                                style={{ borderRadius: 16, objectFit: 'cover' }}
                                            />
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: -10,
                                                    right: -10,
                                                    width: 50,
                                                    height: 50,
                                                    borderRadius: '50%',
                                                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '1.5rem',
                                                    boxShadow: 3
                                                }}
                                            >
                                                🎓
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                                                Shamlee Marambe Bandara
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
                                                Academic Lawyer | USA Licensed Consultant | US Immigration Paralegal
                                            </Typography>

                                            <Box sx={{ color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Ms. Bandara is a Professional Licensed Consultant with over 8 years of experience
                                                    in the USA consulting industry. She completed her undergraduate studies in Texas,
                                                    USA, where she developed strong competency in law with solid academic knowledge.
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Currently working as a US Immigration Paralegal for a well-known USA Immigration
                                                    Law firm, she has directed and assisted many candidates and clients to the USA
                                                    on various visas, particularly student visas (F-1).
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Her specialty lies in handling previously rejected visa cases with remarkable
                                                    success. Her expertise includes immigration law (USA), student consultation,
                                                    and acquiring student visas (F-1), exchange visitor visas (J-1), and business
                                                    and visitor visas (B-1/B-2).
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 4, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                                <Box component="a" href="mailto:globalconsultingusa24@gmail.com" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                                    <EmailIcon fontSize="small" />
                                                    <Typography variant="body2">globalconsultingusa24@gmail.com</Typography>
                                                </Box>
                                                <Box component="a" href="tel:+19367884084" sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                                    <PhoneIcon fontSize="small" />
                                                    <Typography variant="body2">+1 936 788 4084</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </GlassCard>
                    </Container>
                </Container>
            </Box>

            {/* Company Story Section */}
            <Box component="section" sx={{ py: 12 }}>
                <Container>
                    <Grid container spacing={8} alignItems="center">
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <ScrollAnimation direction="left">
                                <Box>
                                    <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
                                        Our Story & <Box component="span" sx={{ color: 'primary.main' }}>Mission</Box>
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.7 }}>
                                        <Typography variant="body1">
                                            Global Consulting & Visa Hub was established with a clear mission: to make the
                                            complex visa application process accessible, understandable, and achievable for
                                            students, families, and professionals worldwide.
                                        </Typography>
                                        <Typography variant="body1">
                                            Our consultancy provides a pathway to higher education primarily in the United
                                            States of America, as well as opportunities to explore and settle in your dream
                                            country. We maintain continuity in our support regardless of circumstances,
                                            empowering our applicants to be competitive on the international stage.
                                        </Typography>
                                        <Typography variant="body1">
                                            What sets us apart is our licensed expertise in US consulting, making the process
                                            considerably easier for our clients. We assist candidates in selecting exceptional
                                            universities and the best bachelor&apos;s, master&apos;s, and doctoral programs suited to their
                                            aspirations.
                                        </Typography>
                                        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                                            Our vision: To become true agents of the US higher education sector and trusted
                                            partners in our clients&apos; journey toward their goals.
                                        </Typography>
                                    </Box>
                                </Box>
                            </ScrollAnimation>
                        </Grid>
                        <Grid size={{ xs: 12, lg: 6 }}>
                            <ScrollAnimation direction="right">
                                <GlassCard hover={false}>
                                    <Box sx={{ p: 2 }}>
                                        <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>What We Help With</Typography>
                                        <Grid container spacing={2}>
                                            {expertise.map((item, index) => (
                                                <Grid size={{ xs: 12, sm: 6 }} key={index}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                        <CheckCircleOutlineIcon color="success" fontSize="small" />
                                                        <Typography variant="body2" color="text.primary">
                                                            {item}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>
                                </GlassCard>
                            </ScrollAnimation>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Values Section */}
            <Box component="section" sx={{ py: 12 }}>
                <Container>
                    <ScrollAnimation>
                        <Box textAlign="center" mb={10}>
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                Our <Box component="span" sx={{ color: 'primary.main' }}>Core Values</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                                The principles that guide everything we do for our clients.
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Grid container spacing={4}>
                        {values.map((value, index) => (
                            <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                                <GlassCard delay={index * 0.1}>
                                    <Box textAlign="center" sx={{ p: 1, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <Box
                                            sx={{
                                                width: 64,
                                                height: 64,
                                                borderRadius: 4,
                                                background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.1) 0%, rgba(107, 141, 214, 0.1) 100%)',
                                                color: 'primary.main',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                mx: 'auto',
                                                mb: 3
                                            }}
                                        >
                                            {value.icon}
                                        </Box>
                                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flex: 1 }}>
                                            {value.description}
                                        </Typography>
                                    </Box>
                                </GlassCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTASection variant="gradient" />
        </>
    );
}
