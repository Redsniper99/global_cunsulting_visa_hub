import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'US Visa FAQ Sri Lanka - Common Questions Answered',
    description: 'Frequently asked questions about US visa, USA visa, Schengen visa applications from Sri Lanka. Expert answers from our USA licensed consultant with 8+ years experience.',
    keywords: [
        'US visa FAQ Sri Lanka',
        'USA visa questions',
        'visa interview tips',
        'F-1 visa FAQ',
        'Schengen visa questions',
        'visa consultant FAQ'
    ],
    openGraph: {
        title: 'US Visa FAQ | Global Consulting & Visa Hub',
        description: 'Get answers to common visa questions from our expert consultants.',
        type: 'website',
    },
}

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
