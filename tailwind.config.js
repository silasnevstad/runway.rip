/** @type {number[]} */

module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            scale: {
                101: "1.01",
                103: "1.03",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            animation: {
                bounce1: 'bounce1 1s cubic-bezier(0.19, 0.57, 0.30, 0.98) infinite',
                bounce2: 'bounce2 1s cubic-bezier(0.19, 0.57, 0.30, 0.98) infinite 0.2s',
                bounce3: 'bounce3 1s cubic-bezier(0.19, 0.57, 0.30, 0.98) infinite 0.4s',
            },
            keyframes: {
                bounce1: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-65%)' },
                },
                bounce2: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-65%)' },
                },
                bounce3: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-65%)' },
                },
            }
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};
