'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Success Stories Data
const successStories = [
    {
        id: 1,
        name: 'Ayeshma Fayaz',
        visaType: 'F-1' as const,
        appliedDate: 'Sep 2024',
        grantedDate: 'Oct 2024',
        university: 'Texas State University',
        course: 'Bachelor of Science',
        purpose: 'Academic Studies',
        country: 'Sri Lanka',
        story: 'My dream of studying in America came true! With expert guidance, I secured an $11,000 scholarship and my F-1 visa was approved on the first attempt. The entire process was handled professionally, from university selection to interview preparation. I am now pursuing my degree in Texas and couldn\'t be happier with the support I received.',
        fullStory: 'When I first decided to pursue higher education in the United States, I was overwhelmed by the complex visa process. I had heard many stories of visa rejections and was quite nervous. That\'s when I discovered Global Consulting & Visa Hub. From our very first consultation, I knew I was in good hands. The team helped me identify universities that matched my academic profile and career goals. They guided me through the entire application process, and I was thrilled to receive an acceptance letter from Texas State University along with an $11,000 scholarship! The interview preparation was thorough and comprehensive. We practiced multiple scenarios, and I felt confident walking into the embassy. When the officer stamped my passport with the F-1 visa, I couldn\'t contain my joy. Today, I\'m living my American dream, and I owe it all to the excellent guidance I received.',
        visaImage: '/images/granted visa/fayaz.png',
    },
    {
        id: 2,
        name: 'Chameera Keerthirathne',
        visaType: 'J-1' as const,
        appliedDate: 'Aug 2024',
        grantedDate: 'Sep 2024',
        university: 'Research Program',
        course: 'Cultural Exchange',
        purpose: 'Exchange Program',
        country: 'Sri Lanka',
        story: 'Got my J-1 visa along with dependent visas for my children. The entire process was handled professionally despite being complex. Ms. Shamlee managed everything from documentation to interview preparation with great expertise.',
        fullStory: 'As a professional seeking an exchange opportunity in the United States, I faced the challenge of not only obtaining my own J-1 visa but also securing dependent visas for my family. This made the process significantly more complex. Global Consulting & Visa Hub took on this challenge with remarkable professionalism. Ms. Shamlee personally handled our case, ensuring that all documentation was perfectly prepared for each family member. The attention to detail was impressive – from organizing our financial documents to preparing customized interview responses for different scenarios. When the day of our interview arrived, we were well-prepared and confident. The joy of receiving approval for all our visas simultaneously was indescribable. Our family is now enjoying this incredible cultural exchange experience in America, and we are grateful for the expert guidance that made it possible.',
        visaImage: '/visa_j1.png',
    },
    {
        id: 3,
        name: 'Vindya Sakuni',
        visaType: 'F-1' as const,
        appliedDate: 'Jul 2024',
        grantedDate: 'Aug 2024',
        university: 'University of Houston',
        course: 'Master of Business',
        purpose: 'Graduate Studies',
        country: 'Sri Lanka',
        story: 'From document preparation to interview coaching, every step was handled perfectly. Now I am pursuing my MBA in Houston! The personalized support and clear communication throughout the process made all the difference.',
        fullStory: 'Pursuing an MBA in America had been my dream for years, but the visa application process seemed daunting. When I connected with Global Consulting & Visa Hub, everything changed. From the very beginning, the communication was clear and transparent. Every step of the process was explained thoroughly, and I never felt lost or confused. The document preparation was meticulous – they helped me organize my academic records, financial documents, and created a compelling statement of purpose. The interview coaching sessions were particularly valuable. We went through extensive mock interviews, and I received detailed feedback on how to present my case effectively. On my interview day, I walked in with confidence. The officer asked several questions, and I answered each one just as we had practiced. When I received my visa, I couldn\'t have been more grateful. I\'m now in my first semester at University of Houston, working towards my MBA, and I recommend Global Consulting & Visa Hub to anyone serious about their American education dream.',
        visaImage: '/visa_f1.png',
    },
    {
        id: 4,
        name: 'Tharinda Vimukthi',
        visaType: 'B1/B2' as const,
        appliedDate: 'Jun 2024',
        grantedDate: 'Jul 2024',
        university: '',
        course: '',
        purpose: 'Family Visit',
        country: 'Sri Lanka',
        story: 'I needed to visit my family in the US urgently. Despite the short timeline, the team prepared my application perfectly and I received my tourist visa without any complications.',
        fullStory: 'When I needed to visit my family in America on short notice, I was worried about the tight timeline for visa processing. A friend recommended Global Consulting & Visa Hub, and it turned out to be the best decision. Despite the urgency, the team worked efficiently to gather and organize all necessary documents. They helped me build a strong case demonstrating my ties to Sri Lanka and my genuine purpose for visiting. The interview preparation was quick but comprehensive. They anticipated the questions I might face and helped me prepare clear, honest answers. The visa officer approved my application, and I was able to travel to see my family as planned. The professionalism and efficiency of the team during such a time-sensitive situation was truly remarkable.',
        visaImage: '/visa_f1.png',
    },
    {
        id: 5,
        name: 'Priya Mendis',
        visaType: 'F-1' as const,
        appliedDate: 'May 2024',
        grantedDate: 'Jun 2024',
        university: 'Arizona State University',
        course: 'Computer Science',
        purpose: 'Academic Studies',
        country: 'Sri Lanka',
        story: 'After one previous rejection, I was hesitant to apply again. But with proper guidance and preparation, my second attempt was successful! Now studying Computer Science at ASU.',
        fullStory: 'My journey to America wasn\'t straightforward. My first visa application was rejected, and I was devastated. I had almost given up on my dream of studying in the US when I found Global Consulting & Visa Hub. The team immediately put me at ease. They carefully analyzed my previous application to understand what went wrong and developed a strategy for my reapplication. The preparation was thorough – we worked on strengthening my ties to Sri Lanka, improving my financial documentation, and most importantly, preparing me emotionally and mentally for the interview. The mock interview sessions were intense but incredibly helpful. On the day of my second interview, I felt like a different person – confident and well-prepared. When the officer said "Your visa is approved," I couldn\'t believe it. Today, I\'m thriving in my Computer Science program at Arizona State University. To anyone who has faced rejection – don\'t give up. With the right guidance, success is possible.',
        visaImage: '/visa_f1.png',
    },
    {
        id: 6,
        name: 'Kasun Fernando',
        visaType: 'J-1' as const,
        appliedDate: 'Apr 2024',
        grantedDate: 'May 2024',
        university: 'Medical Research Institute',
        course: 'Medical Research',
        purpose: 'Research Fellowship',
        country: 'Sri Lanka',
        story: 'Secured my J-1 visa for a prestigious medical research fellowship. The expertise in handling specialized visa categories was impressive and made all the difference.',
        fullStory: 'When I received an offer for a medical research fellowship in the United States, I was thrilled but also anxious about the visa process. J-1 visas for research positions have specific requirements, and I needed expert guidance. Global Consulting & Visa Hub demonstrated impressive expertise in handling specialized visa categories. They understood the nuances of research-based J-1 applications and helped me present my case effectively. The documentation process was detailed – from my research proposal to letters from my sponsoring institution, everything was organized perfectly. The interview preparation focused on articulating my research goals and demonstrating the value of this international collaboration. When my visa was approved, it validated my decision to trust the experts. I\'m now contributing to groundbreaking medical research in America, and this opportunity has been transformative for my career.',
        visaImage: '/visa_j1.png',
    },
];

