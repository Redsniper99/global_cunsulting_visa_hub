'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// USA + Schengen countries
const countries = [
    { code: 'US', name: 'USA', flag: '🇺🇸' },
    { code: 'DE', name: 'Germany', flag: '🇩🇪' },
    { code: 'FR', name: 'France', flag: '🇫🇷' },
    { code: 'IT', name: 'Italy', flag: '🇮🇹' },
    { code: 'ES', name: 'Spain', flag: '🇪🇸' },
    { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
    { code: 'BE', name: 'Belgium', flag: '🇧🇪' },
    { code: 'AT', name: 'Austria', flag: '🇦🇹' },
    { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
    { code: 'PT', name: 'Portugal', flag: '🇵🇹' },
    { code: 'GR', name: 'Greece', flag: '🇬🇷' },
    { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
    { code: 'NO', name: 'Norway', flag: '🇳🇴' },
    { code: 'DK', name: 'Denmark', flag: '🇩🇰' },
    { code: 'FI', name: 'Finland', flag: '🇫🇮' },
    { code: 'PL', name: 'Poland', flag: '🇵🇱' },
    { code: 'CZ', name: 'Czech Republic', flag: '🇨🇿' },
    { code: 'HU', name: 'Hungary', flag: '🇭🇺' },
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
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    lineHeight: 1,
                                    mb: 0.5,
                                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                                }}
                            >
                                {country.flag}
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
