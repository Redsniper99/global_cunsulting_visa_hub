'use client';

import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import GlassCard from '@/components/GlassCard';
import CTASection from '@/components/CTASection';

// MUI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import FamilyRestroomOutlinedIcon from '@mui/icons-material/FamilyRestroomOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TravelExploreOutlinedIcon from '@mui/icons-material/TravelExploreOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// USA Visa Categories
const usaVisas = [
    {
        title: 'Student Visa (F-1)',
        description: 'For international students pursuing academic studies at U.S. educational institutions including universities, colleges, high schools, and language training programs.',
        forWhom: 'Students enrolled in academic programs',
        requirements: [
            'Acceptance letter (I-20) from SEVP-certified school',
            'Proof of financial support',
            'Evidence of ties to home country',
            'Valid passport',
            'Academic transcripts',
        ],
        icon: <SchoolOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Exchange Visitor (J-1)',
        description: 'For participants in approved exchange visitor programs including students, scholars, researchers, trainees, teachers, and au pairs.',
        forWhom: 'Cultural exchange program participants',
        requirements: [
            'Program sponsor acceptance (DS-2019)',
            'Proof of English proficiency',
            'Evidence of financial support',
            'Intent to return home',
            'Program-specific qualifications',
        ],
        icon: <PublicOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Tourist/Visitor (B-2)',
        description: 'For individuals traveling to the U.S. for tourism, vacation, visiting friends or relatives, medical treatment, or participation in social events.',
        forWhom: 'Tourists, family visitors, medical travelers',
        requirements: [
            'Valid passport',
            'Proof of ties to home country',
            'Financial documents',
            'Travel itinerary',
            'Purpose of visit documentation',
        ],
        icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Business Visitor (B-1)',
        description: 'For individuals traveling to the U.S. for business purposes such as attending conferences, negotiating contracts, or consulting with business associates.',
        forWhom: 'Business professionals, conference attendees',
        requirements: [
            'Invitation letter from U.S. business',
            'Proof of business activities',
            'Financial stability evidence',
            'Return ticket or travel plan',
            'Company employment letter',
        ],
        icon: <BusinessOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Dependent Visa (F-2)',
        description: 'For spouses and unmarried children (under 21) of F-1 student visa holders. Allows family members to accompany or join the primary visa holder.',
        forWhom: 'Spouses and children of F-1 students',
        requirements: [
            "Primary visa holder's valid F-1 status",
            'Proof of relationship (marriage/birth certificate)',
            'Financial support evidence',
            'Valid passport',
            'I-20 for dependents',
        ],
        icon: <FamilyRestroomOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Fiancé(e) Visa (K-1)',
        description: 'For foreign nationals engaged to U.S. citizens. Allows entry to the U.S. for the purpose of getting married within 90 days.',
        forWhom: 'Fiancé(e)s of U.S. citizens',
        requirements: [
            'U.S. citizen petitioner',
            'Intent to marry within 90 days',
            'Evidence of genuine relationship',
            'Meeting in person within 2 years',
            'Medical examination',
        ],
        icon: <FavoriteOutlinedIcon sx={{ fontSize: 28 }} />,
    },
];

// Schengen Visa Categories
const schengenVisas = [
    {
        title: 'Schengen Tourist Visa',
        description: 'Visit any of the 26 Schengen countries for tourism and leisure. Stay up to 90 days within a 180-day period.',
        forWhom: 'Tourists, leisure travelers',
        requirements: [
            'Valid passport (6+ months validity)',
            'Travel insurance (€30,000 coverage)',
            'Hotel reservations',
            'Flight itinerary',
            'Financial proof (bank statements)',
        ],
        icon: <TravelExploreOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Schengen Business Visa',
        description: 'Attend business meetings, conferences, or establish business connections in Schengen countries.',
        forWhom: 'Business professionals, entrepreneurs',
        requirements: [
            'Invitation from European company',
            'Proof of business activities',
            'Company registration documents',
            'Travel insurance',
            'Financial documents',
        ],
        icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Schengen Student Visa',
        description: 'Study at educational institutions in Schengen countries for academic programs, language courses, or research lasting more than 90 days.',
        forWhom: 'Students and researchers',
        requirements: [
            'Acceptance letter from institution',
            'Proof of accommodation',
            'Financial means for stay',
            'Health insurance',
            'Academic qualifications',
        ],
        icon: <SchoolOutlinedIcon sx={{ fontSize: 28 }} />,
    },
    {
        title: 'Schengen Family Visit',
        description: 'Visit family members or friends residing in Schengen countries. Proof of relationship and invitation from the host required.',
        forWhom: 'Family members visiting relatives',
        requirements: [
            'Invitation from host in Schengen area',
            'Proof of relationship',
            "Host's residence documents",
            'Travel insurance',
            'Return ticket',
        ],
        icon: <HomeOutlinedIcon sx={{ fontSize: 28 }} />,
    },
];

