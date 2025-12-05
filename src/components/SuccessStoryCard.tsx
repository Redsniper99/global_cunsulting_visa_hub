'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

interface SuccessStoryCardProps {
    name: string;
    visaType: 'F-1' | 'J-1' | 'B1/B2' | 'F-2' | 'K-1';
    appliedDate: string;
    grantedDate: string;
    university?: string;
    course?: string;
    purpose: string;
    country: string;
    story: string;
    visaImage: string;
    delay?: number;
}

const visaTypeConfig = {
    'F-1': {
        label: 'Student Visa',
        color: '#3B5998',
        icon: <SchoolOutlinedIcon fontSize="small" />,
    },
    'J-1': {
        label: 'Exchange Visitor',
        color: '#6B8DD6',
        icon: <PublicOutlinedIcon fontSize="small" />,
    },
    'B1/B2': {
        label: 'Tourist/Business',
        color: '#4CAF50',
        icon: <FlightTakeoffOutlinedIcon fontSize="small" />,
    },
    'F-2': {
        label: 'Dependent Visa',
        color: '#FF9800',
        icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
    'K-1': {
        label: 'Fiancé Visa',
        color: '#E91E63',
        icon: <WorkOutlineOutlinedIcon fontSize="small" />,
    },
};

export default function SuccessStoryCard({
    name,
    visaType,
    appliedDate,
    grantedDate,
    university,
    course,
    purpose,
    country,
    story,
    visaImage,
    delay = 0,
}: SuccessStoryCardProps) {
    const config = visaTypeConfig[visaType];
    const initials = name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ height: '100%' }}
        >
            <Card
                sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 16px 40px rgba(59, 89, 152, 0.15)',
                    },
                }}
            >
                {/* Visa Image Section */}
                <Box sx={{ position: 'relative', height: 180, overflow: 'hidden' }}>
                    <Image
                        src={visaImage}
                        alt={`${name}'s approved visa`}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    {/* Approved Badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 12,
                            right: 12,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            bgcolor: 'rgba(76, 175, 80, 0.95)',
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 2,
                            fontSize: '0.75rem',
                            fontWeight: 600,
                        }}
                    >
                        <CheckCircleIcon sx={{ fontSize: 16 }} />
                        APPROVED
                    </Box>
                    {/* Visa Type Badge */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 12,
                            left: 12,
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
                        {visaType} - {config.label}
                    </Box>
                </Box>

                {/* Content Section */}
                <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Header with Avatar and Name */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar
                            sx={{
                                width: 48,
                                height: 48,
                                background: `linear-gradient(135deg, ${config.color} 0%, #6B8DD6 100%)`,
                                fontWeight: 'bold',
                            }}
                        >
                            {initials}
                        </Avatar>
                        <Box>
                            <Typography variant="h6" fontWeight={600} sx={{ lineHeight: 1.2 }}>
                                {name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {country}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Timeline */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 2,
                            mb: 2,
                            p: 1.5,
                            bgcolor: 'rgba(59, 89, 152, 0.05)',
                            borderRadius: 2,
                        }}
                    >
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                Applied
                            </Typography>
                            <Typography variant="body2" fontWeight={600}>
                                {appliedDate}
                            </Typography>
                        </Box>
                        <Box sx={{ width: 1, bgcolor: 'divider' }} />
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                                Granted
                            </Typography>
                            <Typography variant="body2" fontWeight={600} color="success.main">
                                {grantedDate}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Details Chips */}
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                        {university && (
                            <Chip
                                size="small"
                                label={university}
                                sx={{ fontSize: '0.7rem', bgcolor: 'rgba(59, 89, 152, 0.08)' }}
                            />
                        )}
                        {course && (
                            <Chip
                                size="small"
                                label={course}
                                sx={{ fontSize: '0.7rem', bgcolor: 'rgba(107, 141, 214, 0.1)' }}
                            />
                        )}
                        <Chip
                            size="small"
                            label={purpose}
                            sx={{ fontSize: '0.7rem', bgcolor: 'rgba(76, 175, 80, 0.1)' }}
                        />
                    </Box>

                    {/* Story */}
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            lineHeight: 1.6,
                            flex: 1,
                            overflow: 'hidden',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}
                    >
                        &ldquo;{story}&rdquo;
                    </Typography>
                </Box>
            </Card>
        </motion.div>
    );
}
