'use client';

import React from 'react';
import { Fab, Tooltip, Zoom } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppFloatingButton: React.FC = () => {
    const whatsappNumber = '94777468806';
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <Tooltip
            title="Chat with us on WhatsApp"
            placement="left"
            TransitionComponent={Zoom}
        >
            <Fab
                component="a"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                sx={{
                    position: 'fixed',
                    bottom: { xs: 20, md: 30 },
                    right: { xs: 20, md: 30 },
                    zIndex: 1000,
                    backgroundColor: '#25D366',
                    color: 'white',
                    width: { xs: 56, md: 64 },
                    height: { xs: 56, md: 64 },
                    boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        backgroundColor: '#20BA5A',
                        transform: 'scale(1.1)',
                        boxShadow: '0 6px 25px rgba(37, 211, 102, 0.6)',
                    },
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                        '0%': {
                            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.4)',
                        },
                        '70%': {
                            boxShadow: '0 0 0 15px rgba(37, 211, 102, 0)',
                        },
                        '100%': {
                            boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
                        },
                    },
                }}
            >
                <WhatsAppIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
            </Fab>
        </Tooltip>
    );
};

export default WhatsAppFloatingButton;
