/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                bg: 'rgb(var(--bg) / <alpha-value>)',
                surface: 'rgb(var(--surface) / <alpha-value>)',
                border: 'rgb(var(--border) / <alpha-value>)',
                text: 'rgb(var(--text) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                accent2: 'rgb(var(--accent-2) / <alpha-value>)',
            },
            fontFamily: {
                display: ['var(--font-display)', 'Space Mono', 'monospace'],
                sans: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
                mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
            },
            fontSize: {
                '300': ['0.8rem', { lineHeight: '1.5' }],
                '400': ['1rem', { lineHeight: '1.6' }],
                '500': ['1.25rem', { lineHeight: '1.5' }],
                '600': ['1.56rem', { lineHeight: '1.3' }],
                '700': ['1.95rem', { lineHeight: '1.2' }],
                '800': ['2.44rem', { lineHeight: '1.1' }],
                '900': ['3.05rem', { lineHeight: '1.05' }],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(12px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease forwards',
            },
        },
    },
    plugins: [],
}
