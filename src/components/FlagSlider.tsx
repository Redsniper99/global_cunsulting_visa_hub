'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

// USA + Schengen countries with country codes for flag images
const countries = [
    { code: 'us', name: 'USA' },
    { code: 'de', name: 'Germany' },
    { code: 'fr', name: 'France' },
    { code: 'it', name: 'Italy' },
    { code: 'es', name: 'Spain' },
    { code: 'nl', name: 'Netherlands' },
    { code: 'be', name: 'Belgium' },
    { code: 'at', name: 'Austria' },
    { code: 'ch', name: 'Switzerland' },
    { code: 'pt', name: 'Portugal' },
    { code: 'gr', name: 'Greece' },
    { code: 'se', name: 'Sweden' },
    { code: 'no', name: 'Norway' },
    { code: 'dk', name: 'Denmark' },
    { code: 'fi', name: 'Finland' },
    { code: 'pl', name: 'Poland' },
    { code: 'cz', name: 'Czech Republic' },
    { code: 'hu', name: 'Hungary' },
];

export default function FlagSlider() {
    // Duplicate the array for seamless infinite scroll
    const duplicatedFlags = [...countries, ...countries];

    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                py: { xs: 2, md: 3 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    width: 'max-content',
                }}
            >
                <motion.div
                    animate={{
                        x: ['0%', '-50%'],
                    }}
                    transition={{
                        duration: 45,
                        ease: 'linear',
                        repeat: Infinity,
                    }}
                    style={{
                        display: 'flex',
                        gap: '24px',
                    }}
                >
                    {duplicatedFlags.map((country, index) => (
                        <Box
                            key={`${country.code}-${index}`}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                minWidth: { xs: 60, md: 80 },
                                p: { xs: 1, md: 1.5 },
                                borderRadius: 2,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                    bgcolor: 'rgba(59, 89, 152, 0.08)',
                                    transform: 'translateY(-4px)',
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 40, md: 56 },
                                    height: { xs: 28, md: 40 },
                                    position: 'relative',
                                    mb: 0.5,
                                    borderRadius: 1,
                                    overflow: 'hidden',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                }}
                            >
                                <img
                                    src={`https://flagcdn.com/w80/${country.code}.png`}
                                    alt={`${country.name} flag`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    color: 'text.secondary',
                                    fontWeight: 500,
                                    fontSize: { xs: '0.55rem', md: '0.65rem' },
                                    textAlign: 'center',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                {country.name}
                            </Typography>
                        </Box>
                    ))}
                </motion.div>
            </Box>
        </Box>
    );
}
