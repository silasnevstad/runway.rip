import { mergeClasses } from "@/utils/classNames";

const Divider = ({
    className = '',
    text = '',
    vertical = false,
    color = 'gray',
    opacity = 70,
    margin = 2,
    width = 0.5,
    height = 'full',
    noWrap = true,
}) => {
    const baseStyle = !vertical
        ? `w-${height} h-${width}`
        : `w-${width} h-${height}`;

    const dividerClass = mergeClasses(baseStyle,
        `bg-${color}-500 dark:bg-${color}-800 opacity-${opacity}`,
        `${vertical ? `mx-${margin}` : `my-${margin}`}`,
        className
    );

    return (
        text ? (
            <div className={
                `flex ${vertical ? 'h-full' : 'w-full'} items-center ${vertical ? `mx-${margin}` : `my-${margin}`}`
            }>
                <div className={dividerClass}></div>
                <p className={`text-gray-600 dark:text-gray-400 px-5 ${noWrap && 'whitespace-nowrap'}`}>{text}</p>
                <div className={dividerClass}></div>
            </div>
        ) : (
            <div className={dividerClass}></div>
        )
    );
};

export default Divider;