import { mergeClasses } from "@/utils/styling";

const Divider = ({
    color = 'gray',
    text = '',
    opacity = 30,
    margin = 2,
    width = 0.5,
    height = 'full',
    vertical = false,
    noWrap = true,
    className = '',
    ...props
}) => {
    const baseStyle = !vertical
        ? `w-${height} h-${width}`
        : `w-${width} h-${height}`;

    const dividerClass = mergeClasses(
        baseStyle,
        `bg-${color}-500 dark:bg-${color}-800 opacity-${opacity}`,
        `${vertical ? `mx-${margin}` : `my-${margin}`}`,
        className
    );

    const outerContainerClass = mergeClasses(
        `flex ${vertical ? 'h-full' : 'w-full'} items-center`,
        `${vertical ? `mx-${margin}` : `my-${margin}`}`,
    );

    return (
        text ? (
            <div className={outerContainerClass} {...props} aria-label={text}>
                <div className={dividerClass}></div>
                <p className={`text-gray-600 dark:text-gray-400 px-5 ${noWrap && 'whitespace-nowrap'}`}>{text}</p>
                <div className={dividerClass}></div>
            </div>
        ) : (
            <div className={dividerClass} {...props}></div>
        )
    );
};

export default Divider;