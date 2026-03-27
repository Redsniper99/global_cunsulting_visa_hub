'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from 'next/link';
import Image from 'next/image';

const pages = [
    { name: 'Home', href: '/', inMore: false },
    { name: 'Services', href: '/services', inMore: false },
    { name: 'Certifications', href: '/certifications', inMore: false },
    { name: 'About', href: '/about', inMore: false },
    { name: 'Process', href: '/process', inMore: true },
    { name: 'Testimonials', href: '/testimonials', inMore: true },
    { name: 'FAQ', href: '/faq', inMore: true },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [moreAnchorEl, setMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const primaryPages = pages.filter((page) => !page.inMore);
    const morePages = pages.filter((page) => page.inMore);
    const moreMenuOpen = Boolean(moreAnchorEl);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleMoreOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMoreAnchorEl(event.currentTarget);
    };
    const handleMoreClose = () => {
        setMoreAnchorEl(null);
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
                    background: 'rgba(255, 255, 255, 0.98)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: '0 8px 32px rgba(59, 89, 152, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
                    zIndex: 1100,
                }}
            >
                <Container maxWidth="lg" disableGutters>
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '56px !important' }}>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '10px' }}>
                            <Image
                                src="/Global Consulting & Visa Hub-01.svg"
                                alt="Global Consulting Visa Hub"
                                width={36}
                                height={36}
                                priority
                                style={{ height: '36px', width: '36px', borderRadius: '50%' }}
                            />
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 700,
                                    color: 'text.primary',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.2,
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                Global Consulting & Visa Hub
                            </Typography>
                        </Link>

                        {/* Navigation Links */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            {primaryPages.map((page) => (
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
                            {morePages.length > 0 && (
                                <>
                                    <Button
                                        onClick={handleMoreOpen}
                                        endIcon={<KeyboardArrowDownIcon />}
                                        sx={{
                                            color: 'text.primary',
                                            fontWeight: 500,
                                            fontSize: '0.9rem',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 3,
                                            textTransform: 'none',
                                            transition: 'all 0.2s ease',
                                            '&:hover': {
                                                color: 'primary.main',
                                                backgroundColor: 'rgba(59, 89, 152, 0.08)',
                                            },
                                        }}
                                    >
                                        More
                                    </Button>
                                    <Menu
                                        anchorEl={moreAnchorEl}
                                        open={moreMenuOpen}
                                        onClose={handleMoreClose}
                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                                        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                        slotProps={{
                                            paper: {
                                                sx: {
                                                    mt: 1,
                                                    borderRadius: 2,
                                                    minWidth: 200,
                                                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
                                                },
                                            },
                                        }}
                                    >
                                        {morePages.map((page) => (
                                            <MenuItem
                                                key={page.name}
                                                component={Link}
                                                href={page.href}
                                                onClick={handleMoreClose}
                                                sx={{ fontSize: '0.92rem', py: 1.2 }}
                                            >
                                                {page.name}
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </>
                            )}
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
                    background: 'rgba(255, 255, 255, 0.98)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
                    zIndex: 1100,
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Mobile Logo - Left */}
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', gap: '8px' }}>
                        <Image
                            src="/Global Consulting & Visa Hub-01.svg"
                            alt="Global Consulting Visa Hub"
                            width={32}
                            height={32}
                            priority
                            style={{ height: '32px', width: '32px', borderRadius: '50%' }}
                        />
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 700,
                                color: 'text.primary',
                                fontSize: '0.8rem',
                                lineHeight: 1.2,
                            }}
                        >
                            Global Consulting & Visa Hub
                        </Typography>
                    </Link>

                    {/* Mobile Menu Icon - Right */}
                    <IconButton
                        size="large"
                        aria-label="open navigation menu"
                        onClick={handleDrawerToggle}
                        sx={{ color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Mobile Drawer - Half Width from Right */}
            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: '66.67%',
                        boxSizing: 'border-box',
                        backgroundColor: '#ffffff',
                        boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
                    },
                }}
                slotProps={{
                    backdrop: {
                        sx: {
                            backgroundColor: 'transparent',
                        },
                    },
                }}
            >
                <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* Drawer Header with Close Button */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            p: 2,
                            borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                fontWeight: 700,
                                color: 'text.primary',
                                fontSize: '0.9rem',
                            }}
                        >
                            Menu
                        </Typography>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ color: 'text.primary' }}
                            aria-label="close navigation menu"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    {/* Navigation Links */}
                    <List sx={{ flex: 1, py: 2 }}>
                        {pages.map((page) => (
                            <ListItem key={page.name} disablePadding>
                                <Link
                                    href={page.href}
                                    style={{ textDecoration: 'none', color: 'inherit', width: '100%' }}
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemButton
                                        sx={{
                                            py: 1.5,
                                            px: 3,
                                            '&:hover': {
                                                backgroundColor: 'rgba(59, 89, 152, 0.08)',
                                            },
                                        }}
                                    >
                                        <ListItemText
                                            primary={page.name}
                                            primaryTypographyProps={{
                                                fontWeight: 500,
                                                fontSize: '0.95rem',
                                            }}
                                        />
                                    </ListItemButton>
                                </Link>
                            </ListItem>
                        ))}
                    </List>

                    <Divider />

                    {/* CTA Button at Bottom */}
                    <Box sx={{ p: 2 }}>
                        <Link
                            href="/contact"
                            style={{ textDecoration: 'none', width: '100%' }}
                            onClick={handleDrawerToggle}
                        >
                            <Button
                                variant="contained"
                                fullWidth
                                sx={{
                                    borderRadius: 2,
                                    py: 1.5,
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                                    boxShadow: '0 4px 14px rgba(59, 89, 152, 0.4)',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #324b80 0%, #5a7bc4 100%)',
                                    },
                                }}
                            >
                                Book Consultation
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Drawer>
        </>
    );
}
