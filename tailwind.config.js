/** @type {number[]} */

const colorTones = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const colors = ["bg", "primary", "gray", "red", "yellow", "orange", "green", "blue", "purple"];
const opacities = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];

module.exports = {
    darkMode: 'class',
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
        ...colors.map((color) => colorTones.map((tone) => `bg-${color}-${tone}`)).flat(),
        ...colors.map((color) => colorTones.map((tone) => `text-${color}-${tone}`)).flat(),
        ...colors.map((color) => colorTones.map((tone) => `border-${color}-${tone}`)).flat(),
        ...opacities.map((opacity) => colors.map((color) => colorTones.map((tone) => `bg-${color}-${tone}/${opacity}`)).flat()).flat(),
        ...opacities.map((opacity) => colors.map((color) => colorTones.map((tone) => `text-${color}-${tone}/${opacity}`)).flat()).flat(),
        ...opacities.map((opacity) => colors.map((color) => colorTones.map((tone) => `border-${color}-${tone}/${opacity}`)).flat()).flat(),
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
