'use client';

interface SmoothScrollProviderProps {
    children: React.ReactNode;
}

// Disabled Lenis smooth scroll due to text blur/chromatic aberration during scrolling
// Using native smooth scroll instead (set in CSS: html { scroll-behavior: smooth; })
export default function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    return <>{children}</>;
}
