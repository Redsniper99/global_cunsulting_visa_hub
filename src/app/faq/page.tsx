'use client';

import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion';
import CTASection from '@/components/CTASection';
import ScrollAnimation from '@/components/ScrollAnimation';

// MUI Imports
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const faqCategories = [
    {
        category: 'USA Visa Questions',
        emoji: '🇺🇸',
        items: [
            {
                question: 'What services do you offer for USA visa applications?',
                answer: 'We provide comprehensive consulting services for various USA visa categories including F-1 (Student), J-1 (Exchange Visitor), B-1/B-2 (Business/Tourist), dependent visas (F-2, J-2), and K-1 (Fiancé) visas. Our services include eligibility assessment, document preparation guidance, form assistance, and interview coaching.',
            },
            {
                question: 'How long does the F-1 student visa process take?',
                answer: 'The F-1 visa process typically takes 3-4 weeks from consultation to interview, depending on embassy appointment availability. We recommend starting the process at least 3-4 months before your program start date to allow ample time for university applications, I-20 issuance, and visa processing.',
            },
            {
                question: 'Can you help with rejected visa cases?',
                answer: 'Yes! Handling previously rejected visa cases is one of our specialties. Ms. Shamlee Bandara has extensive experience in analyzing rejection reasons, strengthening applications, and preparing clients for successful reapplication. Each case is evaluated individually to identify areas of improvement.',
            },
            {
                question: 'Do I need to travel to your office for consultation?',
                answer: 'No, we offer remote consultations via phone, video call, or WhatsApp. Our clients are located worldwide, and we have successfully guided applicants from various countries through the entire visa process remotely.',
            },
            {
                question: 'What documents are typically required for a US student visa?',
                answer: 'Key documents include: valid passport, I-20 from your university, DS-160 confirmation, financial documents (bank statements, scholarship letters, sponsor affidavits), academic transcripts, standardized test scores (TOEFL/IELTS, GRE/GMAT if applicable), and evidence of ties to your home country.',
            },
        ],
    },
    {
        category: 'Schengen Visa Questions',
        emoji: '🇪🇺',
        items: [
            {
                question: 'Which countries can I visit with a Schengen visa?',
                answer: 'A Schengen visa allows you to travel to 26 European countries: Austria, Belgium, Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden, and Switzerland.',
            },
            {
                question: 'How long can I stay in the Schengen area?',
                answer: 'With a standard Schengen tourist visa, you can stay up to 90 days within a 180-day period. This means you can visit multiple times, but your total stay cannot exceed 90 days in any rolling 180-day window.',
            },
            {
                question: 'Which embassy should I apply to for a Schengen visa?',
                answer: 'You should apply to the embassy of the country where you will spend the most time, or if spending equal time in multiple countries, the country of first entry. We help you determine the correct embassy based on your travel itinerary.',
            },
            {
                question: 'What is the typical processing time for Schengen visas?',
                answer: 'Schengen visa processing typically takes 15-30 calendar days. We recommend applying at least 4-6 weeks before your travel date. During peak seasons, processing may take longer, so early application is advisable.',
            },
        ],
    },
    {
        category: 'General Consulting Questions',
        emoji: '❓',
        items: [
            {
                question: 'How much do your consulting services cost?',
                answer: 'Our fees vary based on the visa type and complexity of your case. We offer a free initial consultation to assess your situation and provide a transparent quote. There are no hidden fees, and we clearly explain all costs upfront before you commit.',
            },
            {
                question: 'What makes you different from other visa consultants?',
                answer: 'Our founder, Ms. Shamlee Bandara, is a USA Licensed Consultant with over 8 years of experience and currently works as a US Immigration Paralegal. This combination of academic knowledge, practical experience, and ongoing professional involvement gives us unique insights into successful visa applications.',
            },
            {
                question: 'Do you guarantee visa approval?',
                answer: 'While we cannot guarantee visa approval (as final decisions rest with the embassy), our expertise and thorough preparation significantly increase your chances. We have an excellent track record and are known for successfully handling complex and previously rejected cases.',
            },
            {
                question: 'How do I get started with your services?',
                answer: 'Getting started is easy! Simply contact us via WhatsApp, email, or phone to schedule a free initial consultation. During this call, we will assess your situation, discuss your goals, and outline the next steps. There is no obligation to proceed after the initial consultation.',
            },
            {
                question: 'What if my situation changes after starting the process?',
                answer: 'We understand that circumstances can change. We maintain flexibility and work with you to adapt your application strategy as needed. Our goal is to support you throughout the entire journey, regardless of any changes that may occur.',
            },
        ],
    },
];

export default function FAQPage() {
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
                                Frequently Asked <Box component="span" sx={{ color: 'primary.main' }}>Questions</Box>
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{ maxWidth: 'md', mx: 'auto', fontWeight: 400, lineHeight: 1.7 }}
                            >
                                Find answers to common questions about our visa consulting services,
                                the application process, and what to expect when working with us.
                            </Typography>
                        </Box>
                    </motion.div>
                </Container>
            </Box>

            {/* FAQ Sections */}
            <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
                <Container maxWidth="md">
                    {faqCategories.map((category, index) => (
                        <ScrollAnimation key={index} delay={index * 0.1}>
                            <Box sx={{ mb: 8, '&:last-child': { mb: 0 } }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                    <Box
                                        sx={{
                                            width: 48,
                                            height: 48,
                                            borderRadius: 3,
                                            background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '1.5rem',
                                        }}
                                    >
                                        {category.emoji}
                                    </Box>
                                    <Typography variant="h5" fontWeight="bold">
                                        {category.category}
                                    </Typography>
                                </Box>
                                <FAQAccordion items={category.items} />
                            </Box>
                        </ScrollAnimation>
                    ))}
                </Container>
            </Box>

            {/* Still Have Questions */}
            <Box
                component="section"
                sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, #FAFBFF 0%, #F3F6FF 100%)' }}
            >
                <Container maxWidth="sm">
                    <ScrollAnimation>
                        <Box textAlign="center">
                            <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
                                Still Have Questions?
                            </Typography>
                            <Typography color="text.secondary" sx={{ mb: 4 }}>
                                Can&apos;t find the answer you&apos;re looking for? Reach out to us directly and we&apos;ll be happy to help.
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    startIcon={<EmailIcon />}
                                    href="mailto:globalconsultingusa24@gmail.com"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                    }}
                                >
                                    Email Us
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    startIcon={<WhatsAppIcon />}
                                    href="https://wa.me/94777468806"
                                    target="_blank"
                                    sx={{
                                        px: 4,
                                        py: 1.5,
                                        borderColor: '#25D366',
                                        color: '#25D366',
                                        '&:hover': { borderColor: '#25D366', bgcolor: 'rgba(37, 211, 102, 0.1)' },
                                    }}
                                >
                                    WhatsApp Us
                                </Button>
                            </Box>
                        </Box>
                    </ScrollAnimation>
                </Container>
            </Box>

            {/* CTA Section */}
            <CTASection variant="gradient" />
        </>
    );
}
