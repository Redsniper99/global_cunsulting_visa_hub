import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Visa Success Stories Sri Lanka - F-1, J-1, B1/B2 Approved Cases',
    description: 'Real visa success stories from Sri Lankan clients. See how we helped students, families, and professionals get US visa, USA visa approved. 50+ successful cases with our USA licensed consultant.',
    keywords: [
        'visa success stories Sri Lanka',
        'US visa approved Sri Lanka',
        'F-1 visa approved',
        'visa consultant reviews',
        'USA visa success rate',
        'student visa approved Sri Lanka'
    ],
    openGraph: {
        title: 'Visa Success Stories | Global Consulting & Visa Hub',
        description: 'Real success stories from clients who achieved their visa goals with our expert guidance.',
        type: 'website',
    },
}

export default function SuccessStoriesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
