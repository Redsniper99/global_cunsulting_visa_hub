'use client';

import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

interface TestimonialCardProps {
    name: string;
    visaType: string;
    quote: string;
    rating?: number;
    delay?: number;
}

export default function TestimonialCard({
    name,
    visaType,
    quote,
    rating = 5,
    delay = 0,
}: TestimonialCardProps) {
    // Get initials from name
    const initials = name
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            style={{ height: '100%' }}
        >
            <Card sx={{ p: 4, height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                {/* Quote Icon */}
                <FormatQuoteRoundedIcon
                    sx={{
                        fontSize: 48,
                        color: 'secondary.light',
                        opacity: 0.3,
                        position: 'absolute',
                        top: 16,
                        right: 16
                    }}
                />

                {/* Rating */}
                <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {[...Array(5)].map((_, i) => (
                        <StarRoundedIcon
                            key={i}
                            sx={{
                                color: i < rating ? '#F59E0B' : 'grey.300',
                                fontSize: 20
                            }}
                        />
                    ))}
                </Box>

                {/* Quote Text */}
                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        fontStyle: 'italic',
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        flexGrow: 1
                    }}
                >
                    &ldquo;{quote}&rdquo;
                </Typography>

                {/* Author */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, pt: 3, borderTop: '1px solid', borderColor: 'divider', mt: 'auto' }}>
                    <Avatar
                        sx={{
                            width: 48,
                            height: 48,
                            bgcolor: 'primary.main',
                            fontWeight: 'bold',
                            background: 'linear-gradient(135deg, #3B5998 0%, #6B8DD6 100%)'
                        }}
                    >
                        {initials}
                    </Avatar>
                    <Box>
                        <Typography variant="subtitle1" fontWeight="bold" color="text.primary">
                            {name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                            {visaType}
                        </Typography>
                    </Box>
                </Box>
            </Card>
        </motion.div>
    );
}
