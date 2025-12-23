import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Client Reviews & Testimonials - US Visa Consultant Sri Lanka',
    description: 'Read real client reviews and testimonials about our US visa consulting services. See why we are the best USA licensed visa consultant in Sri Lanka with 50+ successful cases.',
    keywords: [
        'visa consultant reviews Sri Lanka',
        'US visa consultant testimonials',
        'best visa consultant Sri Lanka',
        'client feedback visa services',
        'trusted visa consultant'
    ],
    openGraph: {
        title: 'Client Reviews & Testimonials | Global Consulting & Visa Hub',
        description: 'Read what our clients say about our expert visa consulting services.',
        type: 'website',
    },
}

export default function TestimonialsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