const visaTypeConfig = {
    'F-1': {
        label: 'Student Visa',
        color: '#3B5998',
        bgColor: 'rgba(59, 89, 152, 0.1)',
        icon: <SchoolOutlinedIcon fontSize="small" />,
    },
    'J-1': {
        label: 'Exchange Visitor',
        color: '#6B8DD6',
        bgColor: 'rgba(107, 141, 214, 0.1)',
        icon: <PublicOutlinedIcon fontSize="small" />,
    },
    'B1/B2': {
        label: 'Tourist/Business',
        color: '#4CAF50',
        bgColor: 'rgba(76, 175, 80, 0.1)',
        icon: <FlightTakeoffOutlinedIcon fontSize="small" />,
    },
    'F-2': {
        label: 'Dependent Visa',
        color: '#FF9800',
        bgColor: 'rgba(255, 152, 0, 0.1)',
        icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
    'K-1': {
        label: 'Fiancé Visa',
        color: '#E91E63',
        bgColor: 'rgba(233, 30, 99, 0.1)',
        icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
};

export default function SuccessStoriesPage() {
    const [expandedStories, setExpandedStories] = useState<number[]>([]);

    const toggleExpanded = (storyId: number) => {
        setExpandedStories(prev =>
            prev.includes(storyId)
                ? prev.filter(id => id !== storyId)
                : [...prev, storyId]
        );
    };

    return (
        <>
            {/* Hero Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.08) 0%, rgba(107, 141, 214, 0.12) 100%)',
                    pt: { xs: 12, md: 16 },
                    pb: { xs: 6, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                fontWeight="bold"
                                sx={{
                                    mb: 2,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                }}
                            >
                                Visa <Box component="span" sx={{ color: 'primary.main' }}>Success Stories</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 'md',
                                    mx: 'auto',
                                    fontWeight: 400,
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                }}
                            >
                                Real clients, real visas, real success. Read detailed stories of how we helped these clients achieve their American dream through expert guidance and personalized support.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* Success Stories Grid */}
            <Box sx={{ py: { xs: 6, md: 10 } }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                        {successStories.map((story, index) => {
                            const config = visaTypeConfig[story.visaType];
                            const initials = story.name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

                            return (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card
                                        sx={{
                                            display: 'flex',
                                            flexDirection: { xs: 'column', md: 'row' },
                                            overflow: 'hidden',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 20px 50px rgba(59, 89, 152, 0.15)',
                                            },
                                        }}
                                    >
                                        {/* Image Section - Left Side */}
                                        <Box
                                            sx={{
                                                position: 'relative',
                                                width: { xs: '100%', md: 320 },
                                                minWidth: { md: 320 },
                                                maxWidth: { md: 320 },
                                                height: { xs: 200, md: 280 },
                                                flexShrink: 0,
                                            }}
                                        >
                                            <Image
                                                src={story.visaImage}
                                                alt={`${story.name}'s approved visa`}
                                                fill
                                                style={{ objectFit: 'cover' }}
                                            />
                                            {/* Gradient Overlay */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    inset: 0,
                                                    background: {
                                                        xs: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%)',
                                                        md: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 100%)'
                                                    },
                                                }}
                                            />
                                            {/* Approved Badge */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: 16,
                                                    left: 16,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    bgcolor: 'rgba(76, 175, 80, 0.95)',
                                                    color: 'white',
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    fontSize: '0.75rem',
                                                    fontWeight: 700,
                                                }}
                                            >
                                                <CheckCircleIcon sx={{ fontSize: 16 }} />
                                                APPROVED
                                            </Box>
                                            {/* Visa Type Badge */}
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    bottom: 16,
                                                    left: 16,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 0.5,
                                                    bgcolor: config.color,
                                                    color: 'white',
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    fontSize: '0.75rem',
                                                    fontWeight: 600,
                                                }}
                                            >
                                                {config.icon}
                                                {story.visaType} - {config.label}
                                            </Box>
                                        </Box>

                                        {/* Content Section - Right Side */}
                                        <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                                            {/* Author Info */}
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                                <Avatar
                                                    sx={{
                                                        width: 48,
                                                        height: 48,
                                                        background: `linear-gradient(135deg, ${config.color} 0%, #6B8DD6 100%)`,
                                                        fontWeight: 'bold',
                                                        fontSize: '1rem',
                                                    }}
                                                >
                                                    {initials}
                                                </Avatar>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="h6" fontWeight={700} sx={{ lineHeight: 1.2 }}>
                                                        {story.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {story.country}
                                                    </Typography>
                                                </Box>
                                                {/* Timeline - Desktop */}
                                                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <CalendarMonthOutlinedIcon sx={{ color: 'text.secondary', fontSize: 18 }} />
                                                        <Typography variant="body2" color="text.secondary">
                                                            {story.appliedDate}
                                                        </Typography>
                                                    </Box>
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                        <CheckCircleIcon sx={{ color: 'success.main', fontSize: 18 }} />
                                                        <Typography variant="body2" color="success.main" fontWeight={600}>
                                                            {story.grantedDate}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            </Box>

                                            {/* Timeline - Mobile */}
                                            <Box
                                                sx={{
                                                    display: { xs: 'flex', md: 'none' },
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    mb: 2,
                                                    p: 1.5,
                                                    bgcolor: 'rgba(59, 89, 152, 0.05)',
                                                    borderRadius: 2,
                                                }}
                                            >
                                                <CalendarMonthOutlinedIcon sx={{ color: 'primary.main', fontSize: 18 }} />
                                                <Typography variant="body2" color="text.secondary">
                                                    Applied: <strong>{story.appliedDate}</strong>
                                                </Typography>
                                                <Box sx={{ flex: 1 }} />
                                                <CheckCircleIcon sx={{ color: 'success.main', fontSize: 18 }} />
                                                <Typography variant="body2" color="success.main" fontWeight={600}>
                                                    {story.grantedDate}
                                                </Typography>
                                            </Box>

                                            {/* Details Chips */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                                {story.university && (
                                                    <Chip
                                                        size="small"
                                                        label={story.university}
                                                        sx={{ fontSize: '0.75rem', bgcolor: 'rgba(59, 89, 152, 0.08)' }}
                                                    />
                                                )}
                                                {story.course && (
                                                    <Chip
                                                        size="small"
                                                        label={story.course}
                                                        sx={{ fontSize: '0.75rem', bgcolor: 'rgba(107, 141, 214, 0.1)' }}
                                                    />
                                                )}
                                                <Chip
                                                    size="small"
                                                    label={story.purpose}
                                                    sx={{ fontSize: '0.75rem', bgcolor: 'rgba(76, 175, 80, 0.1)' }}
                                                />
                                            </Box>

                                            {/* Story */}
                                            <Box sx={{ flex: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                    sx={{
                                                        lineHeight: 1.7,
                                                        ...(!expandedStories.includes(story.id) && {
                                                            display: '-webkit-box',
                                                            WebkitLineClamp: { xs: 4, md: 3 },
                                                            WebkitBoxOrient: 'vertical',
                                                            overflow: 'hidden',
                                                        }),
                                                    }}
                                                >
                                                    &ldquo;{story.fullStory}&rdquo;
                                                </Typography>
                                                <Button
                                                    variant="text"
                                                    size="small"
                                                    onClick={() => toggleExpanded(story.id)}
                                                    sx={{
                                                        mt: 1,
                                                        p: 0,
                                                        minWidth: 'auto',
                                                        fontWeight: 600,
                                                        fontSize: '0.8rem',
                                                        color: 'primary.main',
                                                        textTransform: 'none',
                                                        '&:hover': {
                                                            bgcolor: 'transparent',
                                                            textDecoration: 'underline',
                                                        },
                                                    }}
                                                >
                                                    {expandedStories.includes(story.id) ? 'See less' : 'See more...'}
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </Box>

                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Box textAlign="center" mt={8}>
                            <Link href="/" passHref>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<ArrowBackIcon />}
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderWidth: 2,
                                        fontWeight: 600,
                                        '&:hover': { borderWidth: 2 },
                                    }}
                                >
                                    Back to Home
                                </Button>
                            </Link>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                    py: { xs: 8, md: 10 },
                }}
            >
                <Container maxWidth="md">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Box textAlign="center" color="white">
                            <Typography variant="h3" fontWeight="bold" sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}>
                                Ready to Write Your Success Story?
                            </Typography>
                            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, fontWeight: 400 }}>
                                Join hundreds of clients who have achieved their visa goals with our expert guidance.
                            </Typography>
                            <Link href="/contact" passHref>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f4ff 100%)',
                                        color: '#3B5998',
                                        px: 5,
                                        py: 2,
                                        fontWeight: 700,
                                        fontSize: '1.1rem',
                                        borderRadius: 50,
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                                        textTransform: 'none',
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #f5f5f5 0%, #e8ecf8 100%)',
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                            transform: 'translateY(-2px)',
                                        },
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    Book Free Consultation
                                </Button>
                            </Link>
                        </Box>
                    </motion.div>
                </Container>
            </Box>
        </>
    );
}
