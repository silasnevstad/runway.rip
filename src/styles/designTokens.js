export const colors = {
    primary: {
        DEFAULT: "primary-500",
        light: "primary-400",
        dark: "primary-600",
    },
    red: {
        DEFAULT: "red-500",
    },
    gray: {
        DEFAULT: "gray-500",
        light: "gray-200",
        dark: "gray-700",
    },
    // Add more as needed…
};

export const fontSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
};

export const fontWeights = {
    normal: "font-normal",
    semibold: "font-semibold",
    bold: "font-bold",
};

export const shapes = {
    rounded: "rounded-lg",
    pill: "rounded-full",
    square: "rounded-none",
};

export const spacing = {
    sm: "py-1 px-3",
    md: "py-2 px-6",
    lg: "py-2.5 px-12",
};

export const commonTransitions =
    "transition duration-200 ease-in-out";

// Example variant mapping for buttons
export const buttonVariants = {
    primary:
        "text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-600 dark:hover:bg-primary-500",
    soft: (textColor, bgColor, hoverBgColor) =>
        `text-${textColor} bg-${bgColor}/25 hover:bg-${hoverBgColor}/50 dark:bg-${bgColor}/50 dark:hover:bg-${hoverBgColor}/80 dark:text-gray-200`,
    danger:
        "text-white bg-red-500 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500",
    outline:
        "bg-transparent text-gray-800 hover:bg-gray-100 border border-gray-300 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-600",
    underline:
        "relative bg-transparent text-primary-500 hover:bg-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary-500 after:transition-transform after:duration-300 after:scale-x-0 after:origin-left hover:after:scale-x-100 dark:text-primary-400",
    // Add additional variants as needed…
};
