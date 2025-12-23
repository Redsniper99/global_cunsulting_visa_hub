'use client';

import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const footerLinks = {
    pages: [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'About Us', href: '/about' },
        { name: 'Process', href: '/process' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Contact', href: '/contact' },
    ],
    services: [
        { name: 'USA Student Visa (F-1)', href: '/services#usa-visas' },
        { name: 'Exchange Visitor (J-1)', href: '/services#usa-visas' },
        { name: 'Tourist/Business (B-1/B-2)', href: '/services#usa-visas' },
        { name: 'Schengen Visas', href: '/services#schengen-visas' },
    ],
};

export default function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'text.primary', color: 'white', pt: 10, pb: 4, mt: 'auto' }}>
            <Container maxWidth="lg">
                {/* Top Section */}
                <Grid container spacing={5} sx={{ mb: 6 }}>
                    {/* Brand Column */}
                    <Grid size={{ xs: 12, lg: 4 }}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                            Global Consulting & Visa Hub
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'grey.400', mb: 3, lineHeight: 1.6 }}>
                            Your trusted partner for US & Schengen visa consulting. We provide expert guidance with transparency and personalized support for students, families, and professionals.
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <IconButton
                                component="a"
                                href="https://wa.me/94777468806"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: '#25D366' } }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                            <IconButton
                                component="a"
                                href="mailto:globalconsultingusa24@gmail.com"
                                aria-label="Email"
                                sx={{ bgcolor: 'rgba(255,255,255,0.1)', color: 'white', '&:hover': { bgcolor: 'primary.main' } }}
                            >
                                <EmailIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* Quick Links */}
                    <Grid size={{ xs: 6, md: 4, lg: 2 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 3 }}>Quick Links</Typography>
                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                            {footerLinks.pages.map((link) => (
                                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                                    <Link href={link.href} style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                                            {link.name}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Services */}
                    <Grid size={{ xs: 6, md: 4, lg: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 3 }}>Our Services</Typography>
                        <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                            {footerLinks.services.map((link) => (
                                <Box component="li" key={link.name} sx={{ mb: 1 }}>
                                    <Link href={link.href} style={{ textDecoration: 'none' }}>
                                        <Typography variant="body2" sx={{ color: 'grey.400', '&:hover': { color: 'white' } }}>
                                            {link.name}
                                        </Typography>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 12, md: 4, lg: 3 }}>
                        <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 3 }}>Contact Us</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <Link href="mailto:globalconsultingusa24@gmail.com" style={{ textDecoration: 'none' }}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'grey.400', '&:hover': { color: 'white' } }}>
                                    <EmailIcon fontSize="small" />
                                    <Typography variant="body2">globalconsultingusa24@gmail.com</Typography>
                                </Box>
                            </Link>
                            <Link href="tel:+19367884084" style={{ textDecoration: 'none' }}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'grey.400', '&:hover': { color: 'white' } }}>
                                    <PhoneIcon fontSize="small" />
                                    <Typography variant="body2">+1 936 788 4084 (USA)</Typography>
                                </Box>
                            </Link>
                            <Link href="tel:+94777468806" style={{ textDecoration: 'none' }}>
                                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', color: 'grey.400', '&:hover': { color: 'white' } }}>
                                    <PhoneIcon fontSize="small" />
                                    <Typography variant="body2">+94 777 468806 (Sri Lanka)</Typography>
                                </Box>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

                {/* Bottom Section */}
                <Box sx={{ pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
                    <Typography variant="body2" sx={{ color: 'grey.500' }}>
                        © {new Date().getFullYear()} Global Consulting & Visa Hub. All rights reserved.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Link href="/privacy" style={{ textDecoration: 'none' }}>
                            <Typography variant="body2" sx={{ color: 'grey.500', '&:hover': { color: 'white' } }}>Privacy Policy</Typography>
                        </Link>
                        <Link href="/terms" style={{ textDecoration: 'none' }}>
                            <Typography variant="body2" sx={{ color: 'grey.500', '&:hover': { color: 'white' } }}>Terms & Conditions</Typography>
                        </Link>
                    </Box>
                </Box>

                {/* Disclaimer */}
                <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                    <Typography variant="caption" display="block" align="center" sx={{ color: 'grey.600' }}>
                        Disclaimer: Global Consulting & Visa Hub provides consulting and guidance services only.
                        We are not a law firm and do not provide legal advice or representation.
                        All visa applications are subject to the discretion of the respective embassies and consulates.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
