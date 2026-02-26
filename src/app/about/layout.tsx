import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'About Us - USA Licensed Visa Consultant in Sri Lanka',
    description: 'Meet the leadership of Global Consulting & Visa Hub — Derick Marambe (Founder & Guiding Mentor) and Indu Marambe (Advisor). Expert visa consultancy in Sri Lanka specializing in US and Schengen visa applications.',
    keywords: [
        'Global Consulting Visa Hub leadership',
        'Derick Marambe visa consultant',
        'Indu Marambe advisor',
        'US visa consultant Sri Lanka',
        'best visa consultant Colombo',
        'immigration consultant Sri Lanka',
        'F-1 visa expert Sri Lanka'
    ],
    openGraph: {
        title: 'About Us - USA Licensed Visa Consultant | Global Consulting & Visa Hub',
        description: 'Meet our USA Licensed Consultant with 8+ years of experience helping Sri Lankans achieve their American dream.',
        type: 'website',
    },
}

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