export default function ServicesPage() {
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
                                Our <Box component="span" sx={{ color: 'primary.main' }}>Visa Services</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
                            >
                                Comprehensive visa consulting for the United States and Schengen countries.
                                We provide expert guidance, documentation support, and interview preparation
                                for all non-immigrant visa categories.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* USA Visas Section */}
            <Box component="section" id="usa-visas" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="lg">
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Chip
                                label="🇺🇸 United States"
                                sx={{
                                    mb: 3,
                                    px: 2,
                                    py: 2.5,
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    bgcolor: 'rgba(59, 89, 152, 0.1)',
                                    color: 'primary.main',
                                }}
                            />
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                USA Visa Categories
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                                Expert guidance for student, visitor, business, and family-based visas to the United States.
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Grid container spacing={3}>
                        {usaVisas.map((visa, index) => (
                            <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                                <GlassCard delay={index * 0.08}>
                                    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 3,
                                                background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                mb: 3,
                                            }}
                                        >
                                            {visa.icon}
                                        </Box>
                                        <Typography variant="h6" fontWeight={600} gutterBottom>
                                            {visa.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                            {visa.description}
                                        </Typography>
                                        <Typography variant="caption" color="primary" fontWeight={600} sx={{ mb: 2, display: 'block' }}>
                                            For: {visa.forWhom}
                                        </Typography>
                                        <Box sx={{ mt: 'auto' }}>
                                            <Typography variant="caption" fontWeight={600} sx={{ mb: 1, display: 'block' }}>
                                                Key Requirements:
                                            </Typography>
                                            {visa.requirements.slice(0, 3).map((req, i) => (
                                                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 0.5 }}>
                                                    <CheckCircleOutlineIcon sx={{ fontSize: 14, color: 'success.main', mt: 0.3 }} />
                                                    <Typography variant="caption" color="text.secondary">
                                                        {req}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>
                                </GlassCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Schengen Visas Section */}
            <Box
                component="section"
                id="schengen-visas"
                sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}
            >
                <Container maxWidth="lg">
                    <ScrollAnimation>
                        <Box textAlign="center" mb={8}>
                            <Chip
                                label="🇪🇺 Europe"
                                sx={{
                                    mb: 3,
                                    px: 2,
                                    py: 2.5,
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    bgcolor: 'rgba(59, 89, 152, 0.1)',
                                    color: 'primary.main',
                                }}
                            />
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                                Schengen Visa Categories
                            </Typography>
                            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                                One visa for 26 European countries. Travel, study, or conduct business across the Schengen Area.
                            </Typography>
                        </Box>
                    </ScrollAnimation>

                    <Grid container spacing={3}>
                        {schengenVisas.map((visa, index) => (
                            <Grid size={{ xs: 12, md: 6 }} key={index}>
                                <GlassCard delay={index * 0.1}>
                                    <Box sx={{ display: 'flex', gap: 3 }}>
                                        <Box
                                            sx={{
                                                width: 56,
                                                height: 56,
                                                borderRadius: 3,
                                                background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: 'white',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {visa.icon}
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                                {visa.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                                                {visa.description}
                                            </Typography>
                                            <Typography variant="caption" color="primary" fontWeight={600} sx={{ mb: 2, display: 'block' }}>
                                                For: {visa.forWhom}
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {visa.requirements.slice(0, 3).map((req, i) => (
                                                    <Chip
                                                        key={i}
                                                        label={req}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'rgba(59, 89, 152, 0.08)',
                                                            color: 'primary.main',
                                                            fontSize: '0.7rem',
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </GlassCard>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTASection
                title="Need Help with Your Visa Application?"
                description="Book a free consultation with our expert team. We'll assess your situation and guide you to the right visa category."
                variant="gradient"
            />
        </>
    );
}
