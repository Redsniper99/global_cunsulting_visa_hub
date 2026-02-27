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

            {/* Leadership Section */}
            <Box component="section" sx={{ py: 12, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}>
                <Container>
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                Meet Our <Box component="span" sx={{ color: 'primary.main' }}>Leadership</Box>
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 400 }}>
                                The people behind Global Consulting &amp; Visa Hub
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>

                        {/* Derick Marambe - Founder */}
                        <GlassCard hover={false}>
                            <Box sx={{ p: { xs: 2, md: 4 } }}>
                                <Grid container spacing={6} alignItems="flex-start">
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Image
                                                src="/Derick Marambe n.jpg"
                                                alt="Derick Marambe"
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
                                                🌟
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                                                Derick Marambe
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
                                                Founder &amp; Guiding Mentor
                                            </Typography>
                                            <Box sx={{ color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Derick Marambe served as a Senior Accountant at the Education Department in Kandy, dedicating his professional life to public service with integrity, discipline, and excellence. In the 1950s, he successfully passed the Sri Lankan Public Service competitive examination — at the time among the highest and most prestigious pathways to enter government service.
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    He further distinguished himself by passing the Ceylon Civil Service (CCS) examination — the elite administrative service of the country during that era. Only a very small number of candidates were selected each year, and the examination rigorously tested English proficiency, law, public administration, economics, and governance. Through this accomplishment, he qualified to serve at the highest levels of district administration.
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    In the 1960s, he was also among the very few individuals in Sri Lanka to successfully pass the competitive piloting examination. Although offered a career in aviation, he chose stability and public service. As the guiding mentor of this organization, his legacy of ethical leadership, resilience, and humility forms the foundation of our commitment to integrity and people-first service.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </GlassCard>

                        {/* Indu Marambe - Advisor */}
                        <GlassCard hover={false}>
                            <Box sx={{ p: { xs: 2, md: 4 } }}>
                                <Grid container spacing={6} alignItems="flex-start">
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Box sx={{ position: 'relative' }}>
                                            <Image
                                                src="/Indu Marambe.jpg"
                                                alt="Indu Marambe"
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
                                                🌐
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Box textAlign={{ xs: 'center', md: 'left' }}>
                                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
                                                Indu Marambe
                                            </Typography>
                                            <Typography variant="subtitle1" color="primary" fontWeight="bold" sx={{ mb: 3 }}>
                                                Advisor
                                            </Typography>
                                            <Box sx={{ color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Indu Marambe has built a distinguished career in public service, having served in the Foreign Ministry, including within the Human Rights Division. Throughout her tenure, she worked across multiple ministries, contributing expertise to public administration, governance, and policy implementation. She also served as Media Coordinator to a Cabinet Minister, managing press relations and strategic media engagement.
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    An experienced journalist, she combines analytical depth with a strong commitment to truth and accountability. Following the footsteps of her father, she inherited a strong intellectual foundation and dedication to service.
                                                </Typography>
                                                <Typography variant="body2" lineHeight={1.8}>
                                                    Currently based in Italy, she continues her professional journey in immigration as a Sinhala–Italian translator, supporting individuals navigating cross-border legal and administrative processes. Her extensive experience across government service, human rights, and immigration brings valuable international perspective and credibility to the organization.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </GlassCard>

                    </Box>
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
