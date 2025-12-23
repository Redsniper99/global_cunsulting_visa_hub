'use client';

import { createTheme } from '@mui/material/styles';
import { Inter, Outfit } from 'next/font/google';

const inter = Inter({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const outfit = Outfit({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        primary: {
            main: '#3B5998', // Soft patriot blue
            light: '#6B8DD6',
            dark: '#2C4373',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#6B8DD6', // Light sky blue
            light: '#8BA6DF',
            dark: '#4A6FB3',
            contrastText: '#ffffff',
        },
        error: {
            main: '#C94C4C',
            light: '#E67373',
            dark: '#9E3232',
        },
        success: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
        },
        background: {
            default: '#FAFBFF', // Very light blue-white
            paper: 'rgba(255, 255, 255, 0.8)',
        },
        text: {
            primary: '#1A2B4A', // Dark navy text
            secondary: '#64748B', // Muted text
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
        h1: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 700,
        },
        h2: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 700,
        },
        h3: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 600,
        },
        h4: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 600,
        },
        h5: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 500,
        },
        h6: {
            fontFamily: outfit.style.fontFamily,
            fontWeight: 500,
        },
        button: {
            textTransform: 'none',
            fontWeight: 600,
        },
    },
    shape: {
        borderRadius: 12,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    padding: '10px 24px',
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 12px rgba(59, 89, 152, 0.2)',
                    },
                },
                containedPrimary: {
                    background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)',
                    '&:hover': {
                        background: 'linear-gradient(135deg, #324b80 0%, #5a7bc4 100%)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(16px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(59, 89, 152, 0.12)',
                    boxShadow: '0 4px 24px rgba(59, 89, 152, 0.08)',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(16px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    borderBottom: '1px solid rgba(59, 89, 152, 0.1)',
                    boxShadow: '0 4px 20px rgba(59, 89, 152, 0.05)',
                    color: '#1A2B4A',
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#ffffff',
                    backgroundImage: 'none',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                    borderRadius: 12,
                    border: '1px solid rgba(59, 89, 152, 0.1)',
                    marginTop: 4,
                },
                list: {
                    padding: '8px 0',
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    padding: '10px 16px',
                    '&:hover': {
                        backgroundColor: 'rgba(59, 89, 152, 0.08)',
                    },
                    '&.Mui-selected': {
                        backgroundColor: 'rgba(59, 89, 152, 0.12)',
                        '&:hover': {
                            backgroundColor: 'rgba(59, 89, 152, 0.16)',
                        },
                    },
                },
            },
        },
        MuiSelect: {
            styleOverrides: {
                icon: {
                    color: '#64748B',
                },
            },
        },
        MuiPopover: {
            styleOverrides: {
                paper: {
                    backgroundColor: '#ffffff',
                    backgroundImage: 'none',
                },
            },
        },
    },
});

export default theme;
