import {makeClassNameImportant} from "@/utils/utils";

const Badge = ({
    children,
    className = '',
    shape = 'pill', // 'pill', 'square', 'circle'
    border = false,
    style = 'soft', // 'soft', 'solid'
    color = 'primary', // 'primary', 'green'
}) => {
    const baseStyles = 'inline-flex justify-center items-center text-center gap-1 font-medium';

    const shapeStyles = {
        pill: 'rounded-full px-2.5 py-1',
        square: 'rounded-lg px-2.5 py-1',
        circle: 'rounded-full w-8 h-8',
    };

    const colorStyles = {
        soft: {
            primary: 'bg-primary-100 dark:bg-primary-600/25 text-primary-800 dark:text-primary-400',
            green: 'bg-green-100 dark:bg-green-600/25 text-green-800 dark:text-green-400',
            red: 'bg-red-100 dark:bg-red-600/25 text-red-800 dark:text-red-400',
            yellow: 'bg-yellow-100 dark:bg-yellow-600/25 text-yellow-800 dark:text-yellow-400',
            orange: 'bg-orange-100 dark:bg-orange-600/25 text-orange-800 dark:text-orange-400',
            blue: 'bg-blue-100 dark:bg-blue-600/25 text-blue-800 dark:text-blue-400',
            purple: 'bg-purple-100 dark:bg-purple-600/25 text-purple-800 dark:text-purple-400',
            gray: 'bg-gray-100 dark:bg-gray-600/25 text-gray-800 dark:text-gray-400',
        },
        solid: {
            primary: 'bg-primary-600 text-white',
            green: 'bg-green-600 text-white',
            red: 'bg-red-600 text-white',
            yellow: 'bg-yellow-600 text-white',
            orange: 'bg-orange-600 text-white',
            blue: 'bg-blue-600 text-white',
            purple: 'bg-purple-600 text-white',
            gray: 'bg-gray-600 text-white',
        },
    };


    const borderColor = style === 'soft' ? `border-${color}-800` : `border-${color}-600`;
    const borderStyles = border
        ? `border ${borderColor}`
        : '';

    const combinedStyles = [
        baseStyles,
        shapeStyles[shape],
        colorStyles[style][color],
        borderStyles,
        makeClassNameImportant(className),
    ].join(' ');

    return <div className={combinedStyles}>{children}</div>;
};

export default Badge;