'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';

const pages = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/process' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <>
            {/* Floating Glassy Navbar - Desktop */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    display: { xs: 'none', md: 'flex' },
                    top: 20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 'calc(100% - 48px)',
                    maxWidth: 1200,
                    borderRadius: 50, // Pill shape
                    py: 0.5,
                    px: 2,
                    background: 'rgba(255, 255, 255, 0.75)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px rgba(59, 89, 152, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="lg" disableGutters>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '56px !important' }}>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                            <Image
                                src="/logo.svg"
                                alt="Global Consulting Visa Hub"
                                width={140}
                                height={36}
                                priority
                                style={{ height: '36px', width: 'auto' }}
                            />
                        </Link>

                        {/* Navigation Links */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {pages.map((page) => (
                                <Link key={page.name} href={page.href} style={{ textDecoration: 'none' }}>
                                    <Button
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 3,
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                                backgroundColor: 'rgba(59, 89, 152, 0.08)',
                                            },
                                        }}
                                    >
                                        {page.name}
                                    </Button>
                                </Link>
                            ))}
                        </Box>

                        {/* CTA Button */}
                        <Link href="/contact" style={{ textDecoration: 'none' }}>
                            <Button
                                variant="contained"
                                sx={{
                                    borderRadius: 50,
                                    px: 3,
                                    py: 1,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                    boxShadow: '0 4px 14px rgba(59, 89, 152, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #324b80 0%, #5a7bc4 100%)',
                                        boxShadow: '0 6px 20px rgba(59, 89, 152, 0.5)',
                                    },
                                }}
                            >
                                Book Consultation
                            </Button>
                        </Link>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Mobile Navbar - Full Width */}
            <AppBar
                position="fixed"
                elevation={0}
                sx={{
                    display: { xs: 'flex', md: 'none' },
                    top: 0,
                    left: 0,
                    right: 0,
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                    zIndex: 1100,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Mobile Menu Icon */}
                    <IconButton
                        size="large"
                        aria-label="menu"
                        onClick={handleOpenNavMenu}
                        sx={{ color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Mobile Logo */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Image
                            src="/logo.svg"
                            alt="Global Consulting Visa Hub"
                            width={120}
                            height={32}
                            priority
                            style={{ height: '32px', width: 'auto' }}
                        />
                    </Link>

                    {/* Spacer for centering */}
                    <Box sx={{ width: 48 }} />

                    {/* Mobile Menu */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                        keepMounted
                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        slotProps={{
                            paper: {
                                sx: {
                                    mt: 1,
                                    borderRadius: 3,
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                                    minWidth: 200,
                                },
                            },
                        }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                <Link href={page.href} style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}>
                                    <Typography>{page.name}</Typography>
                                </Link>
                            </MenuItem>
                        ))}
                        <MenuItem onClick={handleCloseNavMenu} sx={{ mt: 1 }}>
                            <Link href="/contact" style={{ textDecoration: 'none', width: '100%' }}>
                                <Button variant="contained" fullWidth sx={{ borderRadius: 2 }}>
                                    Book Consultation
                                </Button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </>
    );
}
