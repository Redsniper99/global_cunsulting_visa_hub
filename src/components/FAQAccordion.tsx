'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    category?: string;
}

export default function FAQAccordion({ items, category }: FAQAccordionProps) {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box sx={{ width: '100%', mb: 4 }}>
            {category && (
                <Typography variant="h6" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                    {category}
                </Typography>
            )}
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                >
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        disableGutters
                        elevation={0}
                        sx={{
                            mb: 2,
                            borderRadius: '16px !important',
                            background: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(12px)',
                            border: '1px solid rgba(59, 89, 152, 0.12)',
                            '&:before': { display: 'none' },
                            '&.Mui-expanded': {
                                boxShadow: '0 8px 32px rgba(59, 89, 152, 0.08)',
                                background: 'rgba(255, 255, 255, 0.85)',
                            }
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon color="primary" />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                            sx={{ py: 1 }}
                        >
                            <Typography fontWeight="500" color="text.primary">
                                {item.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails sx={{ pt: 0, pb: 3 }}>
                            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                {item.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </motion.div>
            ))}
        </Box>
    );
}
