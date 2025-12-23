'use client';

import Hero from '@/components/Hero';
import GlassCard from '@/components/GlassCard';
import ServiceCard from '@/components/ServiceCard';
import ProcessStepper from '@/components/ProcessStepper';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';
import ScrollAnimation from '@/components/ScrollAnimation';

// MUI Imports
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

// Icons
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

// Why Choose Us features
const features = [
  {
    icon: <VerifiedUserOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Licensed & Trusted',
    description: 'USA Licensed Consultant with over 8 years of experience in visa consulting and immigration procedures.',
  },
  {
    icon: <VisibilityOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Transparent Process',
    description: 'Clear communication at every step. No hidden fees, no surprises—just honest guidance from start to finish.',
  },
  {
    icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Simplified Process',
    description: 'We handle the complexity for you—organized documentation, form assistance, and step-by-step guidance.',
  },
  {
    icon: <SupportAgentOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Personalized Support',
    description: 'Every client is unique. We provide tailored advice based on your specific goals, background, and situation.',
  },
  {
    icon: <ThumbUpOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'High Success Rate',
    description: 'Our expertise in handling complex cases, including previously rejected applications, leads to favorable outcomes.',
  },
  {
    icon: <PhoneInTalkOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Always Accessible',
    description: 'Reach us via phone, email, or WhatsApp. We are here to answer your questions and support you throughout.',
  },
];

// Services overview
const services = [
  {
    icon: <SchoolOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Student Visa (F-1)',
    description: 'Pursue your academic dreams in America with our comprehensive F-1 visa guidance.',
    features: ['University selection assistance', 'I-20 guidance', 'Interview preparation'],
  },
  {
    icon: <WorkOutlineOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Exchange Visitor (J-1)',
    description: 'Join cultural exchange, research, or training programs in the United States.',
    features: ['Program sponsorship guidance', 'DS-2019 assistance', 'Cultural exchange support'],
  },
  {
    icon: <FlightTakeoffOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Tourist & Business (B-1/B-2)',
    description: 'Visit the USA for tourism, family visits, or short-term business activities.',
    features: ['Strong application building', 'Documentation support', 'Interview coaching'],
  },
  {
    icon: <LanguageOutlinedIcon sx={{ fontSize: 32 }} />,
    title: 'Schengen Visa',
    description: 'Explore 26+ European countries with a single Schengen visa application.',
    features: ['Multi-country access', 'Itinerary planning', 'Embassy appointment assistance'],
  },
];

// Testimonials
const testimonials = [
  {
    name: 'Ayeshma Fayaz',
    visaType: 'F-1 Student Visa',
    quote: 'I successfully received my visa under her expert guidance! She not only helped me secure an $11,000 scholarship for my bachelor\'s program but also handled the entire process and documentation with great professionalism.',
    rating: 5,
  },
  {
    name: 'Chameera Keerthirathne',
    visaType: 'J-1 Exchange Visa',
    quote: 'We received our visas! I consulted Ms. Shamlee for my J-1 visa and our children\'s dependent visas. It was a stressful and complex process, but she managed everything perfectly — from documentation to interview preparation.',
    rating: 5,
  },
  {
    name: 'Vindya Sakuni',
    visaType: 'F-1 & F-2 Visa',
    quote: 'I strongly recommend Shamlee for F1 and F2 visa guidance. She is easy to communicate with and informs us of all the procedures A to Z. She prepares us well with all the documents and nothing to worry about.',
    rating: 5,
  },
  {
    name: 'Tharinda Vimukthi',
    visaType: 'USA Immigration',
    quote: 'I highly recommend this page for everyone willing to migrate to Americas. As a student, as an individual, as a tourist, as a family—you can get all detailed information and advice. The adviser Shamlee is nice and friendly.',
    rating: 5,
  },
];

// Success Stories
const successStories = [
  {
    name: 'Ayeshma Fayaz',
    visaType: 'F-1' as const,
    appliedDate: 'Sep 2024',
    grantedDate: 'Oct 2024',
    university: 'Texas State University',
    course: 'Bachelor of Science',
    purpose: 'Academic Studies',
    country: 'Sri Lanka',
    story: 'My dream of studying in America came true! With expert guidance, I secured an $11,000 scholarship and my F-1 visa was approved on the first attempt.',
    visaImage: '/images/granted visa/fayaz.png',
  },
  {
    name: 'Chameera Keerthirathne',
    visaType: 'J-1' as const,
    appliedDate: 'Aug 2024',
    grantedDate: 'Sep 2024',
    university: 'Research Program',
    course: 'Cultural Exchange',
    purpose: 'Exchange Program',
    country: 'Sri Lanka',
    story: 'Got my J-1 visa along with dependent visas for my children. The entire process was handled professionally despite being complex.',
    visaImage: '/visa_j1.png',
  },
  {
    name: 'Vindya Sakuni',
    visaType: 'F-1' as const,
    appliedDate: 'Jul 2024',
    grantedDate: 'Aug 2024',
    university: 'University of Houston',
    course: 'Master of Business',
    purpose: 'Graduate Studies',
    country: 'Sri Lanka',
    story: 'From document preparation to interview coaching, every step was handled perfectly. Now I am pursuing my MBA in Houston!',
    visaImage: '/visa_f1.png',
  },
];

