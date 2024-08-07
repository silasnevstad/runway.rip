/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: "#000",
            white: "#fff",
            bg: {
                0: "#fdfdfd",
                50: "#f7f7f7",
                100: "#f0f0f0",
                200: "#e0e0e0",
                300: "#d0d0d0",
                400: "#b0b0b0",
                500: "#909090",
                600: "#707070",
                700: "#606060",
                800: "#1a1a1a",
                900: "#121212",
            },
            primary: {
                50: "#f0f1ff",
                100: "#d9dbff",
                200: "#afb3ff",
                300: "#858cff",
                400: "#6971fc",
                500: "#6b72fd",
                600: "#4f56fa",
                700: "#3d45e0",
                800: "#2b34b3",
                900: "#1e278f",
            },
            gray: {
                50: "#f9fafb",
                100: "#f4f5f7",
                200: "#DCDCDC",
                300: "#D3D3D3",
                400: "#C0C0C0",
                500: "#A9A9A9",
                600: "#808080",
                700: "#696969",
                800: "#484848",
                900: "#252525",
            },
            red: {
                50: "#fdf2f2",
                100: "#fde8e8",
                200: "#fbd5d5",
                300: "#f8b4b4",
                400: "#f98080",
                500: "#f05252",
                600: "#e02424",
                700: "#c81e1e",
                800: "#9b1c1c",
                900: "#771d1d",
            },
            yellow: {
                50: "#fdfdea",
                100: "#fdf6b2",
                200: "#fce96a",
                300: "#faca15",
                400: "#e3a008",
                500: "#c27803",
                600: "#9f580a",
                700: "#8e4b10",
                800: "#723b13",
                900: "#633112",
            },
            orange: {
                50: "#fff8f1",
                100: "#feecdc",
                200: "#fcd9bd",
                300: "#fcbf88",
                400: "#ff991f",
                500: "#d97704",
                600: "#b45309",
                700: "#92400e",
                800: "#78350f",
                900: "#642609",
            },
            green: {
                50: "#f3faf7",
                100: "#def7ec",
                200: "#bcf0da",
                300: "#84e1bc",
                400: "#31c48d",
                500: "#0e9f6e",
                600: "#057a55",
                700: "#046c4e",
                800: "#03543f",
                900: "#014737",
            },
            blue: {
                50: "#ebf5ff",
                100: "#e1effe",
                200: "#c3ddfd",
                300: "#a4cafe",
                400: "#76a9fa",
                500: "#3f83f8",
                600: "#1c64f2",
                700: "#1a56db",
                800: "#1e429f",
                900: "#233876",
            },
            purple: {
                50: "#f5f3ff",
                100: "#ede9fe",
                200: "#ddd6fe",
                300: "#c4b5fd",
                400: "#a78bfa",
                500: "#8b5cf6",
                600: "#7c3aed",
                700: "#6d28d9",
                800: "#5b21b6",
                900: "#4c1d95",
            },
        },
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