import SuccessStoryCard from '@/components/SuccessStoryCard';

export default function Home() {
  return (
    <>
      <Hero />

      {/* Why Choose Us Section */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}>
        <Container maxWidth="lg">
          <ScrollAnimation>
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Why Choose <Box component="span" sx={{ color: 'primary.main' }}>Global Consulting</Box>?
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                With years of expertise and hundreds of successful cases, we provide the guidance you need to navigate the visa process with confidence.
              </Typography>
            </Box>
          </ScrollAnimation>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <GlassCard delay={index * 0.1}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Box
                        sx={{
                          minWidth: 56,
                          height: 56,
                          borderRadius: 3,
                          bgcolor: 'rgba(59, 89, 152, 0.1)',
                          color: 'primary.main',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="h6" fontWeight={600} gutterBottom>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Overview Section */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <ScrollAnimation>
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Our <Box component="span" sx={{ color: 'primary.main' }}>Visa Services</Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                Expert consulting for US and Schengen visas. We guide you through every step of your application.
              </Typography>
            </Box>
          </ScrollAnimation>

          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={index}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  href="/services"
                  delay={index * 0.1}
                />
              </Grid>
            ))}
          </Grid>

          <ScrollAnimation delay={0.4}>
            <Box textAlign="center" mt={6}>
              <Button
                variant="outlined"
                size="large"
                href="/services"
                sx={{
                  borderWidth: 2,
                  fontWeight: 600,
                  px: 4,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                View All Services
              </Button>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.03) 0%, rgba(107, 141, 214, 0.05) 100%)' }}>
        <ProcessStepper />
      </Box>

      {/* Success Stories Section */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}>
        <Container maxWidth="lg">
          <ScrollAnimation>
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                Visa <Box component="span" sx={{ color: 'primary.main' }}>Success Stories</Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                Real clients, real visas, real success. See how we helped these clients achieve their American dream.
              </Typography>
            </Box>
          </ScrollAnimation>

          <Grid container spacing={3}>
            {successStories.map((story, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <SuccessStoryCard
                  name={story.name}
                  visaType={story.visaType}
                  appliedDate={story.appliedDate}
                  grantedDate={story.grantedDate}
                  university={story.university}
                  course={story.course}
                  purpose={story.purpose}
                  country={story.country}
                  story={story.story}
                  visaImage={story.visaImage}
                  delay={index * 0.1}
                />
              </Grid>
            ))}
          </Grid>

          <ScrollAnimation delay={0.4}>
            <Box textAlign="center" mt={6}>
              <Button
                variant="outlined"
                size="large"
                href="/success-stories"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(59, 89, 152, 0.05)',
                  },
                }}
              >
                View All Success Stories
              </Button>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <ScrollAnimation>
            <Box textAlign="center" mb={8}>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 2 }}>
                What Our <Box component="span" sx={{ color: 'primary.main' }}>Clients Say</Box>
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}>
                Real stories from clients who achieved their visa goals with our guidance.
              </Typography>
            </Box>
          </ScrollAnimation>

          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
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

          <ScrollAnimation delay={0.4}>
            <Box textAlign="center" mt={6}>
              <Button
                variant="outlined"
                size="large"
                href="/testimonials"
                sx={{
                  borderWidth: 2,
                  fontWeight: 600,
                  px: 4,
                  '&:hover': { borderWidth: 2 }
                }}
              >
                Read More Client Reviews
              </Button>
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>

      {/* Partnerships Section */}
      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 12 },
          background: 'linear-gradient(135deg, rgba(59, 89, 152, 0.03) 0%, rgba(107, 141, 214, 0.06) 100%)',
        }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation>
            <Box textAlign="center" mb={6}>
              <Typography
                variant="h3"
                fontWeight="bold"
                sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.5rem' } }}
              >
                Our <Box component="span" sx={{ color: 'primary.main' }}>Partners</Box>
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400 }}
              >
                Trusted partnerships with leading educational institutions worldwide
              </Typography>
            </Box>
          </ScrollAnimation>

          <ScrollAnimation delay={0.2}>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: { xs: 4, md: 6 },
              }}
            >
              {[
                { src: '/images/partnerships/20230410111847_file_EKA-removebg-preview.png', alt: 'EKA' },
                { src: '/images/partnerships/Logo-transparent-GCM-01-300x63-1.png', alt: 'GCM' },
                { src: '/images/partnerships/Logo_of_Transport_and_Telecommunication_Institute-removebg-preview.png', alt: 'TTI' },
                { src: '/images/partnerships/gbs-malta.png', alt: 'GBS Malta' },
                { src: '/images/partnerships/rtu_logo_en-removebg-preview.png', alt: 'RTU' },
              ].map((partner, index) => (
                <Box
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                    filter: 'grayscale(100%)',
                    opacity: 0.7,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)',
                      opacity: 1,
                      transform: 'scale(1.05)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={partner.src}
                    alt={partner.alt}
                    sx={{
                      maxWidth: { xs: 120, md: 160 },
                      maxHeight: { xs: 60, md: 80 },
                      objectFit: 'contain',
                    }}
                  />
                </Box>
              ))}
            </Box>
          </ScrollAnimation>
        </Container>
      </Box>

      {/* CTA Section */}
      <CTASection variant="gradient" />
    </>
  );
}
